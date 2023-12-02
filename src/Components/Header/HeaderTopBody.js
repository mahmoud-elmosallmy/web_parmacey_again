import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function HeaderTopBody({namebody}) {
    console.log(namebody);
  return (
    <HeaderTopBodystyle>
        <Link to={'/'}>  الصفحة الرئيسية  </Link>  {namebody} /
    </HeaderTopBodystyle>
  )
}
const HeaderTopBodystyle = styled.section`
height: 4rem;
background-color: #F6F8FA;
display: flex;
align-items: center;
font-size: 1.2rem;
flex-direction: row-reverse;
margin: 0 0 30px 0;

a {
    text-decoration: none;
}
`;

export default HeaderTopBody