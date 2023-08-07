import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ConnectedRouter } from "connected-react-router";
import { getHistory } from "../index";
import { AdminRoute, UserRoute, AuthRoute } from "./RouteComponents";
import "bootstrap/dist/css/bootstrap.min.css";

/* eslint-disable */
import ErrorPage from "../pages/error";
/* eslint-enable */

import "../styles/theme.scss";
import LayoutComponent from "../components/Layout";
import DocumentationLayoutComponent from "../documentation/DocumentationLayout";
import Login from "../pages/auth/login";
import Verify from "../pages/auth/verify";
import Register from "../pages/auth/register";
import Reset from "../pages/auth/reset/Reset.js";
import Forgot from "../pages/auth/forgot";
import { PiSirenFill } from "react-icons/pi";

const CloseButton = ({ closeToast }) => (
  <i onClick={closeToast} className="la la-close notifications-close" />
);

class App extends React.PureComponent {
  render() {
    if (this.props.loadingInit) {
      return <div />;
    }

    return (
      <div>
        <ToastContainer
          autoClose={5000}
          hideProgressBar
          closeButton={<CloseButton />}
        />
        <ConnectedRouter history={getHistory()}>
          <HashRouter>
            <Switch>
              {/* <Route path="/" exact render={() => <Redirect to="/app/main" />} /> */}
              {/* <Route path="/" exact render={() => <Redirect to="/app/main/mainservice" />} /> */}
              {/* <Route path="/app" exact render={() => <Redirect to="/app/main" />} /> */}
              <Route
                path="/app"
                exact
                render={() => <Redirect to="/app/main/mainservice" />}
              />

              {/* 임시로 추가함 */}
              <Route path="/" component={LayoutComponent} />
              {/* 임시로 추가함 */}

              <UserRoute
                path="/app"
                dispatch={this.props.dispatch}
                component={LayoutComponent}
              />
              <AdminRoute
                path="/admin"
                currentUser={this.props.currentUser}
                dispatch={this.props.dispatch}
                component={LayoutComponent}
              />
              <Route
                path="/documentation"
                exact
                render={() => (
                  <Redirect to="/documentation/getting-started/overview" />
                )}
              />
              <Route
                path="/documentation"
                component={DocumentationLayoutComponent}
              />
              <AuthRoute path="/register" exact component={Register} />
              <AuthRoute path="/login" exact component={Login} />
              <AuthRoute path="/verify-email" exact component={Verify} />
              <AuthRoute path="/password-reset" exact component={Reset} />
              <AuthRoute path="/forgot" exact component={Forgot} />
              <Route path="/error" exact component={ErrorPage} />
              {/* <Redirect from="*" to="/app/main/analytics" /> */}
              <Redirect from="*" to="/app/main/mainservice" />
              {/* 해당 내용(경로)이 없을경우 맨 아래의 from to를 이용해서 app/main/analytice로 이동해라 */}
            </Switch>
          </HashRouter>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.auth.currentUser,
  loadingInit: store.auth.loadingInit,
});

export default connect(mapStateToProps)(App);
