import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "../containers/auth/login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../containers/home/dashboard";

export default (
    <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Dashboard} />
    </Switch>
)
