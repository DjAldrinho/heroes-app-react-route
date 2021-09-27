import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavBarComponent} from "../components/ui/nav-bar/NavBarComponent";
import {HomeComponent} from "../components/home/HomeComponent";
import {MarvelComponent} from "../components/marvel/MarvelComponent";
import {DCComponent} from "../components/dc/DCComponent";
import {AnimeComponent} from "../components/anime/AnimeComponent";

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <NavBarComponent/>

                <Switch>
                    <Route path="/marvel">
                        <MarvelComponent/>
                    </Route>
                    <Route path="/dc">
                        <DCComponent/>
                    </Route>
                    <Route path="/anime">
                        <AnimeComponent/>
                    </Route>
                    <Route path="/">
                        <HomeComponent/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
