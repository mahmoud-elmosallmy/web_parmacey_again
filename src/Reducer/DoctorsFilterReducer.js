function DoctorsFilterReducer(state , action) {
    switch (action.type) {
        case "GIT_DOCTORS_CHILDREN":
            console.log(action.payload);
            const doctorsChildren = action.payload[0].filter((ele) => {
                return ele.category === action.payload[1]
            })

            return {
                ...state,
                filterDoctorsChildren: doctorsChildren,
            }
    
        default:
            return state;
    }
}
export default DoctorsFilterReducer