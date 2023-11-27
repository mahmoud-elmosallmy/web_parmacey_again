import React from 'react'
import styled from 'styled-components'
import TableDoctor from '../../Components/TableDoctors/TableDoctor';

function PageFilterDoctor() {


    return (
        <PageFilterDoctorStyle>
            <div className='parent'>
                <div className='left'>
                    <TableDoctor />
                </div>
                <div className='right'>
                    AA
                </div>
            </div>
        </PageFilterDoctorStyle>
    )
}
const PageFilterDoctorStyle = styled.section`
.parent {
    display: flex;

    .right {
        width: 20%;
    }
    .left {
        width: 80%;

        table {
            font-family: arial, sans-serif;
            width: 100%;
            font-size: 14px;
            border-collapse: collapse;
        }

        table thead th {
            color: #ffffff;
            background: #004976;
            padding: 15px;
            border: 1px solid #ebebec;
            font-weight: 500;
            flex: 1;
            text-align: center;
        }

        table thead th:first-child {
            flex: none;
        }
        table tr {
            background: #ffffff;
            display: flex;
            flex-direction: row-reverse;
        }

        table tr td {
            border: 1px solid #e6edf1;
            padding: 15px;
            flex: 1;
            text-align: center;
        }
        table tr td:first-child {
            flex: none;
            width: 86px;
        }

        @media only screen and (max-width: 640px) {
            table thead {
                display: none;
            }

            table tbody {
                display: block;
            }

            table tbody tr td {
                display: flex;
                align-items: center;
    flex-direction: row-reverse;
                padding: 0;
            }
            table tr td:first-child {
                width: 100%;
            }

            table tbody tr {
                margin-bottom: 20px;
                display: block;
                border: 1px solid #004976;
                background: #f9f9f9;
                overflow: hidden;
            }

            table tbody td::before {
                content: attr(data-label);
                font-weight: bold;
                width: 30%;
                display: flex;
                background: #004976;
                color: #fff;
                padding: 15px;
                margin-inline-start: 10px;
                justify-content: center;
            }
        }
    }
}
`;

export default PageFilterDoctor