import React, { useState, useContext  } from 'react';
import {Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'

function DadosPessoais({aoEnviar}) { //props
    //estados
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome:{valido:true, texto:""}});


    const validacoes = useContext(ValidacoesCadastro)
    console.log(validacoes)

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }

    function possoEnviar(){
        for(let campo in erros){
            console.log(erros[campo].valido)
            if(!erros[campo].valido){
                return false
            }
        }
        return true
    }

    return (
     <form onSubmit={
        (event) => {
            event.preventDefault(); 
                if(possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
                    }
                }
            }>

         <TextField id="nome" label="Nome" variant="outlined" color="primary" fullWidth margin="normal" required
         name="nome"
         value={nome} 
         onChange={(event) => {
             setNome(event.target.value)}} 
        onBlur={validarCampos}
        error={!erros.nome.valido} 
        helperText={erros.nome.texto}/>

         <TextField id="sobrenome" label="Sobrenome" variant="outlined" color="primary" fullWidth margin="normal" required
         value={sobrenome} 
         onChange={(event) => {
             setSobrenome(event.target.value)}}/>
         
         <TextField id="cpf" label="CPF" variant="outlined" color="primary" fullWidth margin="normal" required
         name="cpf"
         value={cpf} 
         //The onchange attribute fires the moment when the value of the element is changed.
         onChange={(event) => {
             setCpf(event.target.value)}}
        //The error if true, the label will be displayed in an error state.
        error={!erros.cpf.valido} 
        // The helpertext - error text if cpf is false or empty text if cpf is true
        helperText={erros.cpf.texto}
        // The onblur event occurs when an object loses focus
        onBlur={validarCampos}
        />

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

         <Button type="submit" variant="contained" color="primary">Próximo</Button>
         
     </form>
    );
  }
  
  export default DadosPessoais;