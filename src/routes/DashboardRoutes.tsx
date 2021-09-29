import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {HomeComponent} from "../components/home/HomeComponent";
import {NavBarComponent} from "../components/ui/nav-bar/NavBarComponent";
import {PokemonComponent} from "../components/pokemon/PokemonComponent";

export const DashboardRoutes = () => {

    return (
        <>
            <NavBarComponent/>
            <div>
                <Switch>
                    <Route exact path="/dashboard">
                        <HomeComponent/>
                    </Route>
                    <Route exact path="/dashboard/pokemon/type/:id">
                        <PokemonComponent/>
                    </Route>
                    <Redirect exact to="/"/>
                </Switch>
            </div>
        </>
    )
}
