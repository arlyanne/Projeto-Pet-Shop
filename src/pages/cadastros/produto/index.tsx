import { TextField , Button} from '@mui/material';
import { useState } from 'react';
import styled from "@emotion/styled";

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [quantEstoque, setQuantEstoque] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="container ">
      <form className="form" onSubmit={handleSubmit}>
      <h2>Cadastro Produto</h2>

        {/* TEXTFIELD ELE É UM INPUT/CAIXA DE ENTRADA */}
        <TextField
          className="login-input " 
          label="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          className="login-input "
          label="Descrição"
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <TextField
          className="login-input " 
          label="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <TextField
          className="login-input " 
          label="Quantidade de Estoque"
          type="number"
          value={quantEstoque}
          onChange={(e) => setQuantEstoque(e.target.value)}
        />
        <input className='inputFile'
        accept="image/*" // Define o tipo de arquivo que pode ser selecionado
        id="upload-button"
        multiple
        type="file"
        onChange={() => {}}
      />
      <label htmlFor="upload-button">
        <Button className='uploadButton' variant="contained" color="primary" component="span">
          Upload de Arquivos
        </Button>
      </label>
        <Button className="login-button" variant="contained" color="primary" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default CadastroProduto;