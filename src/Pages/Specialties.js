import React from 'react'
import InputSearch from '../Components/InputSearch/InputSearch'
import Departments from '../Sections/Home/Departments'
import styled from 'styled-components'

function Specialties() {
    return (
        <SpecialtiesStyle>
            <div className='container'>
                <div className='title'>
                    <h2> جميع التخصصات </h2>
                </div>
                <InputSearch />
                <Departments />
            </div>
        </SpecialtiesStyle>
    )
}
const SpecialtiesStyle = styled.section`
margin-top: 20px;
.title {
    display: flex;
    justify-content: flex-end;

    h2 {
        color: white;
        background-color: #ff5000;
        width: fit-content;
    }
}
`;

export default Specialties