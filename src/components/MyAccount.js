import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    Container, 
} from '../styles'
import MyBooking from './MyBooking';
import UserInformation from './UserInformation';

export default function MyAccount() {
    const userInformation = useSelector(state => state.userInformation);
    const { firstName, lastName} = userInformation;
    const dispatch = useDispatch()
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
