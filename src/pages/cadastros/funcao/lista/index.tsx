import DataTable from '@/components/DataTable';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Listafuncao = () => {
  const router = useRouter();
  const items = [
    { id: 1, nome: 'Text.......', cpf:'99999999999', cargo: '.......', matricula:'.......'},
    { id: 2, nome: 'Text.......', cpf:'99999999999', cargo: '.......', matricula:'.......'},
    { id: 3, nome: 'Text.......', cpf:'99999999999', cargo: '.......', matricula:'.......'},
    { id: 4, nome: 'Text.......', cpf:'99999999999', cargo: '.......', matricula:'.......'},
    { id: 5, nome: 'Text.......', cpf:'99999999999', cargo: '.......', matricula:'.......'},
  ];

    const campos = [
        { name: 'Nome', id: 1 },
        { name: 'CPF', id: 2 },
        { name: 'Cargo', id: 3 },
        { name: 'Matricula', id: 4 },
        
    ]

  const novaFuncao = () => {
    router.push('cadastro-funcao');
  };

  return (
    <div>
          <div className='header'>
              <h1>Função</h1>
              <Button size='small' className='new' variant='contained' onClick={novaFuncao}> Nova Função</Button>
          </div>
          <DataTable campos={campos} linhas={
              items.map((e) =>
                 <tr key={e.id}>
                    <td>{e.nome}</td>
                    <td>{e.cpf}</td>
                    <td>{e.cargo}</td>
                    <td>{e.matricula}</td>
                 </tr>
              )
          }></DataTable>
    </div>
  );
};

export default Listafuncao;