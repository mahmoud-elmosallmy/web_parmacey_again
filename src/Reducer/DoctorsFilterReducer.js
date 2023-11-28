function DoctorsFilterReducer(state , action) {
    switch (action.type) {
        case "GIT_CATEGORY_DATA":
            
            

            return {
                ...state,
                filterDoctors: action.payload
            }
    
        default:
            return state;
    }
}
export default DoctorsFilterReducer