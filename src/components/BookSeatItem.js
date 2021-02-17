import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookSeats, removeSeat } from '../actions/myAccount';

export default function BookSeatItem({seat}) {
    const myAccount = useSelector(state => state.myAccount);
    const { selectSeats } = myAccount
    const dispatch = useDispatch()

    function bookNewSeat() {
        // Check of the item is already exists or not
        const isAlreadyBooked = selectSeats.some((item) => item.id === seat.id);
        if (isAlreadyBooked) {
            return ( 
                    <img 
                        src="/images/seatBookedIcon.svg" 
                        alt="Bus seat" 
                        onClick={() => dispatch(removeSeat(seat.id))} 
                    />
            )
        }
        return (
                <img 
                    src="/images/seatAvailableIcon.svg" 
                    alt="Bus seat" 
                    onClick={() => dispatch(bookSeats(seat))} 
                />
        )
    }
    
    return (
        <li>
            {seat?.isAvailable 
                ? bookNewSeat()
                : <img src="/images/seatIcon.svg" alt="Bus seat" /> 
            }
        </li>
    )
}
