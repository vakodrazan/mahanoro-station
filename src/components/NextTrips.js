import { format } from 'date-fns';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function NextTrips() {
    const { destination } = useParams();
    const trips = useSelector(state => state.trips)

    const filterTripsByDestination = trips.filter(trip => trip.destination ===destination);
    console.log(filterTripsByDestination);

    return (
        <article>
            <header>
                <h2>Next trips to:</h2>
                <p>{destination}</p>
            </header>
            <ul>
                {filterTripsByDestination.map(item => {
                    const date = new Date(item.departureTime);
                    var options = { weekday: 'long'};
                    const departureDay = new Intl.DateTimeFormat('en-US', options).format(item.departureTime);

                    const formatDate = format(date, 'MM/dd/yyyy');
                    const time = format(date, "k':'m")
                    console.log(time);
                    return (
                        <li key={item.id}>
                            <div>
                                <span>{departureDay}</span>
                                <span>{time}</span>
                            </div>
                            <div>
                                <span>{formatDate}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}
