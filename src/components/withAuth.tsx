import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Router from "next/router";

const withAuth = (Component: React.ComponentClass) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Router.replace("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  return <>{isLoading ? <CircularProgress /> : <Component />}</>;
};

export default withAuth;
