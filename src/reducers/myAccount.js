export default  function myAccount(state = {}, action) {
    switch (action.type) {
        case "ADD_TO_MY_ACCOUNT":
            return {
                ...state, 
                account: action.value,
                isClicked: true
            }
        case "CLOSE_MODAL":
            return {
                ...state, 
                isClicked: false
            }
    
        default:
            return state
    }
}