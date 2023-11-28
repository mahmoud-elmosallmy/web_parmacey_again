import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from "../Reducer/DoctorsFilterReducer";
import { useDoctors } from './DoctorsContext';

const FilterDoctors = createContext()

function DoctorsFilterContext({children}) {
    
    const { doctors } = useDoctors()
    const [numId, setNumId] = useState([])

    const initialAuthState = {
        filterDoctorsChildren: [],
        isLoadingFilterDoctors: true,
    }

    const [state , dispatch] = useReducer(reducer , initialAuthState)



    useEffect(() => {
        dispatch({type: "GIT_DOCTORS_CHILDREN", payload: [doctors , `${numId}`]})
    },[numId,doctors])

    // console.log(state);

    return (
        <FilterDoctors.Provider value={{...state , setNumId}}>{children}</FilterDoctors.Provider>
    )
}

const useFilterDoctors = () => {
    return useContext(FilterDoctors)
};

export default DoctorsFilterContext;
export {useFilterDoctors}