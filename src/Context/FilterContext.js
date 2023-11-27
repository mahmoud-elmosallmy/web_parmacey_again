import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from "../Reducer/FilterReducer";

const FilterDoctors = createContext()

const API = "https://data-base-pharmacy.onrender.com/doctors";

function FilterContext({children}) {

    const [dataDoctors , setDataDoctors] = useState([])
    console.log(dataDoctors);

    const initialAuthState = {
        doctors: [],
        isLoadingData: false,
    }

    const [state , dispatch] = useReducer(reducer , initialAuthState)

    const gitData = async (url) => {
        dispatch({type: "SET_LOADING_DATA"})
        try {
            const res = await axios.get(url);
            dispatch({type: "GIT_DOCTORS",payload: res.data})
            setDataDoctors(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        gitData(API)
    },[])

    return (
        <FilterDoctors.Provider value={{...state}}>{children}</FilterDoctors.Provider>
    )
}

const useDoctors = () => {
    return useContext(FilterDoctors)
};

export default FilterContext;
export {useDoctors}