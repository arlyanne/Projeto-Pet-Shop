import DataTable from '@/components/DataTable';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const ListaProdutos= () => {
  const router = useRouter();
  const items = [
    { id: 1, nome: 'Item 1', descricao: 'Text....', valor:'Text....', quantidadeEstoque:'9999'},
    { id: 2, nome: 'Item 1', descricao: 'Text....', valor:'Text....', quantidadeEstoque:'9999'},
    { id: 3, nome: 'Item 1', descricao: 'Text....', valor:'Text....', quantidadeEstoque:'9999'},
    { id: 4, nome: 'Item 1', descricao: 'Text....', valor:'Text....', quantidadeEstoque:'9999'},
    { id: 5, nome: 'Item 1', descricao: 'Text....', valor:'Text....', quantidadeEstoque:'9999'},
  ];

    const campos = [
        { name: 'Nome', id: 1 },
        { name: 'Descrição', id: 2 },
        { name: 'Valor', id: 3 },
        { name: 'quantidade Estoque', id: 4 },
        
    ]

  const novoProduto = () => {
    router.push('/cadastros/produto/cadastro-produto');
  };

  return (
    <div>
          <div className='header'>
              <h1>Produtos</h1>
              <Button size='small' className='new' variant='contained' onClick={novoProduto}> Novo Produto </Button>
          </div>
          <DataTable campos={campos} linhas={
              items.map((e) =>
                 <tr key={e.id}>
                    <td>{e.nome}</td>
                    <td>{e.descricao}</td>
                    <td>{e.valor}</td>
                    <td>{e.quantidadeEstoque}</td>
                 </tr>
              )
          }></DataTable>
    </div>
  );
};

export default ListaProdutos;