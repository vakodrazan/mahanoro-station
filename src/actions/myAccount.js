export function addToMyAccount(booked) {
    return {
        type: "ADD_TO_MY_ACCOUNT",
        value: booked
    }
}

export function closeModal() {
    return {
        type: "CLOSE_MODAL",
    }
}

export function bookSeats(seat) {
    return {
        type: "BOOK_SEATS",
        value: seat
    }
}
export function removeSeat(seatId) {
    return {
        type: "REMOVE_SEAT",
        value: seatId
    }
}
export function cancelBooking(seatId) {
    return {
        type: "CANCEL_BOOKING",
        value: seatId
    }
}