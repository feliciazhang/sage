import React from 'react';
import Link from 'gatsby-link';

import './style.css'

const Nav = () => (
  <div className="nav">
    <div className="nav-item title">
      sage
    </div>
    <div className="link-container">
      <div className="nav-item">
        <Link className="nav-link" activeClassName="nav-link--active" to="/recipes/">
          Recipes
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" activeClassName="nav-link--active" to="/meal-plan/">
          Meal plan
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" activeClassName="nav-link--active" to="/grocery-list/">
          Grocery list
        </Link>
      </div>
      </div>
  </div>
)

export default Nav