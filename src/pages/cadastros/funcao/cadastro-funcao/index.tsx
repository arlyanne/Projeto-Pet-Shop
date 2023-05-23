import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";

const Funcao = () => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [matricula, setMatricula] = useState('');
  const [cpf, setCpf] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="container ">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Função</h2>

        {/* TEXTFIELD ELE É UM INPUT/CAIXA DE ENTRADA */}
        <TextField
          className="" 
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          className="" 
          label="Cargo"
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
        <TextField
          className=""
          label="Matricula"
          type="number"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <TextField
          className="" 
          label="Observação"
          type="text"
          value={observacao}
          onChange={(e) => setObservacao(e.target.value)}
        />
        <Button className="login-button" variant="contained" color="primary" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default Funcao;