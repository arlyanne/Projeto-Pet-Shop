import DataTable from '@/components/DataTable';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const ListaServicos= () => {
  const router = useRouter();
  const items = [
    { id: 1, nomeServico: 'Item 1', descricao: 'Text....', valor:'Text....'},
    { id: 2, nomeServico: 'Item 1', descricao: 'Text....', valor:'Text....'},
    { id: 3, nomeServico: 'Item 1', descricao: 'Text....', valor:'Text....'},
    { id: 4, nomeServico: 'Item 1', descricao: 'Text....', valor:'Text....'},
    { id: 5, nomeServico: 'Item 1', descricao: 'Text....', valor:'Text....'},
  ];

    const campos = [
        { name: 'Nome', id: 1 },
        { name: 'Descrição', id: 2 },
        { name: 'Valor', id: 3 },
        
    ]

  const novoServico = () => {
    router.push('/cadastros/servico/cadastro-servico');
  };

  return (
    <div>
          <div className='header'>
              <h1>Serviço</h1>
              <Button size='small' className='new' variant='contained' onClick={novoServico}> Novo Serviço</Button>
          </div>
          <DataTable campos={campos} linhas={
              items.map((e) =>
                 <tr key={e.id}>
                    <td>{e.nomeServico}</td>
                    <td>{e.descricao}</td>
                    <td>{e.valor}</td>
                 </tr>
              )
          }></DataTable>
    </div>
  );
};

export default ListaServicos;