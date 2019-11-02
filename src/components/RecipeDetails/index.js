import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import { Modal, Input, Button } from '../'
import { updateRecipe, deleteRecipe } from '../../state/recipes'

import './style.css'

const RecipeDetails = ({ recipe, onClose, index }) => {
  const [rec, setRec] = useState(recipe)
  const { title, description, cookTime, servings, tags } = rec
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
      <Input className="sage-recipe-modal--servings"
        type="number" size="small" label="Servings: " value={servings}
        onChange={(val) => update("servings", val)}/>
      <Input size="small" label="Tags: " value={tags.join(", ")}
        onChange={(val) => update("tags", arrayifyTags(val))}/>
      <p className="sage-recipe-modal--hint">Separate your tags with commas</p>
      {showSaved && <p className="sage-recipe-modal--saved">Saved</p>}
      <Button className="sage-recipe-modal--delete" type="secondary" onClick={onDelete}>Delete</Button>
    </Modal>
  )
}

export default RecipeDetails
