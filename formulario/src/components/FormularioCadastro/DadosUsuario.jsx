import React, { useState, useContext} from 'react';
import {Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) { //props
    //estados
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)
    

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault(); 
                    if(possoEnviar()){
                        aoEnviar({email, senha})
                        }
                        }
                }>

            <TextField id="email" label="email" type="email" variant="outlined" color="primary" fullWidth margin="normal" required
            name="email"
            value={email}
            onChange={(event) => {setEmail(event.target.value)}}
            />

            <TextField id="senha" label="senha" type="password" variant="outlined" color="primary" fullWidth margin="normal" required
            name="senha"
            value={senha}
            onChange={(event) => {setSenha(event.target.value)}}
            onBlur={validarCampos}
            error={!erros.senha.valido} 
            helperText={erros.senha.texto}
            />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
     
    );
  }
  
  export default DadosUsuario;