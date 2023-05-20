import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";
import Endereco from '@/components/Endereco';

const Agendamento = () => {
  const [dataAgend, setDataAgend] = useState('');
  const [horario, setHorario] = useState('');
  const [animal, setAnimal] = useState('');
  const [servicos, setServicos] = useState([]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="container ">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Agendamento</h2>

        {/* TEXTFIELD ELE É UM INPUT/CAIXA DE ENTRADA */}
        <TextField
          className="" 
          label="Data Agendamento"
          type="text"
          value={dataAgend}
          onChange={(e) => setDataAgend(e.target.value)}
        />
         <TextField
          className="" 
          label="Horário"
          type="text"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
         <TextField
          className="" 
          label="Animal"
          type="text"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
        />
         <TextField
          className="" 
          label="Serviços"
          type="text"
          value={servicos}
          onChange={(e) => setServicos([])}
        />
        
       
        <Button className="login-button" variant="contained" color="primary" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default Agendamento;


