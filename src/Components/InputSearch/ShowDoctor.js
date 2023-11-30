import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components'
import { useFilterDoctors } from '../../Context/DoctorsFilterContext';

function ShowDoctor() {

  const { id } = useParams()
  console.log(id);

  const { all_doctors } = useFilterDoctors()

  const showDoctor = all_doctors.filter((ele) => {
    return ele.id === id
  }).map((ele) => {
    return (
      <tr key={ele.id}>
                <td>{ele.id}</td>
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
  console.log(showDoctor);

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
},[all_doctors])

  return (
    <ShowDoctorStyle>
        <div className='container'>
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
                  {showDoctor}
              </tbody>
            </table>
        </div>
    </ShowDoctorStyle>
  )
}

const ShowDoctorStyle = styled.div`
min-height: 71.6vh;

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

export default ShowDoctor