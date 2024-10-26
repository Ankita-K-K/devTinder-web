import React from 'react'

const FeedUi = ({userData}) => {
    const {firstName, lastName, age, gender, about, photoUrl} = userData;
  return (
    <div className="card bg-base-300 w-80 h-[25rem] shadow-xl">
    <figure className='h-[60%]'>
      <img className='w-full h-full'
        src={photoUrl}
        alt={firstName} />
    </figure>
    <div className="px-4 py-2">
      <h2 className="text-bold text-2xl text-zinc-400">{firstName + " " + lastName}</h2>
      {age && gender && <p className=''>{age + ", " + gender}</p>}
      <p className=''>{about}</p>
      <div className="card-actions pt-8 justify-evenly">
        <button className="btn btn-primary">Ignore</button>
        <button className="btn btn-secondary">Interested</button>     
      </div>
    </div>
  </div>
  )
}

export default FeedUi
