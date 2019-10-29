import React from "react"
import PropTypes from "prop-types"
import NavBar from "./nav"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="sage-container">
      {<NavBar/>}
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
