import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import { RecipeCard, Input, Button, RecipeDetails } from '../components'
import { addRecipe } from '../state/recipes'

import '../styles/recipeStyle.css'

const EMPTY_RECIPE = {
  title: "Title",
  description: "Description" ,
  cookTime: { hours: 0, min: 0 },
  servings: 0,
  ingredients: [],
  steps: [],
  tags: []
}

const RecipesPage = () => {
  const dispatch = useDispatch()
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

  const add = async () => {
    const newIdx = savedRecipes.length
    await dispatch(addRecipe(EMPTY_RECIPE))
    setSelectedRecipe(newIdx)
  }

  return (
    <Layout>
      <div className="sage-recipes-page">
        <div className="sage-recipes--toolbar">
          <Input placeholder="Search recipes by title or by tag" onChange={filterRecipes} />
          <Button className="sage-recipes--add" onClick={add}>Add recipe</Button>
        </div>
        <div className="sage-recipes">
          {recipes.map((recipe, idx) =>
            <RecipeCard key={idx} recipe={recipe} onClick={() => setSelectedRecipe(idx)} />)
          }
        </div>
        {selectedRecipe !== null &&
          <RecipeDetails
            recipe={recipes[selectedRecipe]}
            index={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        }
      </div>
    </Layout>
  )
}

export default RecipesPage
