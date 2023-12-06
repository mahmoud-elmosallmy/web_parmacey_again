function DoctorsFilterReducer(state , action) {
    switch (action.type) {
        case "LOAD_FILTER_DOCTORS":
        
            return {
                ...state,
                all_doctors: [...action.payload],
            }
        case "GIT_DOCTORS_CATEGORY":
            const doctors_Category = action.payload[0].filter((ele) => {
                return ele.category === action.payload[1]
            })

            return {
                ...state,
                doctorsCategory: doctors_Category,
            }
        case "GIT_DOCTORS_CATEGORY2":
            const doctors_Category2 = action.payload[0].filter((ele) => {
                return ele.category === action.payload[1]
            })

            return {
                ...state,
                doctorsCategory2: doctors_Category2,
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
            
        case "FILTER_REGION":
            let { doctorsCategory2 } = state;
            let res = [...doctorsCategory2]
            // console.log(res);
            let { region } = state.filters;
            let temFilterRegionch1;
            let temFilterRegionch2;
            let temFilterRegionch3;
                if (region !== "الجميع") {
                    temFilterRegionch1 = doctorsCategory2.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[0] === region
                    });
                // }
                
                // if (region !== "all") {
                    temFilterRegionch2 = doctorsCategory2.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[1] === region
                    });
                // }
                // if (region !== "all") {
                    temFilterRegionch3 = doctorsCategory2.filter((curElem) => {
                        let a = {...curElem.region}
                        return a[2] === region
                    });
                    res = [...temFilterRegionch1 , ...temFilterRegionch2, ...temFilterRegionch3]
                }

            // console.log(temFilterRegionch1);
            // console.log(temFilterRegionch2);
            // console.log(temFilterRegionch3);
            // console.log(res);
            return {
                ...state,
                doctorsCategory: res
            }
    
        default:
            return state;
    }
}
export default DoctorsFilterReducer