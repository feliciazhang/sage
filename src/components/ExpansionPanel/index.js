import React, { useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { Button, Modal, Dropdown, Input, Delete } from "../"
import { updateMeal } from "../../state/mealPlan"
import { withoutId, listWithId } from '../../constants/utils'

import "./style.css"

const ExpansionPanel = ({ title, savedMeals, recipeOptions }) => {
  const [expanded, setExpanded] = useState(true)
  const [adding, setAdding] = useState(false)
  const [recMeal, setRecMeal] = useState(null)
  const [recServings, setRecServings] = useState(1)
  const [meals, setMeals] = useState(listWithId(savedMeals))
  const dispatch = useDispatch()

  const addMeal = () => {
    setAdding(false)
    const newMeals = [...meals]
    newMeals.push({
      meal: recMeal,
      servings: recServings
    })
    setMeals(newMeals)
    dispatch(updateMeal(title, withoutId(newMeals)))
  }

  const updateServings = (idx, servings) => {
    const clone = [...meals]
    clone[idx] = { ...clone[idx], servings }
    setMeals(clone)
    dispatch(updateMeal(title, withoutId(clone)))
  }

  const deleteMeal = index => {
    const clone = [...meals]
    clone.splice(index, 1)
    setMeals(clone)
    dispatch(updateMeal(title, withoutId(clone)))
  }

  return (
    <div className="panel-container">
      <div className="panel-header">
        <div className={`panel-title ${expanded ? "panel-title--expanded" : ''}`}>{title}</div>
        {expanded ? (
          <div className="panel-icon">
            <IoIosArrowUp size={24} onClick={() => setExpanded(false)} />
          </div>
        ) : (
          <div className="panel-icon">
            <IoIosArrowDown size={24} onClick={() => setExpanded(true)} />
          </div>
        )}
      </div>
      {expanded && (
        <div className="panel-content">
          <div className="panel-meals">
            {meals.map((item, index) => (
              <div className="panel-meal" key={item.id}>
                <Input
                  className="sage-recipe-modal--number servings-input"
                  type="number"
                  size="small"
                  value={item.servings}
                  onChange={val => updateServings(index, val)}
                />
                <div className="meal-name">{` servings of ${item.meal}`}</div>
                <div className="panel-delete-meal">
                  <Delete onClick={() => deleteMeal(index)} />
                </div>
              </div>
            ))}
          </div>
          <div className="panel-add">
            <Button onClick={() => setAdding(true)}>+ Add meal</Button>
          </div>
          {adding && (
            <Modal
              onClose={() => setAdding(false)}
              title={"Add Meal: " + title}
              isOpen={true}
              className="modal-add"
            >
              <div className="panel-input">
                <Dropdown
                  placeholder="Pick recipe to add"
                  options={recipeOptions}
                  onChange={val => setRecMeal(val)}
                />
                <Input
                  className="sage-recipe-modal--servings"
                  type="number"
                  size="small"
                  label="Servings: "
                  value={1}
                  onChange={val => setRecServings(val)}
                />
                <Button onClick={() => addMeal()}>Add</Button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  )
}

ExpansionPanel.propTypes = {
  /**
   * The main label that appears on the expansion panel
   */
  title: PropTypes.string.isRequired,
  /**
   * The meals data
   */
  meals: PropTypes.array.isRequired,
  /**
   * The recipes data
   */
  recipeOptions: PropTypes.array.isRequired,
}

export default ExpansionPanel
