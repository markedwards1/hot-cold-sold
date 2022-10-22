import React from "react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";



const logout = (event) => {
  event.preventDefault();
  auth.logout();
};





const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">Hot Cold Sold </h1>
        <p className="m-0">Client Management System.</p>
        {/* <Button color="inherit"> */}
        <p>
          <Link to={"/login"}>Login</Link>
        </p>
        <p>
          <Link to={"/"}>Home</Link>
        </p>
        <p>
          <Link to={"/add-client"}>Add Client</Link>
        </p>
        <p>
          <Link to={"/add-user"}>Add User</Link>
        </p>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
         <p>
         <Link to={"/my-clients"}>My Clients</Link>
         </p>

        {/* </Button> */}
      </div>
    </header>
  );
};

export default Header;
