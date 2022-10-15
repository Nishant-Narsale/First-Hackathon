export const _login = () => {
    return {
        type: "LOGIN"
    }
}

export const _logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const _student = () => {
    return {
        type: "STUDENT"
    }
}

export const _teacher = () => {
    return {
        type: "TEACHER"
    }
}

export const _Data = (data) => {
    return {
        type: "DATA",
        details: data,
    }
}

export const _Test = (data) => {
    return {
        question: data.que,
        type_change: data.type
    }
}