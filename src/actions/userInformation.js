export function userFirstName(firstName) {
    return {
        type: "USER_FIRST_NAME",
        value: firstName
    }
}
export function userLastName(lastName) {
    return {
        type: "USER_LAST_NAME",
        value: lastName
    }
}
export function userPhoneNumber(number) {
    return {
        type: "USER_PHONE_NUMBER",
        value: number
    }
}

export function updateUser(user) {
    return {
        type: "UPDATE_USER",
        value: user
    }
}