import { Menu } from '@/components/Menu';
import { TextField , Button} from '@mui/material';
import { useState } from 'react';

const Cliente = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="container ">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Cadastro Cliente</h2>
        {/* TEXTFIELD ELE É UM INPUT/CAIXA DE ENTRADA */}
        <TextField
          className="login-input" 
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          className="login-input" 
          label="CPF"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <TextField
          className="login-input" 
          label="Telefone"
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
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
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
         <TextField
          className="login-input" 
          label="Digite Senha Novamente"
          type="password"
          value={confSenha}
          onChange={(e) => setConfSenha(e.target.value)}
        />

        <Button className="login-button" variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>

        
      </form>
    </div>
  );
};

export default Cliente;