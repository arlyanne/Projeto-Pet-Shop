import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";

const Usuario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setnewPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Lógica para autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container ">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Cadastro Usuário</h2>
        {/* TEXTFIELD ELE É UM INPUT/CAIXA DE ENTRADA */}
        <TextField
          className="login-input" 
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="login-input"
          label="Crie uma Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <TextField
          className="login-input"
          label="Digite novamente a senha"
          type="password"
          value={newpassword}
          onChange={(e) => setnewPassword(e.target.value)}
        />
        <Button className="login-button" variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default Usuario;