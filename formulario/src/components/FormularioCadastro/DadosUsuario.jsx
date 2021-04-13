import React, { useState } from 'react';
import {Button, TextField } from '@material-ui/core';


function DadosUsuario({aoEnviar}) { //props

    return (
        <form onSubmit={(event) =>{ event.preventDefault(); aoEnviar()}}>
            <TextField id="email" label="email" type="email" variant="outlined" color="primary" fullWidth margin="normal" required/>
            <TextField id="senha" label="senha" type="password" variant="outlined" color="primary" fullWidth margin="normal" required/>
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
     
    );
  }
  
  export default DadosUsuario;