import { useState } from "react";
import { TextField , Button} from '@mui/material';
import { EnderecoModel } from "@/pages/cliente/cadastro-cliente";

const Endereco = (props: any) => {
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');

    const endereco = props.endereco;

return (
    <div>
        <TextField
          className="" 
          label="Cep"
          type="text"
          value={endereco?.cep}
          onChange={(e) => props.setEndereco({cep: e.target.value})}
        /> 
         <TextField
          className="" 
          label="Logradouro"
          type="text"
          value={endereco?.logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        /> 
        <TextField
          className="" 
          label="Complemento"
          type="text"
          value={endereco?.complemento}
          onChange={(e) => setComplemento(e.target.value)}
        /> 
        <TextField
          className="" 
          label="Bairro"
          type="text"
          value={endereco?.bairro}
          onChange={(e) => setBairro(e.target.value)}
        /> 
    
    </div>
 );
}

export default Endereco;