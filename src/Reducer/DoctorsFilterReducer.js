function DoctorsFilterReducer(state , action) {
    switch (action.type) {
        case "":
            
            return {
                ...state,
                doctors: action.payload
            }
    
        default:
            return state;
    }
}
export default DoctorsFilterReducer