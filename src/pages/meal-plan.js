import React from "react"

import { ExpansionPanel } from "../components"
import Layout from "../components/layout"

const MealPlanPage = () => {
  return (
    <Layout>
      Meal Plan
      <ExpansionPanel title="Monday">Temp Meal 1</ExpansionPanel>
    </Layout>
  )
}

export default MealPlanPage