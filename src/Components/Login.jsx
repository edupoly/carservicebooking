import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login =()=>{
    const teleport = useNavigate();
    const [newUser, setNewUser] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:4000/signup").then((res) =>{
           console.log([...res.data])
        })
       },[])
    return(
    <div class="bg-text">
    <div className="w-25 mx-auto">
        <form className="form-control">
            <h3 className="text-primary">Login</h3>
            <label htmlFor="" className="form-lable mt-2 text-success">Username</label>
            <input type="text" required placeholder="Enter username" className="form-control" />
            <label htmlFor="" className="form-lable mt-2 text-danger">Password</label>
            <input type="password" required placeholder="Enter password" className="form-control"/>
            <div className="mt-2">
            <Link to="/mail" className="text-warning"><p>Forgot Password?</p></Link>
            </div>
            <div className="d-flex justify-content-center ">
            <button className="btn btn-outline-dark border border-3 border-danger mt-2" onClick={()=>{teleport('/booking')}} style={{onhover:'backgroundColor:blue'}}>Submit</button>
            </div>
        </form>
        <Link to="/signup" className="text-light">Don't have an account yet?(SignUp)</Link>
    </div>
    </div>
    )
};

export default Login;