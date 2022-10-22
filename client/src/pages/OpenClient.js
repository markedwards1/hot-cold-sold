import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import ClientList from '../components/ClientList';
import CommunicationList from "../components/CommunicationList";
import Addcoms from "../components/AddComs"

import { OPEN_CLIENT } from "../utils/queries";

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
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {client.name} <br />
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          <p>Phone: {client.phone}</p>
          <p>Email: {client.email}</p>
          <p>Status: {client.status}</p>
          <p>Note: {client.note}</p>
          <p>Product: {client.product}</p>
         
        </blockquote>
      </div>

      <div className="my-5">
        <CommunicationList communication={client.communication} />
      </div>
      <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
      
        Add Communication
          <Addcoms />
      </div>
    </div>
  );
};

export default OpenClient;
