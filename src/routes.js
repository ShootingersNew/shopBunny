import React from "react"
import AdminPage from "./components/pages/AdminPage";
import {Route, Switch} from "react-router-dom"
import LandingPage from "./components/pages/LandingPage"
import Portfolio from "./components/pages/Portfolio"
import Blog from "./components/pages/Blog"
import {isMobileOnly} from 'react-device-detect'
import MenuPage from "./components/pages/MenuPage";
import {useIframeRes} from "./components/_settings/_utils";

export default function Routes() {
    const isMobile = useIframeRes() === 'mobile';
    return (
        <Switch>
            <Route exact path={"/"}>
                <LandingPage/>
            </Route>
            <Route path={'/portfolio'}>
                <Portfolio/>
            </Route>
            <Route path={'/blog'} component={Blog}/>
            {(isMobileOnly || isMobile) && <Route path={'/menu'} component={MenuPage}/>}
            <Route path={'/admin'}>
                <AdminPage getGlobalInfo={true} getItems={'all'}/>
            </Route>
        </Switch>

    )

}
