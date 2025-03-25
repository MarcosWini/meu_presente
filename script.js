import { updateCounter } from "./script-contador.js";

$(document).ready(()=>{
    // Aplicar a máscara para garantir 4 dígitos e preencher com zeros à esquerda
    updateCounter();
    $('#form-senha').mask('0000', {placeholder: "0000"}).val('0000');

    $("#formJogo").on('submit', (e)=>{
        e.preventDefault();
        verificarSenha($("#form-senha").val())
    })
})

const senhas = {
    "1234": "/boboca.html",
    "1206": "/first-kiss.html",
    "2106": "/first-connection.html",
    "2508": "/theday.html",
    "0000": "first-date.html"
}


// Redirecionar para a página referente a senha
function verificarSenha(senha){
    if(senha in senhas){
        window.location.href = `./${senhas[senha]}`
    }else{
        $('#label-senha-invalida').css('display', 'block')
        // console.log("Senha inválida")
    }
}