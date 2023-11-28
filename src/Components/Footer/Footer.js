import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { FaSquareFacebook } from "react-icons/fa6";


function Footer() {
  return (
    <FooterStyle>
        <div className='container'>
            <div className='parent'>
                <div className='social_media'>
                    <h4> وسائل التواصل </h4>
                    <Link to={'https://www.facebook.com/profile.php?id=100063739105921&mibextid=LQQJ4d'} target='_blank' >
                        <FaSquareFacebook className='icon'/>
                    </Link>
                </div>
                <div className='number'>
                    <h4>    للتواصل عبر الواتص</h4>
                        <Link to={'https://wa.me/+0201009710971'} target='_blank' >
                        01009710971
                        </Link>
                    </div>
            </div>
            <div className='create'>Website Design created with Mahmoud </div>
        </div>
    </FooterStyle>
  )
}
const FooterStyle = styled.section`
background-color: #333333;
padding: 20px 0;

.parent {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    .social_media {

        .icon {
            color: #0866ff;
            background-color: white;
        }
    }
    .number a {
        text-decoration: none;
        color: white;
    }
    h4 {
        color: white
    }
}
.create {
    text-align: center;
    color: white;
    font-size: 10px;
    margin-top: 15px;
}
`;
export default Footer