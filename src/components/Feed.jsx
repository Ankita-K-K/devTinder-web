import React, { useEffect } from 'react'
import FeedUi from '../ui-components/FeedUi'
import { BASE_URL } from '../constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {addFeed} from '../utils/slices/feedSlice'

const Feed = () => {
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.feed);

  const getUser = async () => {
    try{
      const res = await axios.get(BASE_URL + "/user/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
    }catch(err){
      console.log(err.response.data);
    }
  }

  useEffect(()=>{
    getUser();
  }, []);

if(!user) return;
if(user.length === 0){ return (
  <div>
    <h1 className='text-2xl font-semibold text-center my-5'>No new users found</h1>
  </div>
)}

  return (user && (
    <div className='flex justify-center items-center mt-3 mb-16'>
      <FeedUi userData={user[0]}/>
    </div>
  ))
}

export default Feed
