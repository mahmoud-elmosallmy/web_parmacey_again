function DoctorsFilterReducer(state , action) {
    switch (action.type) {
        case "GIT_DOCTORS_CHILDREN":
            console.log(action.payload);
            const doctorsChildren = action.payload[0].filter((ele) => {
                console.log(ele);
                return ele.category === action.payload[1]
            })
            console.log(doctorsChildren);
            return {
                ...state,
                filterDoctorsChildren: doctorsChildren
            }
    
        default:
            return state;
    }
}
export default DoctorsFilterReducer