import DataTable from '@/components/DataTable';
import { Button, TableCell, TableRow } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const ListaAgendamento= () => {
  const router = useRouter();
  const items = [
    { id: 1, dataAgendamento: 'Text.......', horario:'99999999999', animal: '.......', servico:'.......'},
    { id: 2, dataAgendamento: 'Text.......', horario:'99999999999', animal: '.......', servico:'.......'},
    { id: 3, dataAgendamento: 'Text.......', horario:'99999999999', animal: '.......', servico:'.......'},
    { id: 4, dataAgendamento: 'Text.......', horario:'99999999999', animal: '.......', servico:'.......'},
    { id: 5, dataAgendamento: 'Text.......', horario:'99999999999', animal: '.......', servico:'.......'},
  ];

    const campos = [
        { name: 'Data Agendamento', id: 1 },
        { name: 'Horário', id: 2 },
        { name: 'Animal', id: 3 },
        { name: 'Serviço', id: 4 },
        
    ]

  const novoAgendamento = () => {
    router.push('cadastro-agendamento');
  };

  return (
    <div>
          <div className='header'>
              <h1>Agendamento</h1>
              <Button size='small' className='new' variant='contained' onClick={novoAgendamento}> Novo Agendamento</Button>
          </div>
          <DataTable campos={campos} linhas={
              items.map((e) =>
                 <tr key={e.id}>
                    <td>{e.dataAgendamento}</td>
                    <td>{e.horario}</td>
                    <td>{e.animal}</td>
                    <td>{e.servico}</td>
                 </tr>
              )
          }></DataTable>
    </div>
  );
};

export default ListaAgendamento;