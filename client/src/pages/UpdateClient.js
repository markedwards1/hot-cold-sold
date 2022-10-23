import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import ClientList from '../components/ClientList';
// import CommunicationList from "../components/CommunicationList";
// import Addcoms from "../components/AddComs"

import { OPEN_CLIENT } from "../utils/queries";
import { UPDATE_CLIENT } from "../utils/mutations";
import UpdateClientForm from "../components/UpdateClientForm";
import DeleteClientButton from "../components/DeleteClient/DeleteClientButton";
import Header from "../components/Header";

// import MyClientList from "../components/MyClientsList";

const UpdateClient = () => {
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
      <Header />
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
          <DeleteClientButton />
        </div>
      </div>
        <UpdateClientForm />

      
      


    </div>
  );
};

export default UpdateClient;
