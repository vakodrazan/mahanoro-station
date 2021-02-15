import { format } from 'date-fns';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../styles';

export default function NextTrips() {
    const { destination } = useParams();
    const trips = useSelector(state => state.trips)

    const filterTripsByDestination = trips.filter(trip => trip.destination ===destination);
    console.log(filterTripsByDestination);

    return (
        <article>
            <header>
                <img src="/images/clockIcon.svg" alt="Next trip" />
                <div>
                    <h2>Next trips to:</h2>
                    <p>{destination}</p>
                </div>
            </header>
            <ul>
                {filterTripsByDestination.map(item => {
                    const date = new Date(item.departureTime);

                    var options = { weekday: 'long'};
                    const departureDay = new Intl.DateTimeFormat('en-US', options).format(item.departureTime);

                    const formatDate = format(date, 'MM/dd/yyyy');
                    const time = format(date, "k':'m");

                    const findAvailableSeat = item.seats.filter(seat => seat.isAvailable === true);
                    return (
                        <li key={item.id}>
                            <img src="/images/busIcon.svg" alt="Bus destination" />
                            <div>
                                <p>{departureDay}</p>
                                <p>{time}</p>
                            </div>
                            <div>
                                <p>{formatDate}</p>
                                <p>
                                    {findAvailableSeat.length} {findAvailableSeat.length > 1 
                                        ? "seats left"
                                        : "seat left"
                                    }
                                </p>
                            </div>
                            <Link to={`/bookSeat/${item.destination}/${item.id}`}>
                                <ButtonStyle>
                                    Book a seat
                                </ButtonStyle>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}
