export default  function myAccount(state = {}, action) {
    switch (action.type) {
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