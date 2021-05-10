import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./404.module.scss";

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h2>
        Ops! Página não encontrada,{" "}
        <Link href="/cadastrar">
          <span>Voltar</span>
        </Link>
      </h2>
    </div>
  );
}
