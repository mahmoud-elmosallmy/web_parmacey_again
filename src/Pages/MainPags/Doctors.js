import React from 'react'
import styled from 'styled-components'
import InputSearch from '../../Components/InputSearch/InputSearch';
import PageFilterDoctor from '../../Sections/Doctors/PageFilterDoctor';

function Doctors() {

    return (
        <DoctorsStyle>
            <div className='container'>
                <InputSearch />
                <PageFilterDoctor />
            </div>
        </DoctorsStyle>
    )
}
const DoctorsStyle = styled.div`

`;

export default Doctors