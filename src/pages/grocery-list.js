import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { doTest } from '../state/test'
import UnifiedNav from '../components/nav'

import Layout from "../components/layout"

const GroceryListPage = () => {
  const {test} = useSelector(state => state.test)
  const dispatch = useDispatch()
  return (
    <Layout>
      <button onClick={() => dispatch(doTest(test+1))}>Grocery List</button>
      I am {test}
    </Layout>
  )
}

export default GroceryListPage