import React from 'react'
import { useSelector } from 'react-redux'
import { 
    MyAccountStyle,
    Container,
    MyAccountHeaderStyle, 
} from '../styles'
import MyBooking from './MyBooking';
import UserInformation from './UserInformation';

export default function MyAccount() {
    const userInformation = useSelector(state => state.userInformation);
    const { firstName, lastName} = userInformation;

    return (
        <Container>
            <MyAccountHeaderStyle>
                <img src="/images/userIcon.svg" alt="User Account" />
                <div>
                    <h2>My account</h2>
                    <span>{firstName} {lastName}</span>
                </div>
            </MyAccountHeaderStyle>

            <MyAccountStyle>
                <UserInformation />
                <MyBooking />
            </MyAccountStyle>
        </Container>
    )
}
