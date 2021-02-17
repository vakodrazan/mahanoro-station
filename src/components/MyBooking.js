import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

function MyBooking({ trips, myAccount, selectSeats }) {
    const {account} = myAccount;
    const [total, setTotal] = useState(0);

    const findTrips = trips.filter(trip => account.some(item => item.id === trip.id));

    return (
        <section>
            <h3>My bookings:</h3>
            <ul>
                <li>
                    <img src="/images/busIcon.svg" alt="Bus Mahanoro" />
                    <div>
                        <p></p>
                        <time></time>
                    </div>
                    <div>
                        <p>{selectSeats.length} seats</p>
                        <span>{total}Ar</span>
                    </div>
                    <button>Cancel</button>
                </li>
            </ul>
        </section>
    )
}


export default connect((state) => ({
    trips: state.trips,
    myAccount: state.myAccount,
    selectSeats: state.selectSeats
}), null)(MyBooking)