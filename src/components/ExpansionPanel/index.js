import React from "react"
import PropTypes from "prop-types"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import "./style.css"

class ExpansionPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: true }
    this.expand = this.expand.bind(this)
    this.close = this.close.bind(this)
  }

  expand() {
    this.setState({
      expanded: true,
    })
  }

  close() {
    this.setState({
      expanded: false,
    })
  }

  render() {
    return (
      <div className="panel-container">
        <div className="panel-header">
          <div className="panel-title">{this.props.title}</div>
          {this.state.expanded ? (
            <div className="panel-icon">
              <IoIosArrowUp size={24} onClick={this.close} />
            </div>
          ) : (
            <div className="panel-icon">
              <IoIosArrowDown size={24} onClick={this.expand} />
            </div>
          )}
        </div>
        {this.state.expanded ? (
          <div className="panel-content">
          <div className="panel-meals">{this.props.children}</div></div>
        ) : null}
      </div>
    )
  }
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
}

export default ExpansionPanel
