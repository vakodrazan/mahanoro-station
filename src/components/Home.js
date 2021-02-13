import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {getTrips} from '../actions/trips'

function Home() {
    const trips = useSelector(state => state.trips);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTrips())
    }, [])



    console.log(trips);
    return (
        <div>
            <h2>Where are you going?</h2>
        </div>
    )
}

export default Home
