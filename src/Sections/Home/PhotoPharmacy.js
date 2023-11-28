import React from 'react'
import styled from 'styled-components'
import Photo from "../../Assets/parmacey.png";
function PhotoPharmacy() {
  return (
    <PhotoPharmacyStyle>
        <img src={Photo} alt='PhotoPharmacy'/>
    </PhotoPharmacyStyle>
  )
}
const PhotoPharmacyStyle = styled.section`
img {
    width: 100%;
}
`;

export default PhotoPharmacy