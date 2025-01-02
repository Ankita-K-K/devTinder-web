import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/slices/requestsSlice'
const Requests = () => {
  const dispatch = useDispatch();
  const requestData = useSelector((store)=> store.requests);
  console.log(requestData);
  const getRequests = async() => {
    try{
      const requests = await axios.get(BASE_URL + "/user/requests/recieved", {withCredentials: true});
      console.log(requests.data.data);
      dispatch(addRequests(requests.data.data));
    }catch(err){
      console.log(err);
    }
  } 

  const handleRequests = async(status, id) => {
    try{
      const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + id, {}, {withCredentials: true});
      console.log(res);
      dispatch(removeRequest(id));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getRequests();
  }, []);

  if(!requestData) return;
  if(requestData.length === 0){
    return (
      <div>
          <h1 className='text-2xl font-semibold text-center my-10 text-white'>No connection requests found</h1>
      </div>
    )
  }
  return requestData && (
    <div  className='mb-16'>
      <h1 className='text-xl font-semibold text-center my-5'>Connection Requests</h1>
    <div>
      {
        requestData.map((requests) => {
          const {firstName, lastName, about, photoUrl, _id, age, gender} = requests.fromUserId;
          console.log(requests.fromUserId);
          return (
            <div className='bg-base-300 flex justify-center items-center gap-10 w-3/5 mx-auto my-5 py-2 px-5 rounded-lg' key={_id}>
            <div className='w-[10%]'>
                <img src={photoUrl} alt='profile' className='rounded-full w-14 h-14'/>
            </div>
            <div className='flex flex-col justify-center items-start w-[60%]'>
                <p className='font-semibold text-xl'>{firstName + " " + lastName}</p>
                {age && gender && <p>{age}, {gender}</p>}
                <p>{about}</p>
            </div>
            <div className='flex justify-center items-center gap-4 w-[30%]'>
              <button className='btn btn-secondary' onClick={()=>handleRequests("accepted" ,requests._id)}>Accepted</button>
              <button className='btn btn-primary' onClick={()=>handleRequests("rejected" ,requests._id)}>Rejected</button>
            </div>
        </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Requests
