const Admin = (state = null, action) => {
    switch (action.type) {
        case "STUDENT": return false;
        case "TEACHER": return true;
        default: return state;
    }
}

export default Admin