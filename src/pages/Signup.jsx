import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [credentials, setcredentials] = useState({ name: '', email: '', password: '', geolocation: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation
      })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  }

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <div style={{
      backgroundImage: `url('https://wallpapercave.com/wp/wp9764014.jpg')`,
      backgroundSize: 'cover',
      height: '100vh',  // Adjust the height based on your needs
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      
    }}>
      <div className='container'>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ fontSize: '20px' }}>UserName</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} style={{ marginLeft: '10px',width:'250px' }} />
          </div>

          <br/><div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" style={{ fontSize: '20px' }}>Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} style={{ marginLeft: '10px',width:'250px'}} />
          </div>

         <br/> <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontSize: '20px' }}>Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} style={{ marginLeft: '10px',width:'250px'}} />
          </div>

          <br/><div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ fontSize: '20px' }}>Address</label>
            <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} style={{ marginLeft: '10px',width:'250px' }} />
          </div>

          <br/><button type="submit" className="m-3 btn btn-success" style={{ backgroundColor: 'yellowgreen', color: 'white', padding: '6px' }}>
            Submit
          </button>

          <br/><br/><Link to="/loginuser" className="m-3 btn danger" style={{ backgroundColor: 'cyan', color: 'white', padding: '6px' }}>Already a User</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
