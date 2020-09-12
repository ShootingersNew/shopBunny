import React from "react"
import AdminPage from "./components/pages/AdminPage";
import {Route, Switch} from "react-router-dom"
import LandingPage from "./components/pages/LandingPage"
import Portfolio from "./components/pages/Portfolio"
import Blog from "./components/pages/Blog"

export default function Routes() {
    return (
        <Switch>
            <Route exact path={"/"}>
                <LandingPage/>
            </Route>
            <Route path={'/portfolio'}>
                <Portfolio/>
            </Route>
            <Route path={'/blog'} component={Blog}/>
            <Route path={'/admin'} component={AdminPage}/>
        </Switch>

    )

}
