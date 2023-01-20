import React, { useState }  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Login = () => {

     const history =useNavigate();

    const [inpval,setInpval] =useState({
        email:" ",
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

const getuserArr =localStorage.getItem("useryogesh");
console.log(getuserArr);


       const {email,password} =inpval;
       
    if(email ===""){
        alert("Email field is Required");
       }else if(!email.includes("@")){
          alert(" Enter valid email")
       }
       else if(password===""){
        alert("Password field is Required");
       }else {
        if(getuserArr && getuserArr.length){
            const userdata =JSON.parse(getuserArr);
            const userlogin =userdata.filter((el,k)=>{
                return el.email===email && el.password===password
            });
            //console.log(userlogin);
            if(userlogin.length===0){
              alert("Invalid User Details");
            }else{
                console.log("User Login Successful");
                history("/Products");
            }
        }
        //console.log("Data Added Successfully");
       // localStorage.setItem("useryogesh",JSON.stringify(...data,[inpval]));
       }
    }
  return (
    <>
    <div className="container mt-3" >
        <section className='d-flex justify-content-between'>
            <div className="left-data p-3" style={{width:"100%"}}>
                <h3 className='text-center col-lg-6 mt-3'>Sign In</h3>
                <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
       
        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password" name='password' onChange={getdata} placeholder="Enter Your Password" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept All Term And Condition" />
      </Form.Group>
      <Button variant="primary" type="submit"  className='col-lg-6' onClick={addData}>
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Need an Account ? <span><NavLink to="/">Sign Up</NavLink></span></p>
            </div>
           <Sign_img/>
        </section>
    </div>
    </>
  )
}

export default Login