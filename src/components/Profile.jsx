import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "../ui-components/EditProfile";

const Profile = () => {
  return (
    <div className="mb-20">
      <EditProfile />
    </div>
  )
};

export default Profile;
