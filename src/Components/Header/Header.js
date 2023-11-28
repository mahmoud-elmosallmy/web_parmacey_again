import React from 'react'
import Logo from '../../Assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";

function Header() {
    return (
        <HeaderStyle>
            <div className='container'>
                <div className='top_header'>
                    <Link to={'/'} className='logo'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                    <div className='links'>
                        <div className='serve'>
                            <h4>خدمه العملاء</h4>
                            <p><IoCall /> 01009710971</p>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
border-bottom: 1px solid #d2d2d2;

.top_header {
    display: flex;
    align-items: center;
    justify-content: space-between;


    .logo img {
        width: 100px;
    }
} 
`;

export default Header