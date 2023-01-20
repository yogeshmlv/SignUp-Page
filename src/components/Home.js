import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'
const Home = () => {
   
    const [inpval,setInpval] =useState({
        name:" ",
        email:" ",
        phoneNo :" ",
        password:" ",
        refrenceId:" "
    })

    const [data,setData] =useState([]);
   console.log(inpval);
    const getdata=(e)=>{
  //console.log(e.target.value);
    const {value,name}=e.target
    console.log(value,name);


    setInpval(()=>{
        return{
          ...inpval,
          [name]:value
        }
    })
    }
    const addData=(e)=>{
        e.preventDefault();
       const {name,email,phoneNo,password,refrenceId} =inpval;
       
       if(name===" "){
       alert("Name field is Required");
       }else if (name.length<2){
        alert("Enter Correct Name");
       }
       else if(email ===" "){
        alert("Email field is Required");
       }else if(!email.includes("@")){
          alert(" Enter valid email")
       }else if(phoneNo ===0){
        alert("PhoneNo field is Required");
       }else if(phoneNo.length<10){
        alert("Phone No should be 10 number")
       }else if(password===" "){
        alert("Password field is Required");
       }else if (password.length<5){
        alert("Password Should be greater than five");
       }else if (refrenceId===0){
        alert("Refrence Id Required")
       }
       else {
        console.log("Data Added Successfully");
        localStorage.setItem("useryogesh",JSON.stringify(...data,[inpval]));
       }
    }
  return (
    <>
    <div className="container mt-3" >
        <section className='d-flex justify-content-between'>
            <div className="left-data p-3" style={{width:"100%"}}>
                <h3 className='text-center col-lg-6 mt-3'>Sign Up</h3>
                <Form>
      <Form.Group className="mb-3  col-lg-6" controlId="formBasicEmail">
       
        <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
       
        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" name='phoneNo' onChange={getdata} placeholder="Enter Your Phone No." />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" name='password' onChange={getdata} placeholder="Create Your Password" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" name='password' onChange={getdata} placeholder="Create Your Refrence Id" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept All Term And Condition" />
      </Form.Group>
      <Button variant="primary" type="submit"  className='col-lg-6' onClick={addData}>
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already Have An Account <span><NavLink to="/login">SignIn</NavLink></span></p>
            </div>
           <Sign_img/>
        </section>
    </div>
    </>
  )
}

export default Home