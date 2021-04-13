import React, { useState } from 'react';
import {Button, TextField } from '@material-ui/core';


function DadosEntrega({aoEnviar}) { //props

    return (
        <form onSubmit={(event) =>{ event.preventDefault(); aoEnviar()}}>
            <TextField id="cep" label="CEP" type="number" variant="outlined" color="primary" margin="normal"/>
            <TextField id="endereco" label="Endereço" type="text" variant="outlined" color="primary" fullWidth margin="normal"/>
            <TextField id="numero" label="Número" type="number" variant="outlined" color="primary" margin="normal"/>
            <TextField id="estado" label="Estado" type="text" variant="outlined" color="primary" margin="normal"/>
            <TextField id="cidade" label="Cidade" type="text" variant="outlined" color="primary" margin="normal"/>
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
     
    );
  }
  
  export default DadosEntrega;