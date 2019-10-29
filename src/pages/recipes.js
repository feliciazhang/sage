import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { doTest } from '../state/test'

import Layout from "../components/layout"

const RecipesPage = () => {
  const {test} = useSelector(state => state.test)
  const dispatch = useDispatch()
  return (
    <Layout>
      <button onClick={() => dispatch(doTest(test+1))}>Recipes</button>
      I am {test}
    </Layout>
  )
}

export default RecipesPage