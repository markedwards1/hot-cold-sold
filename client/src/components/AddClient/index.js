import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CLIENT } from '../../utils/mutations';
// import { ALL_CLIENT} from '../../utils/queries';

import Auth from '../../utils/auth';

const AddClientForm = () => {
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');
    const[product, setProduct] = useState('');
    const[note, setNote] = useState('');
    const[status, setStatus] = useState('');



  const [addClient, { error }] = useMutation(ADD_CLIENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addClient({
        variables: {
          
          email,
          name,
          note,
          phone,
          product,
          status,
         
        },
      });

      setName('');
      setEmail(''); 
      setNote('');
      setPhone('');
      setProduct('');
      setStatus('');
      
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
      } else if (name === 'email') {
        setEmail(value);
        }  if (name === 'note') {
          setNote(value);
          }  if (name === 'phone') {
            setPhone(value);
            }  if (name === 'product') {
              setProduct(value);
              }  if (name === 'status') {
                setStatus(value);
                } 
  };

  return (
    <div>
      <h3>Add New Client</h3>

      {Auth.loggedIn() ? (
        <>
 
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="name"
                placeholder="Add name"
                value={name}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="email"
                placeholder="Add email"
                value={email}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="note"
                placeholder="Add note"
                value={note}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="phone"
                placeholder="Add phone"
                value={phone}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="product"
                placeholder="Add product"
                value={product}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="status"
                placeholder="Add status"
                value={status}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Client
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default AddClientForm;












