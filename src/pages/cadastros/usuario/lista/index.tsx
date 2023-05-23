import DataTable from '@/components/DataTable';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const ListaUsuarios= () => {
  const router = useRouter();
  const items = [
    { id: 1, email: 'email@gmail.com', senha: '.......', novaSenha:'.......'},
    { id: 2, email: 'email@gmail.com', senha: '.......', novaSenha:'.......'},
    { id: 3, email: 'email@gmail.com', senha: '.......', novaSenha:'.......'},
    { id: 4, email: 'email@gmail.com', senha: '.......', novaSenha:'.......'},
    { id: 5, email: 'email@gmail.com', senha: '.......', novaSenha:'.......'},
  ];

    const campos = [
        { name: 'Email', id: 1 },
        { name: 'Senha', id: 2 },
        { name: 'Nova Senha', id: 3 },
        
    ]

  const novoUsuario = () => {
    router.push('/cadastros/usuario/cadastro-usuario');
  };

  return (
    <div>
          <div className='header'>
              <h1>Usuário</h1>
              <Button size='small' className='new' variant='contained' onClick={novoUsuario}> Novo Usuário</Button>
          </div>
          <DataTable campos={campos} linhas={
              items.map((e) =>
                 <tr key={e.id}>
                    <td>{e.email}</td>
                    <td>{e.senha}</td>
                    <td>{e.novaSenha}</td>
                 </tr>
              )
          }></DataTable>
    </div>
  );
};

export default ListaUsuarios;