import React, { useState, useEffect } from 'react';
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'
import {Typography, Stepper, Step, StepLabel} from '@material-ui/core'

function FormularioCadastro({aoEnviar}) { //props
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    //hooks estados
    useEffect(()=>{
        //etapa == 2
        if(etapaAtual === formularios.length - 1){
            aoEnviar(dadosColetados)
        }
    })

    const formularios = [
         <DadosUsuario aoEnviar={coletarDados}/>,
         <DadosPessoais aoEnviar={coletarDados}/>,
         <DadosEntrega aoEnviar={coletarDados}/>,
         <Typography variant="h5">Obrigado pelo cadastro!</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados})
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }

    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>

        {formularios[etapaAtual]}
        </>
     
    );
  }

  
  export default FormularioCadastro;