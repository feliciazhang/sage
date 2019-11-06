import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateItem } from "../state/grocery"
import { UNITS, UNITS_DROPDOWN } from '../constants'
import { listWithId, withoutId } from '../constants/utils'
import Layout from "../components/layout"
import { Button, Input, Dropdown, Delete, Modal } from "../components"

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
  const [modalStep, setModalStep] = useState(0) // 0 is closed
  const [email, setEmail] = useState('')
  const [showError, setShowError] = useState(false)

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

  const handleEmailChange = (value) => {
    setEmail(value)
    setShowError(false)
  }
  
  const handleClickSend = () => {
    if (email.includes("@")) {
      setModalStep(2)
    } else {
      setShowError(true)
    }
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
      <Button className="sage-list--send" onClick={() => setModalStep(1)}>Send grocery list</Button>
      <Modal
        title="Send your grocery list"
        onClose={() => setModalStep(0)}
        size="small"
        isOpen={modalStep > 0}>
        {modalStep === 1 ? (
          <div>
            <Input size="small" className="sage-list-send-input" label="Email" onChange={handleEmailChange} />
            {showError && <p className="sage-list--error">Please enter a valid email</p>}
            <Button className="sage-list--send-button" onClick={handleClickSend}>Send</Button>
          </div>
        ): (
          <p className="sage-list--sent">Your grocery list has been sent! Please check your inbox.</p>
        )}
      </Modal>
    </Layout>
  )
}

export default GroceryListPage
