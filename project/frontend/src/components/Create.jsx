import React, { useState } from 'react';
import http from '../http';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleForm = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values=>({...values,[name]:value}))
  }
  const submitForm = async ()=>{
    await http.post('/users',inputs).then((res)=>{
      navigate('/')
    })
    
  }
  return (
    <div className='container border border-primary p-5 mt-5'>
      <h1>Add User</h1>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="name" className="form-control" name="name" placeholder="Enter name" value={inputs.name || ''} onChange={handleForm}/>
        </div>
        <div className="mb-3">
          <label  className="form-label">Email</label>
          <input type="email" className="form-control" name='email' placeholder="Enter email" value={inputs.email || ''} onChange={handleForm} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password"  placeholder="Enter password" value={inputs.password || ''} onChange={handleForm} />
        </div>
          <button type='submit' onClick={submitForm} className='btn btn-primary w-100 mt-3'>Create</button>
    </div>
  )
}

export default Create