import React from 'react'
import { useFilterDoctors } from '../Context/DoctorsFilterContext'
import styled from 'styled-components';

function SearchForCategory() {

    const {doctorsCategory2,updateFilterValue} = useFilterDoctors()

    console.log(doctorsCategory2);
    // console.log(doctorsCategory);

    // const a = doctorsCategory.map((e) => {
    //     return e
    // })
    // console.log(a);

    const getUniqueData = (data , property) => {
        // let newVal = []
        let arr = []
        data.map((ele) => {
            arr.push(...ele[property])
        })
        return (arr = ["الجميع" , ...new Set(arr)])
      }


    const regionOnlyData = getUniqueData(doctorsCategory2 , "region")

    const showCategoryData = regionOnlyData.map((ele,i) => {
        return <button key={i} type='button' name='region' onClick={updateFilterValue} value={ele}>{ele}</button>
      })
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
    button:visited {
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