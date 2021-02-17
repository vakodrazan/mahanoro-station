export default  function myAccount(state = {}, action) {
    switch (action.type) {
        case "BOOK_SEATS":
            return {
                ...state, 
                selectSeats: [...state.selectSeats, action.value]
            }
        case "REMOVE_SEAT":
            const newSeatsItem = state.filter(
                (item) => item.id !== action.value
            );
            return {
                ...state,
                selectSeats: [...newSeatsItem]
            };

        case "ADD_TO_MY_ACCOUNT":
            return {
                ...state,
                account: [...state.account, action.value],
                isClicked: true
            }
        case "CLOSE_MODAL":
            return {
                ...state, 
                isClicked: false
            }
        case "CANCEL_BOOKING":
            const newAccount = state.account.filter(item => item.id !== action.value)
            return {
                ...state, 
                account: newAccount
            }
        default:
            return state
    }
}