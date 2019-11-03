import React, { useState } from "react"
import PropTypes from "prop-types"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { Button, Modal, Dropdown, Input } from "../"
import { updateMeal } from "../../state/mealPlan"
import "./style.css"
import { useDispatch } from "react-redux"

const ExpansionPanel = ({ children, title, meals, recipeOptions }) => {
  const [expanded, setExpanded] = useState(true)
  const [adding, setAdding] = useState(false)
  const [recMeal, setRecMeal] = useState(null)
  const [recServings, setRecServings] = useState(1)
  const dispatch = useDispatch()

  const expand = () => {
    setExpanded(true)
  }

  const close = () => {
    setExpanded(false)
  }

  const addMeal = () => {
    setAdding(false)
    dispatch(
      updateMeal(title, {
        meal: recMeal,
        servings: recServings,
      })
    )
  }

  return (
    <div className="panel-container">
      <div className="panel-header">
        <div className="panel-title">{title}</div>
        {expanded ? (
          <div className="panel-icon">
            <IoIosArrowUp size={24} onClick={() => close()} />
          </div>
        ) : (
          <div className="panel-icon">
            <IoIosArrowDown size={24} onClick={() => expand()} />
          </div>
        )}
      </div>
      {expanded ? (
        <div className="panel-content">
          <div className="panel-meals">
            {meals.map(item => (
              <div className="panel-meal" style={{ padding: "4px 8px" }}>
                {item.meal + ", " + item.servings + " servings"}
              </div>
            ))}
          </div>
          <div className="panel-add">
            <Button onClick={() => setAdding(true)}>
              + Add Meal
            </Button>
          </div>
          {adding ? (
            <Modal
              onClose={() => setAdding(false)}
              title={"Add Meal: " + title}
              isOpen={true}
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
                <Button onClick={() => addMeal()}>Add Meal</Button>
              </div>
            </Modal>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

ExpansionPanel.propTypes = {
  /**
   * The content of the expansion panel.
   */
  children: PropTypes.node.isRequired,
  /**
   * The main label that appears on the expansion panel
   */
  title: PropTypes.string.isRequired,
  /**
   * The meals data
   */
  meals: PropTypes.node.isRequired,
  /**
   * The recipes data
   */
  recipeOptions: PropTypes.node.isRequired,
}

export default ExpansionPanel
