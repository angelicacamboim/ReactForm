import React from 'react';
import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro() {
    return (
     <form>
         <TextField id="nome" label="Nome" variant="outlined" color="primary" fullWidth margin="normal"/>

         <TextField id="sobrenome" label="Sobrenome" variant="outlined" color="primary" fullWidth margin="normal"/>
         
         <TextField id="cpf" label="CPF" variant="outlined" color="primary" fullWidth margin="normal"/>

         <FormControlLabel control={<Switch name="promocoes" defaultChecked color="primary"/>} label="Promoções" />
         
         <FormControlLabel control={<Switch name="novidades" defaultChecked color="primary"/>} label="Novidades" />

         <Button variant="contained" color="primary">Cadastrar</Button>
         
     </form>
    );
  }
  
  export default FormularioCadastro;