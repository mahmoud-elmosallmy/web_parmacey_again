import React from 'react'
import styled from 'styled-components'
import Photo from "../../Assets/parmacey.png";
function PhotoPharmacy() {
  return (
    <PhotoPharmacyStyle>
        <img src={Photo} alt='PhotoPharmacy'/>
        <div className='namedoc'> 
            <h6>. صيدلية الدكتور عبدالبديع</h6>
            <p> متاح خدمة التوصبل مجانا </p>
        </div>
    </PhotoPharmacyStyle>
  )
}
const PhotoPharmacyStyle = styled.section`
img {
    width: 100%;
}
.namedoc {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h6 {
        color: #ff5000;
    }
    p {
        font-size: 16px;
        font-weight: bold;
    }
}
`;

export default PhotoPharmacy