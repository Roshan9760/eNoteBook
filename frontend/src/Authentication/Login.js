import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import {loginRoute} from "../utils/ApiRoutes"
import axios from "axios"

const Login = () => {

   let navigate = useNavigate();


    const [credentials, setCredentials] = useState({ email: "", password: "" });
    // const [email,setEmail] =useState("")
    // const [password,setPassword] =useState("")



    const handleSubmit =async (e) => {
        e.preventDefault()
        // API Call

        const {email,password} = credentials;
         const { data } = await axios.post(loginRoute, {
           email,
           password,
         });
        //  console.log(data);
         if (data.status === true) {
           localStorage.setItem("token", data.authToken);
           alert(data.message)
           navigate("/");
         } else {
           alert("Invalid credentials");
         }

         // remove the fields after submit 
         setCredentials({ email: "", password: "" });
    }

    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
      // eslint-disable-next-line
      // 
    };
    return (
      <div className="container my-4">
        <h3>Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className=" mb-3 my-5">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="  mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className=" btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
}

export default Login