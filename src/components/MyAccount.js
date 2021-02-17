import React from 'react'
import { useSelector } from 'react-redux'
import { 
    Container, 
} from '../styles'
import MyBooking from './MyBooking';
import UserInformation from './UserInformation';

export default function MyAccount() {
    const userInformation = useSelector(state => state.userInformation);
    const { firstName, lastName} = userInformation;

    return (
        <Container>
            <header>
                <h2>My account</h2>
                <span>{firstName} {lastName}</span>
            </header>

            <article>
                <UserInformation />
                <MyBooking />
            </article>
        </Container>
    )
}
