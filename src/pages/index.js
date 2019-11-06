import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setHasSeenIntroModal } from '../state/user'

import Layout from "../components/layout"
import { Modal, Button } from "../components"

import './style.css'

const IndexPage = () => {
  const { hasSeenIntroModal } = useSelector(state => state.user)
  const [openModal, setOpenModal] = useState(!hasSeenIntroModal)
  const dispatch = useDispatch()

  const onModalClose = () => {
    dispatch(setHasSeenIntroModal(true))
    setOpenModal(false)
    window.location.pathname = "/recipes"
  }

  return (
    <Layout>
      <Modal
        title="Welcome to sage"
        onClose={onModalClose}
        size="small"
        isOpen={openModal}>
        Thanks for testing out sage! sage is a meal planning application to encourage
        healthier eating and better financial choices. There are 3 main views: the recipes tab
        where you will add, edit and view your recipes, the meal plan tab where you can plan
        your meals for each day of the week, and the shopping list tab which generates a shopping
        list for you based on your meal plan. In this iteration, the default shopping list will be
        hard coded rather than generated, but still editable.<br/><br/>
        For this prototype, there is no backend functionality, so DO NOT REFRESH THE PAGE or your data
        will be lost.
        <div className="sage-intro-modal-actions">
          <Button onClick={onModalClose}>Let's go!</Button>
        </div>
      </Modal>
    </Layout>
  )
}

export default IndexPage
