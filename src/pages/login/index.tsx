import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Lógica para autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container ">
      <form className="login-form" onSubmit={handleSubmit}>

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
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="login-button" variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

