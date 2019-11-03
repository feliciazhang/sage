import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import { Modal, Input, Button, Dropdown, Delete } from '../'
import { updateRecipe, deleteRecipe } from '../../state/recipes'
import { UNITS, UNITS_DROPDOWN } from '../../constants'
import { listWithId, withoutId } from '../../constants/utils'

import './style.css'

const EMPTY_INGREDIENT = { quantity: 0, unit: UNITS.CUPS, item: "" }

const Ingredients = ({ ingredients, update }) => {
  const [ing, setIng] = useState(listWithId(ingredients))
  const updateIngredients = (idx, param, value) => {
    let clone = ing.splice(0)
    clone[idx] = {...clone[idx], [param]: value}
    setIng(clone)
    update("ingredients", withoutId(clone))
  }

  const deleteIngredient = (idx) => {
    const clone = ing.splice(0)
    clone.splice(idx, 1)
    setIng(clone)
    update("ingredients", withoutId(clone))
  }

  const add = () => {
    const clone = ing.splice(0)
    clone.push(EMPTY_INGREDIENT)
    setIng(clone)
    update("ingredients", withoutId(clone))
  }

  return (
    <div className="sage-recipe-modal--ingredients-wrapper">
      <div className="sage-recipe-modal--ingredients">Ingredients:</div>
      {ing.map((row, idx) => (
        <div className="sage-recipe-modal--ingredients-row" key={row.id}>
          <Input className="sage-recipe-modal--number"
            type="number" size="small" value={row.quantity}
            onChange={(val) => updateIngredients(idx, "quantity", val)} />
          <Dropdown className="sage-units-dropdown" options={UNITS_DROPDOWN} selected={row.unit}
            onChange={(val) => updateIngredients(idx, "unit", val)} isSearchable={true} placeholder="unit" />
          <Input size="small" value={row.item} placeholder="Ingredient"
            onChange={(val) => updateIngredients(idx, "item", val)} />
          <Delete onClick={() => deleteIngredient(idx)} />
        </div>
      ))}
      <Button type="secondary" onClick={add}>+ Add ingredient</Button>
    </div>
  )
}

const RecipeDetails = ({ recipe, onClose, index }) => {
  const [rec, setRec] = useState(recipe)
  const { title, description, cookTime, servings, tags, ingredients, steps } = rec
  const [showSaved, setShowSaved] = useState(false)
  const dispatch = useDispatch()

  const update = (section, value) => {
    const newRecipe = {...rec, [section]: value}
    setRec(newRecipe)
    dispatch(updateRecipe(index, newRecipe))

    setShowSaved(true)
    setTimeout(() => {
      setShowSaved(false)
    }, 1000)
  }

  const updateCookTime = (param, value) => {
    update("cookTime", {...cookTime, [param]: value})
  }

  const arrayifyTags = (tags) => {
    const arr = tags.split(",")
    return arr.map(tag => tag.trim())
  }

  const onDelete = () => {
    onClose()
    dispatch(deleteRecipe(index))
  }

  const updateSteps = (e) => {
    const { value } = e.target
    update("steps", value)
  }

  return (
    <Modal title="Edit your recipe" isOpen={true} onClose={onClose}>
      <Input size="small" label="Title: " value={title} onChange={(val) => update("title", val)} />
      <Input size="small" label="Description: "
        value={description} onChange={(val) => update("description", val)} />

      <div className="sage-recipe-modal--cooktime">
        <Input size="small" label="Cooktime: " value={cookTime.hours} type="number"
          onChange={(val) => updateCookTime("hours", val)}/>
        <div className="sage-recipe-modal--text">{cookTime.hours > 1 ? "hrs": "hr"}</div>
        <Input size="small" value={cookTime.min} type="number" max={59}
          onChange={(val) => updateCookTime("min", val)}/>
        <div className="sage-recipe-modal--text">min</div>
      </div>
      <Input className="sage-recipe-modal--number"
        type="number" size="small" label="Servings: " value={servings}
        onChange={(val) => update("servings", val)}/>

      <Ingredients
        ingredients={ingredients}
        update={update}
      />
      <div>Instructions:</div>
      <textarea className="sage-recipe-modal--steps" onChange={updateSteps}>{steps}</textarea>

      <Input size="small" label="Tags: " value={tags.join(", ")}
        onChange={(val) => update("tags", arrayifyTags(val))}/>
      <p className="sage-recipe-modal--hint">Separate your tags with commas</p>
      <Button className="sage-recipe-modal--delete" type="secondary" onClick={onDelete}>Delete</Button>
      {showSaved && <p className="sage-recipe-modal--saved">Saved</p>}
    </Modal>
  )
}

export default RecipeDetails
