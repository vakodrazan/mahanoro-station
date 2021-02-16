import React from 'react'
import { connect } from 'react-redux';

function MyBooking({ myAccount, selectSeats }) {
    const { account } = myAccount;
    // const findBooking =  myAccount?.seats.filter(item => selectSeats(seat => seat.id === item.id))
    // console.log(seatsBooking);

    console.log(account);

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
                        <span>Ar</span>
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