import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from "../Reducer/DoctorsFilterReducer";
import { useDoctors } from './DoctorsContext';

const FilterDoctors = createContext()

function DoctorsFilterContext({children}) {
    
    const { doctors } = useDoctors()
    const [numId, setNumId] = useState([])

    const initialAuthState = {
        all_doctors: [],
        doctorsCategory: [],
        filterDoctors: [],
        isLoadingFilterDoctors: true,
        filters: {
            search: ""
        }
    }

    const [state , dispatch] = useReducer(reducer , initialAuthState)


    const updateFilterValue = (event) => {
        const name = event.target.name
        const value = event.target.value
        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name , value}})
    }

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_DOCTORS", payload: doctors})
    },[doctors])

    useEffect(() => {
        dispatch({type: "GIT_DOCTORS_CATEGORY", payload: [doctors , `${numId}`]})
    },[numId,doctors])

    useEffect(() => {
        dispatch({type: "FILTER_DOCTORS"})
    },[state.filters])

    // console.log(state);

    return (
        <FilterDoctors.Provider value={{ ...state , setNumId , updateFilterValue }}>{children}</FilterDoctors.Provider>
    )
}

const useFilterDoctors = () => {
    return useContext(FilterDoctors)
};

export default DoctorsFilterContext;
export {useFilterDoctors}