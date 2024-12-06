import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import { checkValidata } from "../unitls/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../unitls/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../unitls/userSlice";
import { IMGDETAILS, PHOTOURL } from "../unitls/constants";
const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [message, setMessage] = useState("");
  const dispath = useDispatch();
  const email = useRef(null);
  const name = useRef(null);

  const password = useRef(null);
  const navigate = useNavigate();
  const handClick = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  const handleSubimit = () => {
    const message = checkValidata(email.current.value, password.current.value);
    setMessage(message);

    if (message) return;

    if (!isSignInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTOURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispath(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              setMessage(error.message);
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div className="App position-relative">
      <Header loginOut={isSignInFrom} />
      <img className="image-bg" src={IMGDETAILS} alt="bg" />

      <Form
        className="login-form text-white"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="b  py-3">{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
        {!isSignInFrom && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              ref={name}
              type="text"
              placeholder="Name"
              autoComplete="username"
            />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={email}
            type="email"
            placeholder="Enter email"
            autoComplete="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={password}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        {message}
        <Button
          variant="primary"
          type="submit"
          className="w-100 btn-danger"
          onClick={handleSubimit}
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </Button>
        <p className="pt-3">
          <b onClick={handClick}>
            {isSignInFrom ? " New to Netflix? Sign up now" : "Alerady singin "}
          </b>
        </p>
      </Form>
    </div>
  );
};

export default Login;
