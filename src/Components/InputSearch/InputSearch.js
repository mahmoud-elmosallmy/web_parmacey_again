import React from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";


function InputSearch() {
    return (
        <InputSearchStyle>
            <h2>إبحث عن الدكتور</h2>
            <div className="input_search">
                <div className="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" className="form-control" placeholder='إكتب هنا' />
                    {/* <label className="form-label" htmlFor="form1">Search</label> */}
                </div>
                <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                    <FaSearch />
                </button>
            </div>
        </InputSearchStyle>
    )
}

const InputSearchStyle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 25vh;

h2 {
    margin-bottom: 28px;
}
.input_search {
    display: flex;
    width: 75%;
}
.form-outline {
    flex: 1;
}
.form-control {
    flex: 1;
    height: 50px;
}
.btn-primary {
    width: 60px;
    height: 50px;
}
`;

export default InputSearch