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
      if(user) return;
      const res = await axios.get(BASE_URL + "/user/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
    }catch(err){
      console.log(err.response.data);
    }
  }

  useEffect(()=>{
    getUser();
  }, []);

  return (user && (
    <div className='flex flex-col justify-center items-center mt-5 mb-10'>
      {
        user.map((user) => <FeedUi userData={user} />)
      }
    </div>
  ))
}

export default Feed
