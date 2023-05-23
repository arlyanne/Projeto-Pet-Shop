import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";

const Funcionario = () => {
  const [nomeServico, setNomeServico] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="container ">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Serviço</h2>

        {/* TEXTFIELD ELE É UM INPUT/CAIXA DE ENTRADA */}
        <TextField
          className="" 
          label="Nome Serviço"
          type="text"
          value={nomeServico}
          onChange={(e) => setNomeServico(e.target.value)}
        />
        <TextField
          className=""
          label="Descrição"
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <TextField
          className="" 
          label="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <Button className="login-button" variant="contained" color="primary" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default Funcionario;