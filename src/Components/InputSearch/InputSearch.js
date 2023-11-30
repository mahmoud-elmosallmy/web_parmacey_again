import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { useFilterDoctors } from '../../Context/DoctorsFilterContext';
import SearchDoctors from './SearchDoctors';

function InputSearch() {

    const { filters: {search} ,  updateFilterValue } =useFilterDoctors();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <InputSearchStyle>
            <h2>إبحث عن الدكتور</h2>
            <div className="input_search">
                <form onClick={handleSubmit} className="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" className="form-control" name='search' placeholder='إكتب هنا' onChange={updateFilterValue} />
                    {/* <label className="form-label" htmlFor="form1">Search</label> */}
                    <button type="submit" className="btn btn-primary" data-mdb-ripple-init>
                        <FaSearch /> بحث
                    </button>
                </form>
                {search && <SearchDoctors /> }
            </div>
        </InputSearchStyle>
    )
}

const InputSearchStyle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 12vh;
margin-bottom: 15px;

h2 {
    margin-bottom: 28px;
}
.input_search {
    position: relative;
    display: flex;
    width: 75%;
}
.form-outline {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95px;

    .form-control:focus {
        color: #ff5000;
        background-color: var(--bs-body-bg);
        border-color: #ff5000;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(255,80,0,.25);
        font-size: 20px;
    }
}
.form-control {
    flex: 1;
    height: 50px;
}
.btn-primary {
    background-color: #ff5000;
    outline: #ff5000;
    border: #ff5000;
    height: 50px;
}
.btn-primary:hover {
    background-color: #f4550d;
}
@media screen and (min-width: 768px) {
    & {
        margin: 25px 0;
    }
}
`;

export default InputSearch