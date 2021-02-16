import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {getTrips} from '../actions/trips'
import { Container, TripList } from '../styles';

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
        <Container>
            <h2>Where are you going?</h2>

            <TripList>
                {fiterDestination.map(destination => (
                    <Link 
                        to={`/destination/${destination}`} 
                        className="list"
                        key={destination} 
                    >
                        <img src="/images/locationCity.svg" />
                        <li >
                            {destination}
                        </li>
                    </Link>
                ))}
            </TripList>
        </Container>
    )
}

export default Home
