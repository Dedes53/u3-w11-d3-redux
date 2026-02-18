const initialState = {
    favourites: {
        companies: [],
    },
}

const mainReducer = (currState = initialState, action) => {
    switch (action.type) {

        case "ADD_TO_FAVOURITES":
            return {
                ...currState,
                favourites: {
                    companies: [...currState.favourites.companies, action.payload]
                }
            }

        default:
            return currState;
    }
}

export default mainReducer;