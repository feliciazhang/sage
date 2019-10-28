# sage
IS4300 - Felicia Zhang, Jenn Der, Willa Shiomos

A meal planning application

### How to develop locally
to run locally: `yarn && yarn start`  
to deploy: `yarn run build` `yarn run deploy`  
you might need to install gatsby if those don't work  
DO NOT COMMIT A PACKAGE-LOCK! YARN ONLY

### Resources
- [Gatsby](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [React hooks](https://reactjs.org/docs/hooks-intro.html)
- [Redux](https://redux.js.org/)

### Directory structure
**pages**:  
Each individual page on the app (ex grocery list, meal plan, recipes). They are all wrapped in the same layout with a nav and header.

**components**:  
Individual parts of pages, and reusable bits

**state**:  
Actions and reducers for the redux store

Global styles and css constants are in [`src/components/layout.css`](./src/components/layout.css)
