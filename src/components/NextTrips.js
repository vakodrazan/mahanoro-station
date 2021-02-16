import { format } from 'date-fns';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { 
    ButtonStyle, 
    Container,
    NextTripHeaderStyle,
    NextTripContentStyle
 } from '../styles';

export default function NextTrips() {
    const { destination } = useParams();
    const trips = useSelector(state => state.trips)

    const filterTripsByDestination = trips.filter(trip => trip.destination ===destination);

    return (
        <Container>
            <NextTripHeaderStyle>
                <img src="/images/clockIcon.svg" alt="Next trip" />
                <div>
                    <h2>Next trips to:</h2>
                    <p>{destination}</p>
                </div>
            </NextTripHeaderStyle>
            <NextTripContentStyle>
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
                            <div className="content">
                                <div className="departure">
                                    <p>{departureDay}</p>
                                    <time dateTime={date}>{time}</time>
                                </div>
                                <div>
                                    <p>{formatDate}</p>
                                    <p>
                                        <span>{findAvailableSeat.length}</span> seats left
                                    </p>
                                </div>
                            </div>
                            <Link to={`/bookSeat/${item.destination}/${item.id}`}>
                                {findAvailableSeat.length > 1 
                                    ?
                                    <ButtonStyle>
                                        Book a seat
                                    </ButtonStyle>
                                    : <ButtonStyle disabled>
                                        Book a seat
                                    </ButtonStyle>
                                }
                            </Link>
                        </li>
                    )
                })}
            </NextTripContentStyle>
        </Container>
    )
}
