import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDoctors } from "../../Context/DoctorsContext";
import styled from "styled-components";

export default function AddDoctor() {

    const {doctors ,category} = useDoctors();
    console.log(doctors.length);
  const [add,setAdd] = useState({
    id: `${doctors.length}`,
    name: '',
    privateNumber: '',
    clinicNumber: [],
    clinicNumberRegion2: [],
    clinicNumberRegion3: [],
    days: [],
    daysRegion2: [],
    daysRegion3: [],
    appointments: [],
    appointmentsRegion2: [],
    appointmentsRegion3: [],
    region: [],
    address: [],
    category: '',
  })
  let nav = useNavigate()
  console.log(add);

//   var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     fruits.push("Kiwi");    
//     console.log(fruits);

  function handleAdd(e) {
    //   if (!(e.target.value === "")) {


        console.log(e.target.name);
        // if (e.target.name === "clinicNumberRegion2") {
        //     console.log(add.clinicNumberRegion2);
        //     console.log(e.target.name);
        //     console.log({...add, [e.target.name]: [add.clinicNumberRegion2.push(e.target.value)]});
        // }
        if (e.target.name === "clinicNumber" ||
            e.target.name === "clinicNumberRegion2" ||
            e.target.name === "clinicNumberRegion3" ||
            e.target.name === "days" ||
            e.target.name === "daysRegion2" ||
            e.target.name === "daysRegion3" ||
            e.target.name === "appointments" ||
            e.target.name === "appointmentsRegion2" ||
            e.target.name === "appointmentsRegion3" ||
            e.target.name === "region" ||
            e.target.name === "address" ) {
            console.log({...add, [e.target.name]: [add[e.target.name].push(e.target.value)]});
            console.log(add);
        
        } else {
        console.log(add);
        setAdd({...add, [e.target.name]: e.target.value})
        
    }
  }

  function handleForm(e) {
    e.preventDefault()

    axios.post('http://localhost:9000/doctors',add)
    .then(data=>{
        console.log(data)
      nav('/')
    }
    ) 

  }
  return(
    <AddDoctorStyle>
      <h1>Add Doctor</h1>
        <div className="container">
            <form onSubmit={(handleForm)}>
                <div className="dis">
                    <div>
                        <div className="mb-3">
                        <label 
                            htmlFor="exampleFormControlInput1" 
                            className="form-label"
                        >رقم التسلسل</label>
                        <input 
                            type="text" 
                            name="id"
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="Id"
                            // value={doctors.length}
                            onChange={handleAdd} />
                        </div>
                        <div className="mb-3">
                        <label 
                            htmlFor="exampleFormControlInput2" 
                            className="form-label"
                        >إسم الدكتور</label>
                        <input 
                            type="text" 
                            name="name"
                            className="form-control" 
                            id="exampleFormControlInput2" 
                            placeholder="Name"
                            onChange={handleAdd} />
                        </div>
                        <div className="mb-3">
                        <label 
                            htmlFor="exampleFormControlInput3" 
                            className="form-label"
                        >الرقم الخاص بالدكتور</label>
                        <input 
                            type="number" 
                            name="privateNumber"
                            className="form-control" 
                            id="exampleFormControlInput3" 
                            placeholder="Private Number"
                            onChange={handleAdd} />
                        </div>

{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput4" 
                                className="form-label"
                            > إسم رقم المنطقة الاولي</label>
                            <input 
                                type="text" 
                                name="clinicNumber"
                                className="form-control" 
                                id="exampleFormControlInput4" 
                                placeholder="Clinic Number"
                                onChange={handleAdd} />
                                
                            <label 
                                htmlFor="exampleFormControlInput4" 
                                className="form-label"
                            >رقم المنطقة الاولي</label>
                            <input 
                                type="text" 
                                name="clinicNumber"
                                className="form-control" 
                                id="exampleFormControlInput4" 
                                placeholder="Clinic Number"
                                onChange={handleAdd} />
                        </div>
                        {/* --------- */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput4" 
                                className="form-label"
                            > إسم رقم المنطقة الثانية</label>
                            <input 
                                type="text" 
                                name="clinicNumberRegion2"
                                className="form-control" 
                                id="exampleFormControlInput4" 
                                placeholder="Clinic Number"
                                onChange={handleAdd} />
                                
                            <label 
                                htmlFor="exampleFormControlInput4" 
                                className="form-label"
                            >رقم المنطقة الثانية</label>
                            <input 
                                type="text" 
                                name="clinicNumberRegion2"
                                className="form-control" 
                                id="exampleFormControlInput4" 
                                placeholder="Clinic Number"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}

                        {/* <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput5" 
                                className="form-label"
                            >إسم رقم المنطقة الثانية</label>
                            <input 
                                type="text" 
                                name="clinicNumberRegion2"
                                className="form-control" 
                                id="exampleFormControlInput5" 
                                placeholder="Clinic Number Region 2"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput5" 
                                className="form-label"
                            >رقم المنطقة الثانية</label>
                            <input 
                                type="number" 
                                name="clinicNumberRegion2"
                                className="form-control" 
                                id="exampleFormControlInput5" 
                                placeholder="Clinic Number Region 2"
                                onChange={handleAdd} />
                        </div> */}

{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput6" 
                                className="form-label"
                            >إسم رقم المنطقة الثالثه</label>
                            <input 
                                type="text" 
                                name="clinicNumberRegion3"
                                className="form-control" 
                                id="exampleFormControlInput6" 
                                placeholder="Clinic Number Region 3"
                                onChange={handleAdd} />

                            <label 
                                htmlFor="exampleFormControlInput6" 
                                className="form-label"
                            >رقم المنطقة الثالثه</label>
                            <input 
                                type="text" 
                                name="clinicNumberRegion3"
                                className="form-control" 
                                id="exampleFormControlInput6" 
                                placeholder="Clinic Number Region 3"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput7" 
                                className="form-label"
                            > إسم ايام المنطقة الاولي</label>
                            <input 
                                type="text" 
                                name="days"
                                className="form-control" 
                                id="exampleFormControlInput7" 
                                placeholder="Days"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput7" 
                                className="form-label"
                            >ايام المنطقة الاولي</label>
                            <input 
                                type="text" 
                                name="days"
                                className="form-control" 
                                id="exampleFormControlInput7" 
                                placeholder="Days"
                                onChange={handleAdd} />
                        </div>

                    </div>
                    <div>
{/* ============================================================== */}

                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput8" 
                                className="form-label"
                            >إسم ايام المنطقة الثانية</label>
                            <input 
                                type="text" 
                                name="daysRegion2"
                                className="form-control" 
                                id="exampleFormControlInput8" 
                                placeholder="Days Region 2"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput8" 
                                className="form-label"
                            >ايام المنطقة الثانية</label>
                            <input 
                                type="text" 
                                name="daysRegion2"
                                className="form-control" 
                                id="exampleFormControlInput8" 
                                placeholder="Days Region 2"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput9" 
                                className="form-label"
                            >إسم ايام المنطقة الثالثه</label>
                            <input 
                                type="text" 
                                name="daysRegion3"
                                className="form-control" 
                                id="exampleFormControlInput9" 
                                placeholder="Days Region 3"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput9" 
                                className="form-label"
                            >ايام المنطقة الثالثه</label>
                            <input 
                                type="text" 
                                name="daysRegion3"
                                className="form-control" 
                                id="exampleFormControlInput9" 
                                placeholder="Days Region 3"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput10" 
                                className="form-label"
                            >إسم المنطقة الاولي للمواعيد</label>
                            <input 
                                type="text" 
                                name="appointments"
                                className="form-control" 
                                id="exampleFormControlInput10" 
                                placeholder="Days Region 3"
                                onChange={handleAdd} />

                            <label 
                                htmlFor="exampleFormControlInput10" 
                                className="form-label"
                            >المواعيد المنطقة الاولي</label>
                            <input 
                                type="text" 
                                name="appointments"
                                className="form-control" 
                                id="exampleFormControlInput10" 
                                placeholder="Days Region 3"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput11" 
                                className="form-label"
                            >إسم المنطقة الثانية للمواعيد</label>
                            <input 
                                type="text" 
                                name="appointmentsRegion2"
                                className="form-control" 
                                id="exampleFormControlInput11" 
                                placeholder="Appointments Region 2"
                                onChange={handleAdd} />

                            <label 
                                htmlFor="exampleFormControlInput11" 
                                className="form-label"
                            >المواعيد المنطقة الثانية</label>
                            <input 
                                type="text" 
                                name="appointmentsRegion2"
                                className="form-control" 
                                id="exampleFormControlInput11" 
                                placeholder="Appointments Region 2"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput12" 
                                className="form-label"
                            >إسم المنطقة الاولي للمواعيد</label>
                            <input 
                                type="text" 
                                name="appointmentsRegion3"
                                className="form-control" 
                                id="exampleFormControlInput12" 
                                placeholder="Appointments Region 3"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput12" 
                                className="form-label"
                            >المواعيد المنطقة الثالثه</label>
                            <input 
                                type="text" 
                                name="appointmentsRegion3"
                                className="form-control" 
                                id="exampleFormControlInput12" 
                                placeholder="Appointments Region 3"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput13" 
                                className="form-label"
                            >المنطقة الاولي</label>
                            <input 
                                type="text" 
                                name="region"
                                className="form-control" 
                                id="exampleFormControlInput13" 
                                placeholder="Region"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput13" 
                                className="form-label"
                            >المنطقة الثانية </label>
                            <input 
                                type="text" 
                                name="region"
                                className="form-control" 
                                id="exampleFormControlInput13" 
                                placeholder="Region"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput13" 
                                className="form-label"
                            >المنطقة الثالثه</label>
                            <input 
                                type="text" 
                                name="region"
                                className="form-control" 
                                id="exampleFormControlInput13" 
                                placeholder="Region"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput14" 
                                className="form-label"
                            >العنوان المنطقة الاولي</label>
                            <input 
                                type="text" 
                                name="address"
                                className="form-control" 
                                id="exampleFormControlInput14" 
                                placeholder="Address"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput14" 
                                className="form-label"
                            >العنوان المنطقة الثانية</label>
                            <input 
                                type="text" 
                                name="address"
                                className="form-control" 
                                id="exampleFormControlInput14" 
                                placeholder="Address"
                                onChange={handleAdd} />
                            <label 
                                htmlFor="exampleFormControlInput14" 
                                className="form-label"
                            >العنوان المنطقة الثالثه</label>
                            <input 
                                type="text" 
                                name="address"
                                className="form-control" 
                                id="exampleFormControlInput14" 
                                placeholder="Address"
                                onChange={handleAdd} />
                        </div>
{/* ============================================================== */}
                        <div className="mb-3">
                            <label 
                                htmlFor="exampleFormControlInput15" 
                                className="form-label"
                            >التخصصات</label>
                            <select name="category" onChange={handleAdd} id="exampleFormControlInput15">
                                { category.map((ele,i) => {
                                    return <option key={i} value={ele.category}>{ele.category}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>

                <button className="btn btn-info btn-sm">إضافه دكتور</button>
            </form>
        </div>
    </AddDoctorStyle>
  )
}

const AddDoctorStyle =styled.div`
form {
    text-align: center;
}
.dis {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));    
    gap: 45px;
}
`;