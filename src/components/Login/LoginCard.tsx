import { Card, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import styles from "./LoginCard.module.scss";

function LoginCard() {
  const { register, handleSubmit } = useForm();
  return (
    <Card className={styles.container}>
      <h2>Login</h2>
      <form>
        <TextField label="Usuário" />
      </form>
    </Card>
  );
}

export default LoginCard;
