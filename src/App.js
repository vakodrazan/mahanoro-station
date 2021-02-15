import React from 'react'
import { Route, Switch } from 'react-router'
import {
    BookSeats,
    Home,
    Menu,
    MyAccount,
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
                    <MyAccount />
                </Route>
                <Route path={`/destination/:destination`}>
                    <NextTrips />
                </Route>
                <Route path={`/bookseat/:destination/:tripId`}>
                    <BookSeats />
                </Route>
            </Switch>
        </div>
    )
}
