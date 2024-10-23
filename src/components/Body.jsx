import React, { useEffect } from 'react'
import NavBar from '../ui-components/NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../ui-components/Footer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { addUser } from '../utils/slices/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fecthUser = async() =>{
    try{
      const res = await axios.get(BASE_URL + "/profile/view", {withCredentials: true});
      dispatch(addUser(res.data));
    }catch(err){
      if(err.status === 401){
        navigate("/login");
      }
    }
  }

  useEffect(()=>{
    fecthUser();
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body;
