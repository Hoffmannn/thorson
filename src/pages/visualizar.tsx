import { CircularProgress } from "@material-ui/core";
import React from "react";
import { AuthContext } from "../contexts/authContext";
import useAuth from "../lib/useAuth";

const visualizar = () => {
  useAuth();
  const { isLoading } = React.useContext(AuthContext);

  return <div>{isLoading ? <CircularProgress /> : <h2>Visuailizar</h2>}</div>;
};

export default visualizar;
