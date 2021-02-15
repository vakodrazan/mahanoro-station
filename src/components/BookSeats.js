import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { format } from 'date-fns';
import BookSeatItem from './BookSeatItem';

function BookSeats({ trips, selectSeats }) {
    const { tripId } = useParams();

    const [total, setTotal] = useState(0);
    const findSeatToBook = trips.find(item => Number(item.id) === Number(tripId));

	useEffect(() => {
        // Get the total price
        const newTotal = findSeatToBook?.price * selectSeats.length;
		setTotal(newTotal);
	}, [selectSeats]);

    // console.log(findSeatToBook);

    const seatList = findSeatToBook?.seats.map(seat => (
        <BookSeatItem key={seat?.id} seat={seat} />
    ));

    const date = new Date(findSeatToBook?.departureTime);
    const formatDate = format(date, 'MM/dd/yyyy');
    const time = format(date, "k':'m");



    return (
        <div>
            <header>
                <img src="/images/busIcon.svg" alt="Bus to book" />
                <div>
                    <h1>Book a seat to: </h1>
                    <p>{findSeatToBook?.destination}</p>
                </div>
            </header>
            <div>
                <p>Pick a seat</p>
                <ul>
                    {seatList}
                </ul>
            </div>
            <div>
                <p>Trip informations:</p>
                <ul>
                    <li>
                        <span>Departure time:</span>
                        <p>{time}, {formatDate}</p>
                    </li>
                    <li>
                        <span>Driver:</span>
                        <p>{findSeatToBook?.driverName}</p>
                    </li>
                    <li>
                        <span>Driver's contact:</span>
                        <p>{findSeatToBook?.driverContact}</p>
                    </li>
                    <li>
                        <span>Estimated duration:</span>
                        <p>{findSeatToBook?.estimatedDuration}</p>
                    </li>
                    <li>
                        <span>Breaks:</span>
                        <p>{findSeatToBook?.breaks}</p>
                    </li>
                </ul>

                <div>
                    <span>{findSeatToBook?.price}</span> Ar /seat
                    <button>Book <span>{selectSeats.length}</span> seats</button>
                    <p>Total: {total} Ar</p>
                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({
    trips: state.trips,
    selectSeats: state.selectSeats
}), null)(BookSeats)