import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import reducer from "../Reducer/DoctorsReducer";

const FilterDoctorsContext = createContext()

const API = "https://data-base-pharmacy.onrender.com/doctors";

function DoctorsContext({children}) {

    const [dataDoctors , setDataDoctors] = useState([])
    console.log(dataDoctors);

    const initialAuthState = {
        doctors: [],
        // isLoadingData: false,
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
        <FilterDoctorsContext.Provider value={{...state}}>{children}</FilterDoctorsContext.Provider>
    )
}

const useDoctors = () => {
    return useContext(FilterDoctorsContext)
};

export default DoctorsContext;
export {useDoctors}