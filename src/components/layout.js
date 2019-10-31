import React from "react"
import PropTypes from "prop-types"
import { Nav } from "./"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="sage-container">
      {<Nav/>}
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
