import React from 'react';
import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/AddClient';



import { ALL_CLIENT } from '../utils/queries';
import AddClientForm from '../components/AddClient';
import ClientList from '../components/ClientList';


const Home = () => {
  const { loading, data } = useQuery(ALL_CLIENT);
  const clients = data?.clients || [];

  return (
    <main>
      <div className="flex-row justify-center">
 
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ClientList
              clients={clients}
              title="Your Clients"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
