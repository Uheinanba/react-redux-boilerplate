import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { applyRouterMiddleware, Router } from 'react-router'

const Root = ({ store, history, routes }) => (
  <Provider store={store}>
    <div>
      <Router
        history={history}
        routes={routes}
        render={
          applyRouterMiddleware()
        } />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
}

export default Root
