import React from 'react'
import { Route, Switch } from 'react-router'
import {
    Home,
    Menu,
    NextTrips,
} from './components'

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
                <Route path={`/destination/:destination`}>
                    <NextTrips />
                </Route>
                <Route path={`/bookseat/:destination/:tripId`}>
                    <h1>Book a seat</h1>
                </Route>
            </Switch>
        </div>
    )
}
