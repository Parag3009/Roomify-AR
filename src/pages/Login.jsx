// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// function Login() {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:4000/api/loginuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password
//       })
//     });

//     const json = await response.json();
//     console.log(json);

//     if (!json.success) {
//       alert("Enter Valid Credentials");
//     }

//     if (json.success) {
//       localStorage.setItem("authToken", json.authToken);
//       history.push("/");
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <div>
//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <br/><label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" style={{ marginLeft: '13px' }} name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            
//           </div>

//           <br/><div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" style={{ marginLeft: '29px' }} name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
//           </div>

//           <button type="submit" className="m-3 btn btn-success" style={{ backgroundColor: 'yellowgreen', color: 'white',padding:'5px' }}>Submit</button>
//           <br/><br/><Link to="/signupuser" className="m-3 btn danger" style={{ backgroundColor: 'cyan', color: 'white',padding:'5px' }}>Sign Up For new User</Link>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login;



import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      history.push("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div style={{ 
      backgroundImage: `url('http://www.exceptnothing.com/wp-content/uploads/2011/12/colorPulse_V4.jpg')`, 
      backgroundSize: 'cover',
      height: '100vh',  // Adjust the height based on your needs
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className='container'>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control"  style={{ marginLeft: '10px' }} name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <br/><label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control"  style={{ marginLeft: '24px' }} name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>

          <br/><button type="submit" className="m-3 btn btn-success" style={{ backgroundColor: 'yellowgreen', color: 'white', padding: '5px' }}>Submit</button>
          <br/><br></br><Link to="/signupuser" className="m-3 btn danger" style={{ backgroundColor: 'cyan', color: 'white', padding: '5px' }}>Sign Up For new User</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
