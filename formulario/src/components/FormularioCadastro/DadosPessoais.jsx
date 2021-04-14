import React, { useState } from 'react';
import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function DadosPessoais({aoEnviar, validarCPF}) { //props
    //estados
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return (
     <form onSubmit={(event) =>{ event.preventDefault(); aoEnviar({nome, sobrenome, cpf, novidades, promocoes})}}>

         <TextField id="nome" label="Nome" variant="outlined" color="primary" fullWidth margin="normal" required
         value={nome} 
         onChange={(event) => {
             setNome(event.target.value)}} />

         <TextField id="sobrenome" label="Sobrenome" variant="outlined" color="primary" fullWidth margin="normal" required
         value={sobrenome} 
         onChange={(event) => {
             setSobrenome(event.target.value)}}/>
         
         <TextField id="cpf" label="CPF" variant="outlined" color="primary" fullWidth margin="normal" required
         value={cpf} 
         //The onchange attribute fires the moment when the value of the element is changed.
         onChange={(event) => {
             setCpf(event.target.value)}}
        //The error if true, the label will be displayed in an error state.
        error={!erros.cpf.valido} 
        // The helpertext - error text if cpf is false or empty text if cpf is true
        helperText={erros.cpf.texto}
        // The onblur event occurs when an object loses focus
        onBlur={(event)=>{
            const isValido = validarCPF(event.target.value)
            setErros({cpf:isValido})
        }}/>

         <FormControlLabel control={<Switch name="promocoes" checked={promocoes} color="primary"
          onChange={(event) => {
            setPromocoes(event.target.checked)}}
            />} 
            label="Promoções" />
         
         <FormControlLabel control={<Switch name="novidades" checked={novidades} color="primary"
         onChange={(event) => {
            setNovidades(event.target.checked)}}
            />} 
            label="Novidades" />

         <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
         
     </form>
    );
  }
  
  export default DadosPessoais;