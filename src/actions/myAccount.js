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