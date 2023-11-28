
function FilterReducer(state , action) {
    switch (action.type) {
        case "SET_LOADING_CATEGORY_DATA":
            
            return {
                ...state,
                isLoadingDataCategory: true
            }
        case "GIT_DOCTORS":
            
            return {
                ...state,
                doctors: action.payload
            }
        case "SET_LOADING_DATA":
            
            return {
                ...state,
                isLoadingData: false
            }
        case "GIT_CATEGORY_DATA":
            
            return {
                ...state,
                isLoadingDataCategory: false,
                category: action.payload
            }
    
        default:
            return state;
    }
}

export default FilterReducer