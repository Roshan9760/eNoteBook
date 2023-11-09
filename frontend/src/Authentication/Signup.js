import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { registerRoute } from '../utils/ApiRoutes';
import axios from 'axios';

const Signup = () => {

      let navigate = useNavigate();

      const [credentials, setCredentials] = useState({
        username:"",
        email: "",
        password: "",
        cpassword:""
      });
      // const [email,setEmail] =useState("")
      // const [password,setPassword] =useState("")

      const handleSubmit = async (e) => {
          
        e.preventDefault();
          // API Call
          const { email, username, password } = credentials;
          const { data } = await axios.post(registerRoute, {
            username,
            email,
            password,
          });
          // console.log(data);
          alert(data.message)
          if (data.status === true) {
            navigate("/");
          }
      }

      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        // eslint-disable-next-line
      };
  return (
    <div className="container my-3">
      <h3>Create a new account</h3>
      <form onSubmit={handleSubmit} className="my-4">
        <div className=" mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="username"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confrim Password
          </label>
          <input
            type="cpassword"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup