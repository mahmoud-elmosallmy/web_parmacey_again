import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { useDoctors } from '../../Context/DoctorsContext';
import Spine from '../../Components/Loading/Spine';

function Departments() {

    const { category , isLoadingDataCategory} = useDoctors();

    console.log(isLoadingDataCategory);
    if (isLoadingDataCategory) {
        return <Spine />
    }


    const showDepartments = category.map((ele) => {
        return(
            <div className='box'>
                <h2>{ele.category}</h2>
                <img src={ele.image} className="card-img-top" alt={ele.category} />
                <div className="card-body">
                    <NavLink to={`/category/${ele.category}`} className="btn btn-primary">فتح</NavLink>
                </div>
            </div>
        )
    })

    return (
        <DepartmentStyle>
            <div className='container'>
                <div className='parent'>
                    {showDepartments}
                </div>
            </div>
        </DepartmentStyle>
    )
}
const DepartmentStyle = styled.section`
.parent {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.parent .box {
    width: 300px;
    padding: 15px;
    text-align: center;
    border: 1px solid #0d6efd;
    border-radius: 12px;
    margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
    .parent .box {
        width: 100%
    }   
}
`;
export default Departments