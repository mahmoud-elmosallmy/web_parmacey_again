import React, { useEffect } from 'react'
import styled from 'styled-components';
// import { useDoctors } from '../../Context/DoctorsContext';

function TableDoctor({doctors}) {

    // const {doctors} = useDoctors();
    // console.log(doctors);
    let num = 0
    const showDoctors = doctors.map((ele) => {
        return(
            <tr key={ele.id}>
                <td>{++num}</td>
                <td>{ele.category}</td>
                <td>{ele.name}</td>
                <td>{ele.privateNumber}</td>
                <td>{ele.clinicNumber}</td>
                <td>{ele.days}</td>
                <td>{ele.appointments}</td>
                <td>{ele.region}</td>
                <td>{ele.address}</td>
            </tr>
        )
        
    })
    useEffect(() => {
            const tables = document.querySelectorAll("table");
            console.log(tables);
            if (tables) {
                tables.forEach((table) => {
                    const headerRow = table.querySelector("thead tr");
                    const thElements = headerRow.querySelectorAll("th");
                    const tdElements = table.querySelectorAll("tbody tr td");
                    // const tr = table.querySelectorAll("tbody tr");

                    let mainIndex = 0;
                    tdElements.forEach((td) => {
                    // let index = mainIndex / tdElements.length;
                    td.setAttribute("data-label", thElements[mainIndex].innerHTML);

                    if (mainIndex === thElements.length - 1) {
                        mainIndex = 0;
                    } else {
                        mainIndex += 1;
                    }
                    });
                });
            }
    },[doctors])

    return (
        <TableDoctorStyle>
            <table width="100%">
                    <thead>
                        <tr>
                            <th> رقم التسلسل</th>
                            <th>التخصص</th>
                            <th> إسم الدكتور</th>
                            <th> رقم الخاص</th>
                            <th> رقم العيادة</th>
                            <th> الأيام </th>
                            <th>المواعيد</th>
                            <th>المنطقه</th>
                            <th>العنوان</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showDoctors}
                    </tbody>
                </table>
        </TableDoctorStyle>
    )
}
const TableDoctorStyle = styled.div`
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
`;

export default TableDoctor