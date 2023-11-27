
function FilterReducer(state , action) {
    switch (action.type) {
        case "GIT_DOCTORS":
            
            return {
                ...state,
                doctors: action.payload
            }
        case "SET_LOADING_DATA":
            
            return {
                ...state,
                isLoadingData: true
            }
    
        default:
            return state;
    }
}

export default FilterReducer