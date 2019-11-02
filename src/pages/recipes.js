import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import { RecipeCard, Modal, Input } from '../components'

import { updateRecipe } from '../state/recipes'

import '../styles/recipeStyle.css'

const EMPTY_RECIPE = {
  title: "",
  description: "" ,
  cookTime: { hours: 0, min: 0 },
  servings: 0,
  ingredients: [],
  steps: [],
  tags: []
}

const RecipeDetails = ({ recipe, onClose, onSave, index }) => {
  const [rec, setRec] = useState(recipe)
  const { title, description, cookTime, servings, tags } = rec
  const dispatch = useDispatch()

  const update = (section, value) => {
    const newRecipe = {...rec, [section]: value}
    setRec(newRecipe)
    dispatch(updateRecipe(index, newRecipe))
  }

  const updateCookTime = (param, value) => {
    update("cookTime", {...cookTime, [param]: value})
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
      <Input className="sage-recipe-modal--servings"
        size="small" label="Tags: " value={tags.join(", ")}
        onChange={(val) => update("tags", val)}/>
      <p>Separate your tags with commas</p>
    </Modal>
  )
}

const RecipesPage = () => {
  const savedRecipes = useSelector(state => state.recipes)
  const [recipes, setRecipes] = useState(savedRecipes)
  useEffect(() => {
    setRecipes(savedRecipes)
  }, [savedRecipes])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const filterRecipes = (value) => {
    const filtered = savedRecipes.filter(recipe => recipe.title.toLowerCase().includes(value.toLowerCase()))
    setRecipes(filtered)
  }

  return (
    <Layout>
      <div className="sage-recipes-page">
        <Input placeholder="Search recipes by title or by tag" onChange={filterRecipes} />
        <div className="sage-recipes">
          {recipes.map((recipe, idx) =>
            <RecipeCard recipe={recipe} onClick={() => setSelectedRecipe(idx)} />)
          }
        </div>
        {selectedRecipe !== null &&
          <RecipeDetails
            recipe={recipes[selectedRecipe]}
            index={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
            onSave={() => {}}
          />
        }
      </div>
    </Layout>
  )
}

export default RecipesPage