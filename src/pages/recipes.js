import React from "react"
import { useSelector } from 'react-redux'

import Layout from "../components/layout"
import { RecipeCard } from '../components'

// TODO: ADD/EDIT/DELETE recipes and show detail view

const RecipesPage = () => {
  const recipes = useSelector(state => state.recipes)

  return (
    <Layout>
      <div className="sage-recipes">
        {recipes.map(recipe => <RecipeCard recipe={recipe} onClick={() => {}} />)}
      </div>
    </Layout>
  )
}

export default RecipesPage