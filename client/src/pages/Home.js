import React from "react";
import { useQuery } from "@apollo/client";

import { ALL_CLIENT } from "../utils/queries";

import ClientList from "../components/ClientList";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import Login from "./Login";

const Home = () => {
  const { loading, data } = useQuery(ALL_CLIENT);
  const clients = data?.clients || [];

  return (
    <main>
      <div>
        {auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-info m-2" to="my-clients">
              {auth.getProfile().data.username}'s Clients
            </Link>
            {/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button> */}
          </>
        ) : (
          <>
            {/* <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link> */}
            {/* <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link> */}
          </>
        )}
         
      </div>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
            ) : (
              <Login/>
            // <ClientList clients={clients} title="All Clients" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
