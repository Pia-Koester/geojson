import React from "react";
import { Outlet, Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <h1>Welcome to Amazing Properties</h1>
      <Link to={"/properties"}>See all Properties</Link>
      <Outlet />
    </>
  );
};

export default Landingpage;
