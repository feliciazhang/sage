
import React from "react
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import {Button, Input} from "../components"
import "../styles/grocery-list.css"
import {updateItem} from "../state/grocery"
import { UNITS } from '../constants'

const GroceryItem = ({listItem, onChange}) => {
  const {quantity, unit, item} = listItem
  const onFieldChanged = (param, value) => {
    onChange({...listItem, [param]: value})
  }

  return (
    <div className="sage-grocery-list-item"> 
      <Input type="number" size="small" className="sage-item-line-unit" value={quantity} onChange={(value) => onFieldChanged("quantity", value)} />
      <Input size="small" className="sage-item-line-unit" value={unit} onChange={(value) => onFieldChanged("unit", value)} />
      <Input size="small" className="sage-item-line" value={item} onChange={(value) => onFieldChanged("item", value)} />
    </div>
  )
}

const GroceryListPage = () => {
  const groceries = useSelector(state => {console.log(state, "SDOIJFSOIDJIODS"); return state.grocery})
  const [grocery, setGrocery] = useState(groceries)
  const dispatch = useDispatch()

  const add = (item) => {
    const moreGroceries = [...grocery]
    moreGroceries.push(item)
    console.log(moreGroceries, "askjdn")
    setGrocery(moreGroceries)
    dispatch(updateItem(moreGroceries))
  }

  const update = (idx, item) => {
    let clone = grocery.splice(0)
    clone[idx] = item
    console.log(clone, "MORE")
    setGrocery(clone)
    dispatch(updateItem(clone))    
  }
  // const remove = (idx) => {
  //   deleteItem(idx)
  // }
  
  return (
    <Layout>
      <div className="sage-grocery-list">
        Grocery List
        {grocery.map((item, index) => <GroceryItem listItem={item} onClick={() => {}} onChange={(newItem) => update(index, newItem)}/>)}
        <Button type='secondary' onClick={() => add({quantity: 0, unit: UNITS.NA, item: "item"})}>
          + add item</Button>
      </div>
    </Layout>
  )
}

export default GroceryListPage