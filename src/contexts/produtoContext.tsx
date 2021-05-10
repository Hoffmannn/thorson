import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

type Produto = {
  sku: number;
  nome: string;
  categoria: string;
  setIsLoading: (boolean) => void;
};

type ContextType = {
  produtos: Produto[];
  setProdutos: (Produto) => void;
};

export const ProdutoContext = React.createContext({} as ContextType);

export const ProdutoProvider = (props) => {
  const [produtos, setProdutos] = useState([]);

  return (
    <ProdutoContext.Provider value={{ produtos, setProdutos }}>
      {props.children}
    </ProdutoContext.Provider>
  );
};
