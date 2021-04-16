import React, {useState} from 'react';

function useErros(validacoes){
    const estadoInicial = criarEstadoInicial(validacoes)

    const [erros, setErros] = useState(estadoInicial);

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

    return [erros, validarCampos, possoEnviar]
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {}
    for(let campo in validacoes){
        console.log("qual campo?" + campo)
        estadoInicial[campo] = {valido:true, texto:""}
    }

    return estadoInicial
}

export default useErros

