import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import { Modal, Input, Button, Dropdown, Delete } from '../'
import { updateRecipe } from '../../state/recipes'
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
          <Input className="sage-recipe-modal--number" min={0}
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

const RecipeDetails = ({ recipe, onClose, index, isNew, onAdd }) => {
  const [rec, setRec] = useState(recipe)
  const { title, description, cookTime, servings, tags, ingredients, steps } = rec
  const [hasChanges, setHasChanges] = useState(false)
  const [showInvalidModal, setShowInvalidModal] = useState(false)
  const dispatch = useDispatch()

  const update = (section, value) => {
    const newRecipe = {...rec, [section]: value}
    setRec(newRecipe)
    setHasChanges(true)
  }

  const onSave = () => {
    dispatch(updateRecipe(index, rec))
    setHasChanges(false)
    onClose(false)
  }

  const updateCookTime = (param, value) => {
    update("cookTime", {...cookTime, [param]: value})
  }

  const arrayifyTags = (tags) => {
    const arr = tags.split(",")
    return arr.map(tag => tag.trim())
  }

  const updateSteps = (e) => {
    const { value } = e.target
    update("steps", value)
  }

  const onClickSave = () => {
    if (!rec.title) {
      setShowInvalidModal(true)
    } else if (isNew) {
      onAdd(rec)
    } else {
      onSave()
    }
  }

  return (
    <Modal title="Edit your recipe" isOpen={true} onClose={() => onClose(hasChanges)}>
      <Input size="small" placeholder="Title" label="Title*: "
        value={title} onChange={(val) => update("title", val)} />
      <Input size="small" label="Description: " placeholder="Description"
        value={description} onChange={(val) => update("description", val)} />

      <div className="sage-recipe-modal--cooktime">
        <Input min={0} size="small" label="Cooktime: " value={cookTime.hours} type="number"
          onChange={(val) => updateCookTime("hours", val)}/>
        <div className="sage-recipe-modal--text">{cookTime.hours > 1 ? "hrs": "hr"}</div>
        <Input min={0} size="small" value={cookTime.min} type="number" max={59}
          onChange={(val) => updateCookTime("min", val)}/>
        <div className="sage-recipe-modal--text">min</div>
      </div>
      <Input className="sage-recipe-modal--number" min={0}
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
      <Button className="sage-recipe-modal--save" onClick={onClickSave}>Save</Button>

      <Modal
          size="small"
          warning={true}
          isOpen={showInvalidModal}
          onClose={() => setShowInvalidModal(false)}
          title="Cannot save recipe">
          You must add a title for your recipe.
          <Button className="sage-recipes-modal--error-button"
            onClick={() => setShowInvalidModal(false)}>Okay</Button>
        </Modal>
    </Modal>
  )
}

export default RecipeDetails
