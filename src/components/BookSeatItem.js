import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookSeats, removeSeat } from '../actions/selectSeats';

export default function BookSeatItem({seat}) {
    const selectSeats = useSelector(state => state.selectSeats);
    const dispatch = useDispatch()

    function bookNewSeat() {
        const isAlreadyBooked = selectSeats.some((item) => item.id === seat.id);
        if (isAlreadyBooked) {
            return ( 
                    <img src="/images/seatBookedIcon.svg" onClick={() => dispatch(removeSeat(seat.id))} />
            )
        }
        return (
                <img src="/images/seatAvailableIcon.svg" onClick={() => dispatch(bookSeats(seat))} />
        )
    }
    
    return (
        <li>
            {seat?.isAvailable 
                ? bookNewSeat()
                : <img src="/images/seatIcon.svg" /> 
            }
        </li>
    )
}
