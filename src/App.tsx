import React from 'react';
import './App.css';
import auth from './Utils/helpers';
import {TOKEN, LOGIN_PATH, REGISTER_PATH, USER_PATH}  from './Config/constants';
import {  BrowserRouter,Switch,  Route,  Redirect , RouteProps } from 'react-router-dom';
import UserPage from './Container/UserPage';
import LoginPage from './Container/LoginPage';
import RegisterPage from './Container/RegisterPage';

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;


function ProtectedRoute({isAuthenticated, authenticationPath, ...routeProps}: ProtectedRouteProps) {
  
  if(isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute isAuthenticated={!!auth.get(TOKEN)} authenticationPath={LOGIN_PATH} path={USER_PATH} component={UserPage} />
        <Route
          exact
          path={LOGIN_PATH}
          component={LoginPage}
        />
        <Route
          exact
          path={REGISTER_PATH}
          component={RegisterPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
