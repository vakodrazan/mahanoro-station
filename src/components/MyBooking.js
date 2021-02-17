import { format } from 'date-fns';
import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { cancelBooking } from '../actions/myAccount';
import { BookingStyle, CancelButtonStyle } from '../styles';

function MyBooking({ trips, myAccount }) {
    const dispatch = useDispatch()
    const {account, selectSeats} = myAccount;

    const findTrips = trips.filter(trip => account.some(item => item.id === trip.id));

    return (
        <BookingStyle>
            <h3>My bookings:</h3>
            <ul>
                {findTrips.length > 0 && findTrips.map(item => {
                    const date = new Date(item.departureTime);
                    const formatDate = format(date, 'MM/dd/yyyy');
                    // Get the hours and minutes
                    const time = format(date, "k':'m");
                    const totalPrice = item.price * selectSeats.length

                    return (
                        <li key={item.id}>
                            <img src="/images/busIcon.svg" alt="Bus Mahanoro" />
                            <div>
                                <p>{item.destination}</p>
                                <time dateTime={date}>{formatDate}, {time}</time>
                            </div>
                            <div>
                                <p>{selectSeats.length} seats</p>
                                <span>{totalPrice}Ar</span>
                            </div>
                            <CancelButtonStyle onClick={() => dispatch(cancelBooking(item.id))}>Cancel</CancelButtonStyle>
                        </li>
                    )
                })}
            </ul>
        </BookingStyle>
    )
}


export default connect((state) => ({
    trips: state.trips,
    myAccount: state.myAccount,
}), null)(MyBooking)