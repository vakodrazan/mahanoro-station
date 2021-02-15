export default function selectSeats(state = [], action) {
    switch (action.type) {
        case "BOOK_SEATS":
            return [...state, action.value]
        case "REMOVE_SEAT":
            const newSeatsItem = state.filter(
				(item) => item.id !== action.value
			);
			return [...newSeatsItem];
    
        default:
            return state
    }
}