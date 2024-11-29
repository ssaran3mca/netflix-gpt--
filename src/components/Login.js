import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "./Header";
const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(false);

  const handClick = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  return (
    <div className="App position-relative">
      <Header />
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_medium.jpg" />
      <Form className="login-form text-white">
        <h1 className="b  py-3">{isSignInFrom ? "Sign Up" : "Sign In"}</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        {isSignInFrom && (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
        )}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="submit" className="w-100 btn-danger">
          {isSignInFrom ? "Sign Up" : "Sign In"}
        </Button>
        <p className="pt-3">
          <b onClick={handClick}>
            {isSignInFrom ? "Alerady singin " : " New to Netflix? Sign up now"}
          </b>
        </p>
      </Form>
    </div>
  );
};

export default Login;
