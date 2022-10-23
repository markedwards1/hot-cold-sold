import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';



import { USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import ClientList from '../components/ClientList';
import AddClient from './Addclient';
import Header from '../components/Header';

const MyClients = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <Header/>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <ClientList
            clients={user.clients}
            title={`${user.username}'s clients...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <AddClient />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyClients;















// import React from "react";

// // Import the `useParams()` hook
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// // import ClientList from '../components/ClientList';
// import CommunicationList from "../components/CommunicationList";
// import Addcoms from "../components/AddComs"

// import { USER } from "../utils/queries";

// const MyClients = () => {

//   const { username } = useParams();
// console.log(username)
//   const { loading, data } = useQuery(USER, {
//     variables: { findUser: username },
//   });

//   //this will give you the details you want
//   console.log(data?.username);

//   // const client = data.findClient;
//   const client = data?.username || {};

//   console.log(client);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="my-3">
//       <h3 className="card-header bg-dark text-light p-2 m-0">
//         {client.name} <br />
//       </h3>
//       <div className="bg-light py-4">
//         <blockquote
//           className="p-4"
//           style={{
//             fontSize: "1.5rem",
//             fontStyle: "italic",
//             border: "2px dotted #1a1a1a",
//             lineHeight: "1.5",
//           }}
//         >
//           <p>Phone: {client.phone}</p>
//           <p>Email: {client.email}</p>
//           <p>Status: {client.status}</p>
//           <p>Note: {client.note}</p>
//           <p>Product: {client.product}</p>
         
//         </blockquote>
//       </div>

//       <div className="my-5">
//         <CommunicationList communication={client.communication} />
//       </div>
//       <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
      
//         Add Communication
//           <Addcoms />
//       </div>
//     </div>
//   );
// };

// export default MyClients;
