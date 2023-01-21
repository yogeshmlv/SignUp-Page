import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [items, setitems] = useState([]);
  const [value, setValue] = useState("");
  const [inpval, setInpval] = useState({
    name: " ",
    email: " ",
    phoneNo: " ",
    password: " ",
    refrenceId: " ",
  });
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("useryogesh"));
    console.log(items);
    setitems(items);
    if (items) {
      setValue(items[0].refrenceId);
      setInpval({
        refrenceId: items[0].refrenceId,
      });
    }
  }, []);
  console.log(inpval);
  const getdata = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const getdata1 = (e) => {
    setValue(e.target.value);
    inpval.refrenceId = e.target.value;
    setInpval(inpval);
  };
  const addData = (e) => {
    e.preventDefault();
    const { name, email, phoneNo, password, refrenceId } = inpval;
    console.log(inpval);
    if (name === " ") {
      alert("Name field is Required");
    } else if (name.length < 2) {
      alert("Enter Correct Name");
    } else if (email === " ") {
      alert("Email field is Required");
    } else if (!email.includes("@")) {
      alert(" Enter valid email");
    } else if (phoneNo === 0) {
      alert("PhoneNo field is Required");
    } else if (phoneNo.length < 10) {
      alert("Phone No should be 10 number");
    } else if (password === " ") {
      alert("Password field is Required");
    } else if (password.length < 5) {
      alert("Password Should be greater than five");
    } else if (value === " ") {
      alert("Refrence Id Required");
    } else {
      if (items) {
        localStorage.setItem("useryogesh", JSON.stringify([...items, inpval]));
      } else {
        localStorage.setItem("useryogesh", JSON.stringify([inpval]));
      }
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left-data p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 mt-3">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3  col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Your Email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="phoneNo"
                  onChange={getdata}
                  placeholder="Enter Your Phone No."
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Create Your Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="text"
                  value={value}
                  onChange={(e) => {
                    getdata1(e);
                  }}
                  placeholder="Create Your Refrence Id"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Accept All Term And Condition"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="col-lg-6"
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have An Account{" "}
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
