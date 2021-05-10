import { CircularProgress } from "@material-ui/core";
import React from "react";
import ProductTable from "../components/ProductTable";
import { AuthContext } from "../contexts/authContext";
import useAuth from "../lib/useAuth";
import styles from "./visualizar.module.scss";

const visualizar = () => {
  useAuth();
  const { isLoading } = React.useContext(AuthContext);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ProductTable />
        </>
      )}
    </div>
  );
};

export default visualizar;
