import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeModal } from '../actions/myAccount'
import { ButtonStyle } from '../styles'

export default function ShowModal() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(closeModal())}>Close</button>
            <h2>Booking comfirmed!</h2>
            <p>
                Thank you for trusting our services. Your booking has been added to your account. You can review it there.
            </p>
            <Link to="/myAccount">
                <ButtonStyle>Check your account</ButtonStyle>
            </Link>
        </div>
    )
}
