import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"

import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting

const todo = lazy(() => import("./views/apps/todo/Todo"))
const error404 = lazy(() => import("./views/pages/misc/error/404")) 
// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
    <AppRoute exact path="/" component={() => <Redirect to="/todo/all" />} />
    <AppRoute
            path="/todo"
            exact
            component={() => <Redirect to="/todo/all" />}
          />
          <AppRoute path="/todo/:filter" component={todo} />


          
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
