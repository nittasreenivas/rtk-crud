import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/User/userSlice";
function Navbar() {
  const { userDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav ">
            {userDetails === null && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
               
                <li className="nav-item ">
                  <Link className="nav-link active" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              
              </>
            )}
            {userDetails !== null && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/addLeads">
                    AddLeads
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/showLeads">
                    ShowLeads
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/editLeads">
                    EditLeads
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link active">
                    {" "}
                    {userDetails.username}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primary" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
