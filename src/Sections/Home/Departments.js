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
                    <div className='box'>
                        <h2>جلديه</h2>
                        <img src={Children} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <NavLink to="#" className="btn btn-primary">مشاهدة جميع دكاتره جلديه</NavLink>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>جراحه</h2>
                        <img src={Children} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <NavLink to="#" className="btn btn-primary">مشاهدة جميع دكاتره جراحه</NavLink>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>عظام</h2>
                        <img src={Children} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <NavLink to="#" className="btn btn-primary">مشاهدة جميع دكاتره عظام</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </DepartmentStyle>
    )
}
const DepartmentStyle = styled.section`
.parent {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.parent .box {
    width: 300px;
    padding: 15px;
    text-align: center;
    border: 1px solid #0d6efd;
    border-radius: 12px;
    margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
    .parent .box {
        width: 100%
    }   
}
`;
export default Departments