import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoginComponent} from "../components/login/LoginComponent";
import {DashboardRoutes} from "./DashboardRoutes";

export const AppRoutes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <LoginComponent/>
                    </Route>
                    <Route path="/dashboard" component={DashboardRoutes}/>
                </Switch>
            </div>
        </Router>
    )
}
