import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "../containers/auth/login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../containers/home/dashboard";
import {Surveys} from "../containers/surveys";
import {Profile} from "../containers/profile";
import {Survey} from "../containers/surveys/survey";

export default (
    <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/surveys" exact component={Surveys} />
        <PrivateRoute path="/surveys/:id" exact component={Survey} />
        <PrivateRoute path="/profile" exact component={Profile} />
    </Switch>
)
