import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeModal } from '../actions/myAccount'
import { ButtonStyle, Modal } from '../styles'

export default function ShowModal() {
    const dispatch = useDispatch()
    return (
        <Modal>
            <section className="inner">
                <img 
                    src="/images/clearIcon.svg" 
                    onClick={() => dispatch(closeModal())} 
                    className="closeModal"
                />
                <h2>Booking comfirmed!</h2>
                <p>
                    Thank you for trusting our services. Your booking has been added to your account. You can review it there.
                </p>
                <Link to="/myAccount">
                    <ButtonStyle>Check your account</ButtonStyle>
                </Link>

            </section>
        </Modal>
    )
}
