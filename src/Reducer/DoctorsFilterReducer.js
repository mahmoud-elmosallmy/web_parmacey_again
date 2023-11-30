function DoctorsFilterReducer(state , action) {
    switch (action.type) {
        case "LOAD_FILTER_DOCTORS":
        
            return {
                ...state,
                all_doctors: [...action.payload],
            }
        case "GIT_DOCTORS_CATEGORY":
            const doctorsCategory = action.payload[0].filter((ele) => {
                return ele.category === action.payload[1]
            })

            return {
                ...state,
                doctorsCategory: doctorsCategory,
            }
        case "UPDATE_FILTER_VALUE":
            const {name , value} = action.payload;

            return {
                ...state,
                filters: {...state.filters , [name]: value},
            }
        case "FILTER_DOCTORS":
            const {all_doctors} = state;
            let temFilterDoctors = [...all_doctors]
            const {search} = state.filters;

            if (search) {
                temFilterDoctors = temFilterDoctors.filter((ele) => {
                    return ele.name.toLowerCase().includes(search)
                })
            }

            return {
                ...state,
                filterDoctors: temFilterDoctors
            }
    
        default:
            return state;
    }
}
export default DoctorsFilterReducer