import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './components/Home'
import Menu from './components/Menu'

export default function App() {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/myAccount">
                    <h1>My Account</h1>
                </Route>
            </Switch>
        </div>
    )
}
