import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Header from '../components/Header';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
       <Header/>
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Add User</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;









// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';


// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

// const addUserForm = () => {
// //   const [formState, setFormState] = useState({
// //     username: '',
// //     email: '',
// //     password: '',
// //   });

// const[username, setUsername] = useState('');
// const[email, setEmail] = useState('');

// const[password, setPassword] = useState('');

//   const [addUser] = useMutation(ADD_USER);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
   
  
//     try {
//       const { data } = await addUser({
//         variables: { 
//             username,
//             email,
//             password,
//          },
//       });
  
//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//   const handleChange = (event) => {
//     const { name, value } = event.target;
// if(name === 'username'){
//     setUsername(value);
// } else if (name === 'email'){
//     setEmail(value)
// } else if (name === 'password'){
//     setPassword(value);
// }
//   };


//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your username"
//                   name="username"
//                   type="text"
//                   value={username}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-primary"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default addUserForm;