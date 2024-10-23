import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants';
import axios from 'axios';
const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogout = async() => {
    try{
      const res = await axios.post(BASE_URL + "/logout", {withCredentials: true});
      if(res.status === 200){
        navigate("/login");
      }
      console.log(res);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">Dev-Tinder</Link>
        </div>
        {user && <div className="flex-none gap-2">
          <div className="form-control">Welcome, {user.firstName}
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mx-6">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default NavBar

