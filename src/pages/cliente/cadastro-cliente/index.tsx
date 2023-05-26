import Endereco from '@/components/Endereco';
import { Menu } from '@/components/Menu';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';

export interface EnderecoModel {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,

}

const Cliente = () => {

  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState<EnderecoModel>(
    {
      cep: '',
      logradouro: '',
      complemento: '',
      bairro: '',
    }
  );

  const router = useRouter();


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e)
    axios.post('http://localhost:3001/cliente', {
      email: email,
      nome: nome,
      cpf: cpf,
      telefone: telefone

    })
      .then(function (response) {
        console.log(response)
        router.push('lista')
      })
      .catch(function (error) {
        console.log(error)
      })
  };

  console.log(endereco)

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

        <Endereco endereco={endereco} setEndereco={setEndereco}></Endereco>

        <Button className="login-button" variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>


      </form>
    </div>
  );
};

export default Cliente;