import React, { createContext, useContext,
    //  useEffect, useReducer
     } from 'react'
// import reducer from "../Reducer/DoctorsFilterReducer";
import { useDoctors } from './DoctorsContext';

const FilterDoctors = createContext()

function DoctorsFilterContext({children}) {

    // const [dataDoctors , setDataDoctors] = useState([])
    // console.log(dataDoctors);
    const { doctors } = useDoctors()
    console.log(doctors);

    // const initialAuthState = {
    //     filterDoctors: [],
    //     // isLoadingData: false,
    // }

    // // const [state , dispatch] = useReducer(reducer , initialAuthState)
    // const [state , dispatch] = useReducer(reducer , initialAuthState)
    // // dispatch({type: "FILTER"})



    // useEffect(() => {
    //     dispatch({type: "GIT_CATEGORY_DATA", payload: doctors})
    // },[doctors])

    return (
        <FilterDoctors.Provider value={{}}>{children}</FilterDoctors.Provider>
    )
}

const useFilterDoctors = () => {
    return useContext(FilterDoctors)
};

export default DoctorsFilterContext;
export {useFilterDoctors}