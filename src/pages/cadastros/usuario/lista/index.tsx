import DataTable from '@/components/DataTable';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaUsuarios= () => {
  const router = useRouter();
  const [itens, setItens]= useState<any>([]); 

    useEffect(() => {
        axios.get('http://localhost:3001/usuario')
            .then(function (response) {
                console.log(response)
                setItens(response.data)
            })
        return () => {
            [itens]
        }
    }, [itens])
  
  

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
              itens.map((e:any) =>
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