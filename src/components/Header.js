import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../unitls/firebase";
import { useSelector } from "react-redux";

const Header = (isSignInFrom) => {
  const navigate = useNavigate();
  const select = useSelector((state) => state.user);
  console.log(select);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="header ">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-start  p-3">
            <div className="h-logo text-start">
              <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
            </div>
          </div>
        </div>
        <div className="col">
          {select && (
            <div className="d-flex justify-content-end p-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                LogOut
              </button>
            </div>
          )}
        </div>
      </div>
      {select && (
        <div className="container-fluid p-5 bg-primary text-white text-center">
          <h1>{select.displayName}</h1>
          <img src={select.photoURL} />
          <p>Resize this responsive page to see the effect!</p>
        </div>
      )}
    </div>
  );
};

export default Header;
