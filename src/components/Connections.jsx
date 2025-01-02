import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../constants'
import { useDispatch, useSelector } from 'react-redux';
import {addConnections} from '../utils/slices/connectionSlice';

const Connections = () => {
    const dispatch = useDispatch();
    const friends = useSelector((store) => store.connection);
    const getConnections = async () => {
        try{
            const connections = await axios.get(BASE_URL + "/user/connections", {withCredentials:true});
            console.log(connections.data.data);
            if(!connections.data.data || connections.data.data === 0){
                return <div>
                    <h1 className='text-center font-bold text-2xl my-10'>No connections found</h1>
                </div>
            }else{
                dispatch(addConnections(connections.data.data));
            }
        }catch(err){
            console.log(err);
        }

    }

    useEffect(()=>{
        getConnections();
    }, [])

    if(!friends) return;
    if(friends.length === 0) {
        return (
        <div>
            <h1 className='text-xl font-semibold text-center my-5'>You are not friends with anyone yet</h1>
        </div>
    )}
  return friends && (
    <div className='mb-16'>
        <h1 className='flex justify-center items-center text-2xl font-semibold text-left w-3/5 my-5 mx-8'>Friends</h1>
    <div>
      {
        friends.map((friend)=>{
            const {firstName, lastName, _id, photoUrl, about, age, gender} = friend
            return (
            <div className='bg-base-300 flex justify-center items-center w-2/5 mx-auto my-5 py-2 px-3 rounded-lg' key={_id}>
                <div className='w-[20%] pl-1'>
                    <img src={photoUrl} alt='profile' className='rounded-full w-14 h-14'/>
                </div>
                <div className='flex flex-col justify-center items-start w-[70%]'>
                    <p className='font-semibold text-xl'>{firstName + " " + lastName}</p>
                    {age && gender && <p>{age}, {gender}</p>}
                    <p>{about}</p>
                </div>
            </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Connections;
