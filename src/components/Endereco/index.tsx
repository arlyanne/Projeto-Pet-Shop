import { useState } from "react";
import { TextField , Button} from '@mui/material';

const Endereco = () => {
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');


return (
    <div>
        
        <TextField
          className="" 
          label="Cep"
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        /> 
         <TextField
          className="" 
          label="Logradouro"
          type="text"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
        /> 
        <TextField
          className="" 
          label="Complemento"
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        /> 
        <TextField
          className="" 
          label="Bairro"
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        /> 
    
    </div>
 );
}

export default Endereco;