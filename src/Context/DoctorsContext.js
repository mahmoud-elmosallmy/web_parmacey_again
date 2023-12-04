import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from "../Reducer/DoctorsReducer";

const FilterDoctorsContext = createContext()

const API = "https://data-base-pharmacy.onrender.com/doctors";
// const API = "http://localhost:9000/doctors";
const APICategory = "https://data-base-pharmacy.onrender.com/categorydoctors";

function DoctorsContext({children}) {

    const initialAuthState = {
        doctors: [],
        isLoadingData: false,
        category: [],
        isLoadingDataCategory: false,
    }

    const [state , dispatch] = useReducer(reducer, initialAuthState)

    const gitData = async (url) => {
        dispatch({type: "SET_LOADING_DATA"})
        try {
            const res = await axios.get(url);
            dispatch({type: "GIT_DOCTORS",payload: res.data})
        } catch (err) {
            console.log(err);
        }
    }
    const gitDataCategory = async (url) => {
        dispatch({type: "SET_LOADING_CATEGORY_DATA"})
        try {
            const res = await axios.get(url);
            dispatch({type: "GIT_CATEGORY_DATA",payload: res.data})
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        gitData(API)
        gitDataCategory(APICategory)
    },[])

    // console.log(state);

    return (
        <FilterDoctorsContext.Provider value={{...state}}>{children}</FilterDoctorsContext.Provider>
    )
}

const useDoctors = () => {
    return useContext(FilterDoctorsContext)
};

export default DoctorsContext;
export {useDoctors}