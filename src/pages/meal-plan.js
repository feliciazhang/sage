import React from "react"
import { useSelector } from "react-redux"

import { ExpansionPanel } from "../components"
import Layout from "../components/layout"

import "../styles/mealPlanStyle.css"

const MealPlanPage = () => {
  const savedPlan = useSelector(state => state.mealPlan)
  const savedRecipes = useSelector(state => state.recipes)

  const options = savedRecipes.map(item => ({ value: item.title, label: item.title }))

  return (
    <Layout>
      {Object.entries(savedPlan).map(meals => (
        <ExpansionPanel key={meals[0]} title={meals[0]} savedMeals={meals[1]} recipeOptions={options}/>
      ))}
    </Layout>
  )
}

export default MealPlanPage
