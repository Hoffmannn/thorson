import { CircularProgress } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

const logout = () => {
  const router = useRouter();
  const { setIsLoading } = React.useContext(AuthContext);
  useEffect(() => {
    localStorage.removeItem("token");
    setIsLoading(true);
    router.push("/login");
  }, []);
  return (
    <div>
      <CircularProgress />
    </div>
  );
};

export default logout;
