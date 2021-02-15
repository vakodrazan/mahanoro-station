export default function userInformation(state = {}, action) {
    switch (action.type) {
        case "USER_FIRST_NAME":
            return {
                ...state,
                firstName: action.value
            }
        case "USER_LAST_NAME":
            return {
                ...state,
                lastName: action.value
            }
        case "USER_PHONE_NUMBER":
            return {
                ...state,
                phoneNumber: action.value
            }
        default:
            return state
    }
}