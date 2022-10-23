import React from "react";

// Import the `useParams()` hook
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import ClientList from '../components/ClientList';
import CommunicationList from "../components/CommunicationList";
import Addcoms from "../components/AddComs"



import { OPEN_CLIENT } from "../utils/queries";

import Header from "../components/Header";

const OpenClient = () => {
 
  const { clientId } = useParams();

  const { loading, data } = useQuery(OPEN_CLIENT, {
    variables: { findClientId: clientId },
  });

  //this will give you the details you want
  console.log(data?.findClient.name);

  // const client = data.findClient;
  const client = data?.findClient || {};

  console.log(client);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <Header/>
       <div key={client._id} className="card mb-3">
            <h4 class="card-heading">{client.name}</h4>

            <div class="row">
              <div class="col">
                <p>Phone: {client.phone}</p>
                <p>Email: {client.email}</p>
                <p>Status: {client.status}</p>
              </div>
              <div class="col">
                <p>Product: {client.product}</p>
                <p>Note: {client.note}</p>
                {/* <p>Client since: {client.createdAt}</p> */}
              </div>
            </div>
            <p>
            <Link to={`/update-client/${client._id}`} >UPDATE</Link>
          </p>
      <div className="my-5">
          <Addcoms />
        <CommunicationList communication={client.communication} />
      </div>
          </div>
          <div className="bg-light py-4">

      </div>

      <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
      
       
      </div>
    </div>
  );
};

export default OpenClient;
