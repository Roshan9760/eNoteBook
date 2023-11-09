import React ,{} from "react";
import { NavLink ,useNavigate} from "react-router-dom";

const Navbar = () => {
  
  // useLocation hook ---> it gives the current location or path
  // let location = useLocation();
  // useEffect hook ---> whenever tab will be reloaded, current path will be printed on the console
  // useEffect(()=>{
  //   console.log(location.pathname);
  // }, [location]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">eNotebook</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link  `} aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link`} to="/about">About</NavLink>
            </li>
          </ul>

          {(!localStorage.getItem('token'))?
          <form className="d-flex">
            <NavLink className="btn btn-primary mx-1" to="/login" role="button">Login</NavLink>
            <NavLink className="btn btn-primary mx-1" to="/signup" role="button">Signup</NavLink>
          </form>
          :
          <button className='btn btn-primary' onClick={logout}>Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
