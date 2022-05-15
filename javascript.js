var campoNovaPalavra = document.querySelector("#campoNovaPalavra");
var idBotaoIniciar = document.querySelector("#idBotaoIniciar");
var idBotaoAdicionarPalavra = document.querySelector("#idBotaoAdicionarPalavra");
var idBotaoSalvarIniciar = document.querySelector("#idBotaoSalvarIniciar");
var idBotaoCancelar = document.querySelector("#idBotaoCancelar");


reiniciarTelaInicial();  //iniciar os botões padrões

function reiniciarTelaInicial(){

//bloco para iniciar os botões padrões
    
document.querySelector('.botaoAdicionarPalavra').style.display='initial';
document.querySelector(".botaoIniciar").style.display='initial';
document.querySelector('.botaoSalvarIniciar').style.display='none';
document.querySelector(".avisoDigitacao").style.display='none';
document.querySelector(".botaoCancelar").style.display='none';
}

idBotaoAdicionarPalavra.addEventListener("click", function() {
    
    telaAdicionarPalavra();
});

idBotaoCancelar.addEventListener("click", function() {
    
    reiniciarTelaInicial();
});


function telaAdicionarPalavra(){

    if(document.querySelector('.avisoDigitacao').style.display=='none'){
        document.querySelector('.avisoDigitacao').style.display = 'initial';
        document.querySelector('.botaoSalvarIniciar').style.display='initial';
        document.querySelector(".avisoDigitacao").style.display='initial';
        document.querySelector(".botaoCancelar").style.display='initial';

        document.querySelector('.botaoAdicionarPalavra').style.display='none';
document.querySelector(".botaoIniciar").style.display='none';

    }

}