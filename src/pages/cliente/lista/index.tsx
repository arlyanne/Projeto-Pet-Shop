import DataTable from '@/components/DataTable';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const ListaCliente = () => {
  const router = useRouter();
  const items = [
    { id: 1, nome: 'Item 1', cpf: '99999999', telefone:'99999999', email:'teste@gmail.com' },
    { id: 2, nome: 'Item 1', cpf: '99999999', telefone:'99999999', email:'teste@gmail.com'},
    { id: 3, nome: 'Item 1', cpf: '99999999', telefone:'99999999', email:'teste@gmail.com' },
    { id: 4, nome: 'Item 1', cpf: '99999999', telefone:'99999999', email:'teste@gmail.com'},
    { id: 5, nome: 'Item 1', cpf: '99999999', telefone:'99999999', email:'teste@gmail.com'},
  ];

    const campos = [
        { name: 'Nome', id: 1 },
        { name: 'CPF', id: 2 },
        { name: 'Telefone', id: 3 },
        { name: 'E-mail', id: 4 }
    ]

  const novoCliente = () => {
    router.push('/cliente/cadastro-cliente');
  };

  return (
    <div>
       <div className='header'>
              <h1>Clientes</h1>
              <Button size='small' className='new' variant='contained' onClick={novoCliente}> Novo Cliente </Button>
          </div>
          <DataTable campos={campos} linhas={
              items.map((e) =>
                 <tr key={e.id}>
                    <td>{e.nome}</td>
                    <td>{e.cpf}</td>
                    <td>{e.telefone}</td>
                    <td>{e.email}</td>
                 </tr>
              )
          }></DataTable>
    </div>
  );
};

export default ListaCliente;
