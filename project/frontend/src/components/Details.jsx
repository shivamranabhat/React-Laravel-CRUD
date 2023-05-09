import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import http from '../http';

const Details = (props) => {
  const [users, setUsers] = useState({});
  const {id} = useParams();

  useEffect(()=>{
    fetchUser();
  },[]);

  const fetchUser = async () =>{
    await http.get('/users/'+id+'/edit').then((res)=>{
      setUsers({
        name: res.data.name,
        email: res.data.email,
      })
    });
  }
  return (
    <div className='container mt-5'>
        <h3>Name : {users.name}</h3>
        <h3>Email : {users.email}</h3>
    </div>
  )
}

export default Details