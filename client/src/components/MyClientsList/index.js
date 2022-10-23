import React from 'react';
import { Link } from 'react-router-dom';

// const handleClick = async () => {
//   const response = await fetch('hot-cold-sold/clients/' + client.id, {
//     method: 'DELETE'
//   })
// }








const MyClientList = ({ clients, title }) => {
  if (!clients.length) {
    return <h3>No Leads</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {clients &&
        clients.map((client) => (
          <div key={client._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              Client: {client.name} <br />
              
              <span style={{ fontSize: '1rem' }}>
             
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>email: {client.email}</p>
              <p>product: {client.product}</p>
              <p>note: {client.note}</p>
              <p>Client since: {client.createdAt}</p>
              <p>Status: {client.status}</p>
              <p>Phone: {client.phone}</p>
              {/* <p>communication: {client.communication.text}</p> */}
              {/* <span onClick={handleClick}>Delete</span> */}
              {/* <p>
          <Link to={`/open-client/${client._id}`}>Open Client</Link>
        </p> */}


            </div>
          </div>
        ))}
    </div>
  );
};

export default MyClientList;