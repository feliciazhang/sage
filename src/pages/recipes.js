import React, { useState } from "react"
import { useSelector } from 'react-redux'

import Layout from "../components/layout"
import { RecipeCard, Modal, Input } from '../components'

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

// TODO: ADD/EDIT/DELETE recipes and show detail view

const RecipeDetails = ({ recipe, onClose, onSave }) => {
  const { title, description, cookTime, servings, tags } = recipe

  return (
    <Modal title="Edit your recipe" isOpen={true} onClose={onClose}>
      <Input size="small" label="Title: " value={title} />
      <Input size="small" label="Description: " value={description} />
      <div className="sage-recipe-modal--cooktime">
        <Input size="small" label="Cooktime: " value={title}/>hrs
        <Input size="small" label="Title: " value={title}/>min
      </div>
    </Modal>
  )
}

const RecipesPage = () => {
  const savedRecipes = useSelector(state => state.recipes)
  const [recipes, setRecipes] = useState(savedRecipes)
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
            onClose={() => setSelectedRecipe(null)}
            onSave={() => {}}
          />
        }
      </div>
    </Layout>
  )
}

export default RecipesPage