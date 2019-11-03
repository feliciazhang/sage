import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateItem } from "../state/grocery"
import { UNITS, UNITS_DROPDOWN } from '../constants'
import Layout from "../components/layout"
import { Button, Input, Dropdown, Delete } from "../components"

import "../styles/grocery-list.css"

const GroceryItem = ({ listItem, onChange, handleDelete }) => {
  const {quantity, unit, item} = listItem
  const onFieldChanged = (param, value) => {
    onChange({...listItem, [param]: value})
  }

  return (
    <div className="sage-grocery-list-item"> 
      <Input type="number" size="small" className="sage-item-line-quantity"
        value={quantity} onChange={(value) => onFieldChanged("quantity", value)} />
      <Dropdown className="sage-item-line-unit" options={UNITS_DROPDOWN} selected={unit}
        onChange={(value) => onFieldChanged("unit", value)} isSearchable={true} placeholder="unit" />
      <Input size="small" className="sage-item-line" value={item}
        onChange={(value) => onFieldChanged("item", value)} />
      <Delete onClick={handleDelete} />
    </div>
  )
}

const GroceryListPage = () => {
  const groceries = useSelector(state => state.grocery)
  const [grocery, setGrocery] = useState(groceries)
  const dispatch = useDispatch()

  const add = (item) => {
    const moreGroceries = [...grocery]
    moreGroceries.push(item)
    setGrocery(moreGroceries)
    dispatch(updateItem(moreGroceries))
  }

  const update = (idx, item) => {
    let clone = grocery.splice(0)
    clone[idx] = item
    setGrocery(clone)
    dispatch(updateItem(clone))    
  }

  const remove = (idx) => {
    const clone = grocery.splice(0)
    clone.splice(idx, 1)
    setGrocery(clone)
    dispatch(updateItem(clone))
  }
  
  return (
    <Layout>
      <div className="sage-grocery-list">
        Grocery List
        {grocery.map((item, index) =>
          <GroceryItem listItem={item} handleDelete={() => remove(index)} onChange={(newItem) => update(index, newItem)}/>
        )}
        <Button type='secondary' onClick={() => add({quantity: 0, unit: UNITS.NA, item: "item"})}>
          + add item
        </Button>
      </div>
    </Layout>
  )
}

export default GroceryListPage