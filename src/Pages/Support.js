import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


function Support() {
  return (
    <SupportStyle>
      <div className='container'>

        <div className='support'>
          <h4> للتواصل مع الصيدليه لطلب دواء  </h4>
          <p> : يرجي التواص عن طريق </p>
          <div className='social'>
              <div className='social_media'>
                  <h6>    صفحتنا الرئيسيه علي الفيس بوك </h6>
                  <Link to={'https://www.facebook.com/profile.php?id=100063739105921&mibextid=LQQJ4d'} target='_blank' >
                      <FaSquareFacebook className='icon'/> <h4>إضغط هنا</h4>
                  </Link>
              </div>
              <div className='number'>
                <h6>   للتواصل عبر الواتس</h6>
                    <Link to={'https://wa.me/+0201009710971'} target='_blank' >
                    01009710971 <IoLogoWhatsapp className='wicon' />

                    </Link>
              </div>
            </div>
            <h6> العنوان </h6>
            <h5>  طناح شارع البحر أمام مجمع الصحابة </h5>
          </div>
        <div className='support'>
          <h4> إضافه دكتور جديد او تعديل دكتور </h4>
          <p> : يرجي التواص عن طريق </p>
          <div className='social'>
              <div className='social_media'>
                  <h6>    صفحتنا الرئيسيه علي الفيس بوك </h6>
                  <Link to={'https://www.facebook.com/profile.php?id=100063739105921&mibextid=LQQJ4d'} target='_blank' >
                      <FaSquareFacebook className='icon'/> <h4>إضغط هنا</h4>
                  </Link>
              </div>
              <div className='number'>
                <h6>    للتواصل عبر الواتس</h6>
                    <Link to={'https://wa.me/+0201009710971'} target='_blank' >
                    01009710971 <IoLogoWhatsapp className='wicon' />

                    </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='add_number'>
          
        </div>
    </SupportStyle>
  )
}
const SupportStyle = styled.div`
min-height: 71.6vh;
padding: 10px;
.support {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > h4 {
    padding: 15px;
    background-color: #ff5000;
    color: white;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: .3s;

    .icon {
      font-size: 40px;
    }
  }
}
.number {
  display: flex;
    flex-direction: column;
    align-items: flex-end;

    .wicon {
      color: #46da60;
    }
}
`;

export default Support