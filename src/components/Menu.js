import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../styles'

export default function Menu() {
    return (
        <Header>
            <Link to="/">
                <h1>
                    Mahanoro Station
                </h1>
            </Link>
            <Link to="/myAccount">
                <p>
                    My account
                </p>
            </Link>
        </Header>
    )
}
