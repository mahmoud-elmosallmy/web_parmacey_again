import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Children from "../../Assets/children.jpg";

function Departments() {
    return (
        <DepartmentStyle>
            <div className='container'>
                <div className='parent'>
                    <div className='box'>
                        <h2>أطفال</h2>
                        <img src={Children} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <NavLink to="#" className="btn btn-primary">مشاهدة جميع دكاتره الاطفال</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentStyle>
    )
}
const DepartmentStyle = styled.section`
.parent .box {
    width: 300px;
    padding: 15px;
    text-align: center;
}
@media screen and (max-width: 768px) {
    .parent .box {
        width: 100%
    }   
}
`;
export default Departments