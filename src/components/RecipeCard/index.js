import React, { useState } from 'react'
import { Button } from '../'

import './style.css'

const RecipeCard = ({ recipe, onClick, onDeleteClick }) => {
  const { title, description, cookTime, servings, tags } = recipe
  const [showDeleteIcon, setShowDeleteIcon] = useState(false)

  return (
    <div className="sage-recipe-card--wrapper" onClick={onClick}
      onMouseOver={() => setShowDeleteIcon(true)} onMouseLeave={() => setShowDeleteIcon(false)}>
      <div className="sage-recipe-card">
        <p className="sage-recipe-card--title">{title}</p>
        <p className="sage-recipe-card--description">{description}</p>
        <p className="sage-recipe-card--time">Total time: {cookTime.hours}hr {cookTime.min}min</p>
        <p className="sage-recipe-card--servings">Servings: {servings}</p>
        <div className="sage-recipe-card--tags">
          {tags.map((tag, idx) => <span key={idx} className="sage-recipe-card--tag">{tag}</span>)}
        </div>
        {showDeleteIcon &&
          <Button className="sage-recipe-card--delete" size="small" type="secondary"
            onClick={onDeleteClick}>Delete</Button>}
      </div>
    </div>
  )
}

export default RecipeCard
