import {
  Button,
  Card,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/authContext";
import { ProdutoContext } from "../contexts/produtoContext";
import useAuth from "../lib/useAuth";
import styles from "./cadastrar.module.scss";

interface FormData {
  sku: number;
  nome: string;
  preco: string;
  categoria: string;
}

const cadastrar = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [categoria, setCategoria] = useState();
  const { produtos, setProdutos } = React.useContext(ProdutoContext);

  useAuth();
  const { isLoading } = React.useContext(AuthContext);

  const onSubmit = (formData, e) => {
    const produtoExists = produtos.find((p) => p.sku == formData.sku);

    console.log(formData);
    if (produtoExists) {
      toast.error("Produto já cadastrado!");
    } else {
      setProdutos([...produtos, formData]);
      toast.success("Produto cadastrado com sucesso!");
      e.target.reset();
    }
  };

  function handleCategoriaChange(e) {
    setCategoria(e.target.value);
  }
  return (
    <div className={styles.container}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card className={styles.card}>
          <h2>Cadastrar Produto</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <TextField
              required
              label="SKU"
              type="number"
              {...register("sku")}
              className={styles.formInput}
            />
            <TextField
              required
              label="Nome"
              {...register("nome")}
              className={styles.formInput}
            />
            <TextField
              required
              label="Preco"
              {...register("preco")}
              className={styles.formInput}
            />

            <InputLabel id="categoria">Categorias</InputLabel>
            <Select
              required
              labelId="categorias"
              label="Categoria"
              id="categoria"
              value={categoria}
              onChange={handleCategoriaChange}
              className={styles.formInput}
              {...register("categoria")}
            >
              <MenuItem value={"Leite"}>Leite</MenuItem>
              <MenuItem value={"Doce"}>Doce</MenuItem>
              <MenuItem value={"Iogurte"}>Iogurte</MenuItem>
            </Select>

            <Button variant="contained" color="primary" type="submit">
              Cadastrar
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default cadastrar;
