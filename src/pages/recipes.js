import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import { RecipeCard, Input, Button, RecipeDetails, Modal } from '../components'
import { addRecipe, deleteRecipe } from '../state/recipes'

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

const RecipesPage = () => {
  const dispatch = useDispatch()
  const savedRecipes = useSelector(state => state.recipes)
  const [recipes, setRecipes] = useState(savedRecipes)
  useEffect(() => {
    setRecipes(savedRecipes)
  }, [savedRecipes])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showCloseWarning, setShowClosedWarning] = useState(false)
  const [showDeleteWarning, setShowDeleteWarning] = useState(null)
  const [newRecipe, setNewRecipe] = useState(false)
  const [filters, setFilters] = useState([])

  const filterByTag = (tags) => {
    const arr = tags.split(",")
    setFilters(arr.map(tag => tag.trim()))
  }

  const filterRecipes = () => {
    const filteredTags = savedRecipes.filter(recipe => recipe.tags.some(tag => filters.includes(tag)) ||
      filters.some(tag => recipe.title.toLowerCase().includes(tag.toLowerCase())))
    setRecipes(filteredTags)
  }

  const add = async (recipe) => {
    await dispatch(addRecipe(recipe))
    setNewRecipe(false)
  }

  const onCloseClicked = (hasChanges) => {
    if (hasChanges) {
      setShowClosedWarning(true)
    } else {
      setShowClosedWarning(false)
      setSelectedRecipe(null)
      setNewRecipe(false)
    }
  }

  const onDelete = () => {
    dispatch(deleteRecipe(showDeleteWarning))
    setShowDeleteWarning(null)
  }

  const onClickDelete = (idx, e) => {
    setShowDeleteWarning(idx)
    e.stopPropagation()
  }

  return (
    <Layout>
      <div className="sage-recipes-page">
        <div className="sage-recipes--toolbar">
          <Input placeholder="Search recipes by title or tag (separate keywords with commas)" onChange={filterByTag} />
          <Button className="sage-recipes--add" onClick={filterRecipes}>Search</Button>
        </div>
          <Button onClick={() => setNewRecipe(true)}>Add recipe</Button>
        { recipes.length === 0 &&
          <p className="sage-recipes--empty">No recipes found</p>
        }
        <div className="sage-recipes">
          {recipes.map((recipe, idx) =>
            <RecipeCard key={idx} recipe={recipe}
              onClick={() => setSelectedRecipe(idx)}
              onDeleteClick={(e) => onClickDelete(idx, e)} />)
          }
        </div>
        
        {(selectedRecipe !== null || newRecipe) &&
          <RecipeDetails
            recipe={newRecipe ? EMPTY_RECIPE : recipes[selectedRecipe]}
            index={selectedRecipe}
            isNew={newRecipe}
            onClose={(hasChanges) => onCloseClicked(hasChanges)}
            onAdd={(recipe) => add(recipe)}
          />
        }

        <Modal
          size="small"
          warning={true}
          isOpen={showCloseWarning}
          onClose={() => setShowClosedWarning(false)}
          title="Are you sure?">
          Your changes will be lost. Are you sure you want to exit?
          <div className="sage-recipes--warning-modal">
            <Button className="sage-recipes--modal-button"
              onClick={() => onCloseClicked(false)}>Exit without saving</Button>
            <Button type="secondary" onClick={() => {setShowClosedWarning(false); setNewRecipe(false)}}>
              Cancel
            </Button>
          </div>
        </Modal>

        <Modal
          size="small"
          warning={true}
          isOpen={showDeleteWarning !== null}
          onClose={() => setShowDeleteWarning(null)}
          title="Are you sure?">
          Your recipe will be permanently deleted. Are you sure you want to delete it?
          <div className="sage-recipes--warning-modal">
            <Button className="sage-recipes--modal-button"
              onClick={() => onDelete()}>Delete recipe</Button>
            <Button type="secondary" onClick={() => setShowDeleteWarning(null)}>Cancel</Button>
          </div>
        </Modal>
      </div>
    </Layout>
  )
}

export default RecipesPage
