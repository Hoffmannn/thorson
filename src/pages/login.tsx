import Head from "next/head";
import React from "react";
import LoginCard from "../components/Login/LoginCard";
import styles from "./login.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <LoginCard />
    </div>
  );
}
