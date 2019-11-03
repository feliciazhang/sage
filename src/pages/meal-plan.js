import React, { useState } from "react"
import { useSelector } from "react-redux"

import { ExpansionPanel } from "../components"
import Layout from "../components/layout"

import "../styles/mealPlanStyle.css"

const MealPlanPage = () => {
  const savedPlan = useSelector(state => state.mealPlan)
  const [plan, setPlan] = useState(savedPlan)

  const savedRecipes = useSelector(state => state.recipes)
  const [recipes] = useState(savedRecipes)

  const options = []
  recipes.map(item => (options.push(
    {value: item.title, label: item.title})))

  return (
    <Layout>
      {Object.entries(plan).map(meals => (
        <ExpansionPanel title={meals[0]} meals={meals[1]} recipeOptions={options}/>
      ))}
    </Layout>
  )
}

export default MealPlanPage
