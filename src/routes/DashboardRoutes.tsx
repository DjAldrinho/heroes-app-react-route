import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {MarvelComponent} from "../components/marvel/MarvelComponent";
import {DCComponent} from "../components/dc/DCComponent";
import {AnimeComponent} from "../components/anime/AnimeComponent";
import {HomeComponent} from "../components/home/HomeComponent";
import {NavBarComponent} from "../components/ui/nav-bar/NavBarComponent";

export const DashboardRoutes = () => {

    return (
        <>
            <NavBarComponent/>
            <div>
                <Switch>
                    <Route exact path="/marvel">
                        <MarvelComponent/>
                    </Route>
                    <Route exact path="/dc">
                        <DCComponent/>
                    </Route>
                    <Route exact path="/anime">
                        <AnimeComponent/>
                    </Route>
                    <Route exact path="/hero/:id">
                        <AnimeComponent/>
                    </Route>
                    <Route exact path="/">
                        <HomeComponent/>
                    </Route>
                    <Redirect exact to="/login"/>
                </Switch>
            </div>
        </>
    )
}
