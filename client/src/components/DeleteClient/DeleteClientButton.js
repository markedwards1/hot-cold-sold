import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {  DELETE_CLIENT } from '../../utils/mutations';
// import { ALL_CLIENT} from '../../utils/queries';
import { useParams } from "react-router-dom";
import Auth from '../../utils/auth';

const DeleteClientButton = () => { 
    
const { clientId } = useParams();
const [deleteClient, {error}] = useMutation(DELETE_CLIENT);

const handleButtonSubmit = async  (event) => {
    event.preventDefault();
    window.location.assign('/my-clients');
    try{
        const { data } = await deleteClient({
            variables: {
                clientId
            }
        })
    } catch (err) {
        console.error(err);
    }
    
}

return (
    <div>
        
        <form
        onSubmit={handleButtonSubmit}>

     <button className="btn btn-primary btn-block py-3" type="submit" >
{/* <Link to={'/my-clients'}></Link> */}
                DeleteClient
                

              </button>
              
        </form>
    </div>

) 






}

export default DeleteClientButton;