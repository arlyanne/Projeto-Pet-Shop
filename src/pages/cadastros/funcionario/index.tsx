import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";
import Endereco from '@/components/Endereco';

const Funcionario = () => {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [genero, setGenero] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
 


  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="container ">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Cadastro Funcionário</h2>

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
          label="Data Nascimento"
          type="text"
          value={dataNasc}
          onChange={(e) => setDataNasc(e.target.value)}
        />
         <TextField
          className="" 
          label="Gênero"
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />
        <TextField
          className=""
          label="CPF"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
         <TextField
          className="" 
          label="Telefone"
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <TextField
          className="" 
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="" 
          label="Matrícula"
          type="number"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <Endereco></Endereco>
        <Button className="login-button" variant="contained" color="primary" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default Funcionario;