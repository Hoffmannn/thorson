import { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { ProdutoContext } from "../contexts/produtoContext";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function ProductTable() {
  const { produtos, setProdutos } = useContext(ProdutoContext);
  const columns = [
    { name: "SKU", selector: "sku", minWidth: "2px" },
    { name: "Nome", selector: "nome", minWidth: "sm" },
    { name: "Preço", selector: "preco", minWidth: "sm" },
    { name: "Categoria", selector: "categoria", minWidth: "sm" },
    {
      name: "Ações",
      cell: (row) => (
        <IconButton
          aria-label="Ações"
          onClick={() => {
            setProdutos(produtos.filter((produto) => produto.sku != row.sku));
          }}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <DataTable
      title="Visualizar Produtos"
      columns={columns}
      data={produtos}
      pagination={true}
      highlightOnHover={true}
      dense={true}
    />
  );
}
