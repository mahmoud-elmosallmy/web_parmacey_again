import React, { useState } from 'react'
import { useFilterDoctors } from '../Context/DoctorsFilterContext'
import styled from 'styled-components';

function SearchForCategory() {

    const [addActive , setAddActive] = useState("")

    const {doctorsCategory2,updateFilterValue} = useFilterDoctors()

    // console.log(doctorsCategory2);
    console.log(addActive);

    const getUniqueData = (data , property) => {
        console.log(data);
        let arr = [];
        data.map((ele) => {
            return arr.push(...ele[property])
        })
        return arr = ["الجميع" , ...new Set(arr)]
    }



    // const HandleClick = (ele) => {
    //     updateFilterValue(ele)
    // }
    // console.log(ele.target);
    // console.log(ele.target.datatype);
    // console.log(ele.alternate);
    // console.log(ele.target.datatype);
    // setAddActive(null)
    // setAddActive(ele.target.datatype)

    const regionOnlyData = getUniqueData(doctorsCategory2 , "region")

    const showCategoryData = regionOnlyData.map((ele,i) => {
        // console.log(i);
        return <button 
            key={i}
            type='button' 
            className={`${addActive === i ? "active" : ""}`} 
            name='region' 
            onClick={(ele) => {
                    return (updateFilterValue(ele),
                        setAddActive(i)
                    )
                }
            } 
            value={ele}>
                {ele}
            </button>
    })
    // console.log(showCategoryData);
    return (
        <SearchForCategoryStyle>
            <div className='container'>
                <div className='box'>
                {showCategoryData}
                </div>
            </div>
        </SearchForCategoryStyle>
    ) 
}

const SearchForCategoryStyle = styled.div`
    .box {
        text-align: center;
        margin: 15px;
    }

    button {
        border: none;
        padding: 10px;
        color: white  ;
        background-color: #ff5000;
        border-radius: 4px;
    }
    button:hover {
        background-color: #f4550d;
    }
    button.active {
        background-color: #ffc2a6;
        color: #f4550d  ;
        border: #f4550d  ;
    }
    @media screen and (max-width: 768px) {
        & {

        }
        button {
            border: none;
            padding: 5px;
            color: white;
            margin: 1px;
            background-color: #ff5000;
        }
    }
`;

export default SearchForCategory