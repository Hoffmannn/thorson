import Head from "next/head";
import React, { useEffect } from "react";
import LoginCard from "../components/Login/LoginCard";
import { AuthContext } from "../contexts/authContext";
import styles from "./login.module.scss";

export default function Login() {
  const { setIsLoading } = React.useContext(AuthContext);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <LoginCard />
    </div>
  );
}
