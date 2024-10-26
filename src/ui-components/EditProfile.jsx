import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constants";
import { addUser } from "../utils/slices/userSlice";

const EditProfile = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstname] = useState(user.firstName);
  const [lastName, setLastname] = useState(user.lastName);
  const [age, setAge] = useState(user.age && user.age);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [gender, setGender] = useState(user.gender ? user.gender : "");
  const [about, setAbout] = useState(user.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleEditProfile = async () => {
    try {
      setError("");
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          about,
          age,
          gender,
          photoUrl,
        },
        { withCredentials: true }
      );
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      console.log(res.data.message);
      console.log(res.data.data);
      dispatch(addUser(res.data.data));
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };

  return (
    user && (
      <div>
        <div className="toast toast-top toast-center z-10">
          {showToast && (
            <div className="alert alert-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Profile Updated successfully.</span>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-10">
          <section>
            <div className="my-10">
              <div className="card bg-base-200 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Edit Profile</h2>
                  <label className="input input-bordered flex items-center gap-2 my-1">
                    <input
                      type="text"
                      className="grow"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 my-1">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 my-1">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 my-1">
                    <input
                      type="text"
                      className="grow"
                      placeholder="Photo URL"
                      value={photoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                    />
                  </label>
                  <div className="flex justify-center items-center gap-5">
                    <div className="dropdown dropdown-right">
                      <div tabIndex={0} role="button" className="btn m-1">
                        Gender
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                      >
                        <li>
                          <p onClick={() => setGender("male")}>Male</p>
                        </li>
                        <li>
                          <p onClick={() => setGender("female")}>Female</p>
                        </li>
                        <li>
                          <p onClick={() => setGender("others")}>Others</p>
                        </li>
                      </ul>
                    </div>
                    <textarea
                      className="textarea textarea-bordered"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                      placeholder="About"
                    ></textarea>
                  </div>
                  <div className="card-actions justify-center mb-1 pt-5">
                    {error && <p className="text-red-500 w-full">{error}</p>}
                    <button
                      className="btn btn-primary"
                      onClick={handleEditProfile}
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="card bg-base-300 w-80 h-[25rem] shadow-xl">
              <figure className="h-[60%]">
                <img className="w-full h-full" src={photoUrl} alt={firstName} />
              </figure>
              <div className="px-4 py-2">
                <h2 className="text-bold text-2xl text-zinc-400">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p className="">{age + ", " + gender}</p>}
                <p className="">{about}</p>
                <div className="card-actions pt-8 justify-evenly">
                  <button disabled={true} className="btn btn-primary">
                    Ignore
                  </button>
                  <button disabled={true} className="btn btn-secondary">
                    Interested
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  );
};

export default EditProfile;
