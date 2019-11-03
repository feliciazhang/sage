import React from 'react'

import './style.css'

const RecipeCard = ({ recipe, onClick }) => {
  const { title, description, cookTime, servings, tags } = recipe

  return (
    <div className="sage-recipe-card--wrapper" onClick={onClick}>
      <div className="sage-recipe-card">
        <p className="sage-recipe-card--title">{title}</p>
        <p className="sage-recipe-card--description">{description}</p>
        <p className="sage-recipe-card--time">Total time: {cookTime.hours}hr {cookTime.min}min</p>
        <p className="sage-recipe-card--servings">Servings: {servings}</p>
        <div className="sage-recipe-card--tags">
          {tags.map((tag, idx) => <span key={idx} className="sage-recipe-card--tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
