import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Produto = {
  sku: number;
  nome: string;
  preco: string;
  categoria: string;
};

type ContextType = {
  produtos: Produto[];
  setProdutos: (Produto) => void;
};

export const ProdutoContext = React.createContext({} as ContextType);

export const ProdutoProvider = (props) => {
  const [produtos, setProdutos] = useState([] as Produto[]);

  useEffect(() => {
    const produtosStorage = JSON.parse(localStorage.getItem("produtos"));
    if (produtosStorage.length > 0) {
      setProdutos(JSON.parse(localStorage.getItem("produtos")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  return (
    <ProdutoContext.Provider value={{ produtos, setProdutos }}>
      {props.children}
    </ProdutoContext.Provider>
  );
};
