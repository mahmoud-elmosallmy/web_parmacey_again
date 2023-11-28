import React from 'react'
import InputSearch from '../Components/InputSearch/InputSearch'
import Departments from '../Sections/Home/Departments'
import AllDoctors from '../Sections/Home/AllDoctors'
import styled from 'styled-components'
import PhotoPharmacy from '../Sections/Home/PhotoPharmacy'

function Home() {
    
    return (
        <HomeStyle>
            <div className='container'>
                <PhotoPharmacy />
                <InputSearch />
                <AllDoctors />
                <Departments />
            </div>
        </HomeStyle>
    )
}
const HomeStyle = styled.div`
padding: 30px 0;
`;
export default Home