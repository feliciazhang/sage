import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateItem } from "../state/grocery"
import { UNITS, UNITS_DROPDOWN } from '../constants'
import { listWithId, withoutId } from '../constants/utils'
import Layout from "../components/layout"
import { Button, Input, Dropdown, Delete } from "../components"

import "../styles/grocery-list.css"

const GroceryItem = ({ listItem, onChange, handleDelete }) => {
  const {quantity, unit, item, id} = listItem
  const onFieldChanged = (param, value) => {
    onChange({...listItem, [param]: value})
  }

  return (
    <div className="sage-grocery-list-item" key={id}> 
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
  const [grocery, setGrocery] = useState(listWithId(groceries))
  const dispatch = useDispatch()

  const add = (item) => {
    const moreGroceries = [...grocery]
    moreGroceries.push(item)
    setGrocery(moreGroceries)
    const newList = withoutId(moreGroceries)
    dispatch(updateItem(newList))
  }

  const update = (idx, item) => {
    let clone = grocery.splice(0)
    clone[idx] = item
    setGrocery(clone)
    const newList = withoutId(clone)
    dispatch(updateItem(newList))    
  }

  const remove = (idx) => {
    const clone = grocery.splice(0)
    setGrocery(clone)
    clone.splice(idx, 1)
    const newList = withoutId(clone)
    dispatch(updateItem(newList))
  }
  
  return (
    <Layout>
      <div className="sage-grocery-list">
        <div className="sage-grocery-list--heading">Grocery list</div>
        {grocery.map((item, index) =>
          <GroceryItem key={item.id} listItem={item} handleDelete={() => remove(index)}
            onChange={(newItem) => update(index, newItem)}/>
        )}
        <Button className="sage-grocery-list--add" type='secondary' onClick={() => add({quantity: 0, unit: UNITS.NA, item: "item"})}>
          + Add item
        </Button>
      </div>
    </Layout>
  )
}

export default GroceryListPage
