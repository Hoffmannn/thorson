import Router from "next/router";
import React, { useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

const useAuth = () => {
  const { setIsLoading } = React.useContext(AuthContext);
  useEffect(() => {
    setIsLoading(true);

    if (!localStorage.getItem("token")) {
      Router.replace("/login");
    } else {
      setIsLoading(false);
    }
  }, []);
};

export default useAuth;
