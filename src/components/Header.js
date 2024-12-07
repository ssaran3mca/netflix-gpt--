import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../unitls/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../unitls/userSlice";
import { addGptSearch } from "../unitls/gptSlice";
import { LANG } from "../unitls/constants";
import { chnageLangugae } from "../unitls/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const select = useSelector((state) => state.user);
  const gtpShow = useSelector((store) => store.gpt.shwoGptSearch);
  // console.log(select);
  const dispath = useDispatch();
  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handlegptClick = () => {
    dispath(addGptSearch());
  };
  const handleLangClick = (e) => {
    // console.log(e.target.value);
    dispath(chnageLangugae(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispath(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/brows");
      } else {
        dispath(removeUser());
        navigate("/");
      }
    });
    // unsubscipted when component unmounte
    return () => unsubscribe();
  }, []);
  return (
    <div className={!gtpShow ? "header-gpt header" : "header"}>
      <div className="row ">
        <div className="col">
          <div className="d-flex justify-content-start  p-3">
            <div className="h-logo text-start">
              <img
                alt="bg"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              />
            </div>
          </div>
        </div>
        <div className="col">
          {select && (
            <>
              <div className="d-flex justify-content-end p-3 ">
                {!gtpShow && (
                  <select onChange={handleLangClick} className="me-2">
                    {LANG.map((lange) => (
                      <option key={lange.identifier} value={lange.identifier}>
                        {lange.name}
                      </option>
                    ))}
                  </select>
                )}

                <button
                  type="button"
                  className="btn btn-light me-3"
                  onClick={handlegptClick}
                >
                  Gpt Search
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  LogOut
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
