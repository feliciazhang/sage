import React, { useState } from "react"
import { useSelector } from 'react-redux'

import Layout from "../components/layout"
import { RecipeCard, Modal, Input } from '../components'

import '../styles/recipeStyle.css'

// TODO: ADD/EDIT/DELETE recipes and show detail view

const RecipeDetails = ({ recipe, onClose, onSave }) => {
  console.log("hello")
  return (
    <Modal title={recipe.title} isOpen={true} onClose={onClose} >
      stuff about the recipe goes here {JSON.stringify(recipe)}
    </Modal>
  )
}

const RecipesPage = () => {
  const savedRecipes = useSelector(state => state.recipes)
  const [recipes, setRecipes] = useState(savedRecipes)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const filterRecipes = (event) => {
    const { value } = event.target
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