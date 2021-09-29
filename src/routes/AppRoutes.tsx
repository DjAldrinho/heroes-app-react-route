import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoginComponent} from "../components/login/LoginComponent";
import {DashboardRoutes} from "./DashboardRoutes";

export const AppRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginComponent}/>
                    <Route component={DashboardRoutes}/>
                </Switch>
            </div>
        </Router>
    )
}
