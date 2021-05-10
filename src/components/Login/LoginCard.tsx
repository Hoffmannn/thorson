import { Button, Card, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "./LoginCard.module.scss";
import { toast } from "react-toastify";

interface FormData {
  username: string;
  password: string;
}

function LoginCard() {
  const { register, handleSubmit } = useForm<FormData>();
  const router = useRouter();
  const onSubmit = (formData) => {
    if (formData.username == "user" && formData.password == "123456") {
      localStorage.setItem("token", "abc");
      router.push("/cadastrar");
    } else {
      toast.error("Usuário ou senha inválido");
    }
  };
  return (
    <Card className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Usuário"
          {...register("username")}
          className={styles.formInput}
        />
        <TextField
          label="Senha"
          type="password"
          {...register("password")}
          className={styles.formInput}
        />
        <Button variant="contained" color="primary" type="submit">
          Logar
        </Button>
      </form>
    </Card>
  );
}

export default LoginCard;
