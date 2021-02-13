import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {getTrips} from '../actions/trips'

function Home() {
    const trips = useSelector(state => state.trips);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTrips())
    }, [])

    const mapDistination = trips.map(trip => trip.destination)
    // Only get one if it is repeating more than once
    const fiterDestination = [...new Set(mapDistination)]

    return (
        <div>
            <h2>Where are you going?</h2>

            <ul>
                {fiterDestination.map(destination => (
                    <li key={destination}>
                        <Link to={`/destination/${destination}`}>
                            {destination}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
