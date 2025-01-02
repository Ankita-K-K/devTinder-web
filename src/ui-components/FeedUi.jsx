import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../constants';
import { removeFeed } from '../utils/slices/feedSlice';

const FeedUi = ({userData}) => {
    const dispatch = useDispatch();
    const {firstName, lastName, age, gender, about, photoUrl, _id} = userData;
    console.log(userData)
    const handleSendRequest = async (status, id) => {
      try{
        const res = await axios.post(BASE_URL + "/request/connectionRequest/" + status + "/" + id, {}, {withCredentials: true});
        console.log(res);
        dispatch(removeFeed(_id));
      }catch(err){
        console.log(err);
      }
    }
  return (
    <div className="card bg-base-300 w-80 h-[26rem] shadow-xl">
    <figure className=''>
      <img className='w-full h-full hover:scale-125 transition-transform duration-1000'
        src={photoUrl}
        alt={firstName} />
    </figure>
    <div className="px-4 py-2">
      <h2 className="text-bold text-2xl text-zinc-400 py-4">{firstName + " " + lastName}</h2>
      {age && gender && <p className='py-1'>{age + ", " + gender}</p>}
      <p className=''>{about}</p>
      <div className="card-actions pt-8 justify-evenly">
        <button className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
        <button className="btn btn-secondary" onClick={()=> handleSendRequest("interested", _id)}>Interested</button>     
      </div>
    </div>
  </div>
  )
}

export default FeedUi
