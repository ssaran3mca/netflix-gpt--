import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
import { checkValidata } from "../unitls/validate";
const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [message, setMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handClick = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  const handleSubimit = () => {
    const message = checkValidata(email.current.value, password.current.value);
    setMessage(message);
    console.log(message);
  };
  return (
    <div className="App position-relative">
      <Header />
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg" />

      <Form
        className="login-form text-white"
        onClick={(e) => e.preventDefault()}
      >
        <h1 className="b  py-3">{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
        {!isSignInFrom && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={email} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={password} type="password" placeholder="Password" />
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
