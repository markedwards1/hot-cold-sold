import React from "react";
import { Link } from "react-router-dom";

const ClientList = ({ clients, title }) => {
  if (!clients.length) {
    return <h3>No Leads</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {clients &&
        clients.map((client) => (
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
              <Link to={`/open-client/${client._id}`}>Open Client</Link>{" "}
            </p>
          </div>
        ))}
    </div>
  );
};

export default ClientList;
