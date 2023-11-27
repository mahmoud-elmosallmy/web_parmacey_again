import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

function AllDoctors() {
  return (
    <ButtonStyle>
        <div className='container'>
            <div className='btn'>
                <NavLink to={'/doctors'} className="doctors">مشاهدة جميع أنواع الدكاترة</NavLink>
            </div>
        </div>
    </ButtonStyle>
  )
}
const ButtonStyle  = styled.div`
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    
    .doctors {
        width: 60%;
        background-color: #0d6efd;
        padding: 1rem 1rem; 
        color: #fff;
        border: none;
        text-decoration: none;
        transition: all .3s;
        font-size: 22px;
    }
    .doctors:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
    }
    .doctors:active {
        color: #fff;
        background-color: #0a58ca;
        border-color: #0a53be;
    }
    .doctors:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(var(49,132,253), .5)
    }
}
@media screen and (max-width: 767px) {
    .btn .doctors {
        width: 80%;
        font-size: 17px;
    }
}

`;

export default AllDoctors