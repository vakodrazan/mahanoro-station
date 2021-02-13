import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { format } from 'date-fns';

export default function BookSeats() {
    const { tripId } = useParams();
    const trips = useSelector(state => state.trips)
    const findSeatToBook = trips.find(item => Number(item.id) === Number(tripId));
    console.log(findSeatToBook);

    const seatList = findSeatToBook?.seats.map(seat => (
        <li key={seat.id}>
            {seat.isAvailable 
                ? <img src="/images/seatAvailableIcon.svg" />
                : <img src="/images/seatIcon.svg" />
            }
        </li>
    ))

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
                    <button>Book <span></span> seats</button>
                    <p>Total: Ar</p>
                </div>
            </div>
        </div>
    )
}
