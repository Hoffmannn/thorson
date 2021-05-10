import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";
import useAuth from "../lib/useAuth";

function Home() {
  useAuth();
  const { isLoading } = React.useContext(AuthContext);

  return <div>{isLoading ? <CircularProgress /> : <h1>Hello</h1>}</div>;
}

export default Home;
