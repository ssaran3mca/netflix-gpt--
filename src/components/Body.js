import React, { useEffect } from "react";
import Header from "./Header";
import Login from "./Login";
import Brows from "./Brows";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../unitls/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../unitls/userSlice";

const Body = () => {
  const dispath = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/brows",
      element: <Brows />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        dispath(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};
export default Body;
