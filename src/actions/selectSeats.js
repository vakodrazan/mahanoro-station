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