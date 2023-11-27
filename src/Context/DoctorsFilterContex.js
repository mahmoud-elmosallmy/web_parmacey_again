import React, { createContext, useContext, useReducer } from 'react'
import reducer from "../Reducer/DoctorsFilterReducer";

const FilterDoctors = createContext()


function DoctorsFilterContex({children}) {

    // const [dataDoctors , setDataDoctors] = useState([])
    // console.log(dataDoctors);

    const initialAuthState = {
        doctors: [],
        isLoadingData: false,
    }

    const [state , dispatch] = useReducer(reducer , initialAuthState)


    return (
        <FilterDoctors.Provider value={{...state}}>{children}</FilterDoctors.Provider>
    )
}

const useFilterDoctors = () => {
    return useContext(FilterDoctors)
};

export default DoctorsFilterContex;
export {useFilterDoctors}