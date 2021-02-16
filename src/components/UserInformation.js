import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { 
    updateUser,
    userFirstName,
    userLastName,
    userPhoneNumber
} from '../actions/userInformation';
import { 
    ButtonStyle, 
    FormStyle ,
    InputStyle
} from '../styles'

export default function UserInformation() {
    const userInformation = useSelector(state => state.userInformation);
    const { firstName, lastName, phoneNumber} = userInformation;
    const dispatch = useDispatch()
    return (
        <section>
            <h3>My personnal informations:</h3>
            <FormStyle 
                onSubmit={e => {
                    e.preventDefault(); 
                    dispatch(updateUser())}
                }
            >
                <label>First name</label>
                <InputStyle type="text" 
                    value={firstName} 
                    onChange={(e) => dispatch(userFirstName(e.target.value))}
                />
                <label>Last name</label>
                <InputStyle type="text" 
                    value={lastName} 
                    onChange={(e) => dispatch(userLastName(e.target.value))}
                />
                <label>Phone number</label>
                <InputStyle type="text" 
                    value={phoneNumber} 
                    onChange={(e) => dispatch(userPhoneNumber(e.target.value))}
                />
                <ButtonStyle>Update</ButtonStyle>
            </FormStyle>
        </section>
    )
}
