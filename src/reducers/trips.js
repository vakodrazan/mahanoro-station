export default function trips(state = [], action) {
    switch (action.type) {
        case "GET_TRIPS":
            return action.value
        default:
            return state
    }
}