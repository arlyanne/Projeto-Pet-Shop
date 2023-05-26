import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";
import axios from 'axios';
import { useRouter } from 'next/router';

const Usuario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setnewPassword] = useState('');

  const router = useRouter ();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios.post('http://localhost:3001/usuario', {
      email: email,
      senha: password
    })
    .then(function(response){
      console.log(response)
      router.push('lista')
    })
    .catch(function (error){
      console.log(error)
    })
  };

  return (
    <div className="container">
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