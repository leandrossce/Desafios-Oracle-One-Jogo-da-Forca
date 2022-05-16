const dicionario=['Lua','Estrela','Submarino','livro','caneta','garfo','panela','mesa','cama','microfone','celular','martelo','bolsa','menina','garoto','pai','homem','mulher','professor','médica','estudante','ator','empresário','cachorro','gato','cavalo','tigre
','papagaio','mico','capivara','palmeira','roseira','samambaia','capim','coqueiro','girassol','goiaba','banana','pitanga','laranja','limão','mamão','montanha'];

var campoNovaPalavra = document.querySelector("#campoNovaPalavra");

var idBotaoIniciar = document.querySelector("#idBotaoIniciar");
var idBotaoAdicionarPalavra = document.querySelector("#idBotaoAdicionarPalavra");

var idBotaoSalvarIniciar = document.querySelector("#idBotaoSalvarIniciar");
var idBotaoCancelar = document.querySelector("#idBotaoCancelar");

var idBotaoNovoJovo = document.querySelector("#idBotaoNovoJovo");
var idBotaoDesistir = document.querySelector("#idBotaoDesistir");

var idCaracteresDigitados = document.querySelector("#oculto");


idCaracteresDigitados.addEventListener('keydown', logKey);

function logKey(e) {
  
    idCaracteresDigitados.focus();


  }



reiniciarTelaInicial();  //iniciar os botões padrões

function reiniciarTelaInicial(){

//bloco para iniciar os botões padrões
    
document.querySelector('.botaoAdicionarPalavra').style.display='initial';
document.querySelector(".botaoIniciar").style.display='initial';
document.querySelector('.botaoSalvarIniciar').style.display='none';
document.querySelector(".avisoDigitacao").style.display='none';
document.querySelector(".botaoCancelar").style.display='none';
document.querySelector('.botaoNovoJovo').style.display='none';
document.querySelector('.botaoDesistir').style.display='none';
}


idBotaoDesistir.addEventListener("click", function() {

    for(var i = 0; i<10;i++)        //zera boneco
    montagemForca(9-i,'none');

    location.reload();// recarrega a URL
});

function numeroAleatorio(){

    return Math.floor(Math.random() * (dicionario.length));
}

function iniciarJogo(){
    
    telaJogo();

    var escolhaPalavraAleatoria=numeroAleatorio();
    var palavra;
    palavra=dicionario[escolhaPalavraAleatoria];

    for(var i =0;i<=palavra.length;){
        carregarPalavraSecreta(palavra[palavra.length-i]);
        i++;
    }

    idCaracteresDigitados.focus();

    /*for(var i =0;i<"LEANDRO".length;i++)
    {
        carregarPalavraSecreta("LEANDRO"[i]);
    }*/

}
idBotaoIniciar.addEventListener("click", function() {
    
    iniciarJogo();
    
    
});



idBotaoAdicionarPalavra.addEventListener("click", function() {
    
    telaAdicionarPalavra();
});

idBotaoCancelar.addEventListener("click", function() {
    
    reiniciarTelaInicial();
});

var contagem=0;

idBotaoNovoJovo.addEventListener("click", function() {
    
    var letraPalavraSecreta = document.querySelectorAll(".letraPalavraSecreta");
    for(var i =0;i<letraPalavraSecreta.length;i++)
    letraPalavraSecreta[i].outerHTML="";


    iniciarJogo();
    

    /*
    if(contagem<10){
    montagemForca(contagem,'initial');
    contagem++;
    return;
    }

    else contagem=0;*/

      

});


function telaAdicionarPalavra(){

    if(document.querySelector('.avisoDigitacao').style.display=='none'){
        document.querySelector('.avisoDigitacao').style.display = 'initial';
        document.querySelector('.botaoSalvarIniciar').style.display='initial';
        document.querySelector(".avisoDigitacao").style.display='initial';
        document.querySelector(".botaoCancelar").style.display='initial';

        document.querySelector('.botaoAdicionarPalavra').style.display='none';
        document.querySelector(".botaoIniciar").style.display='none';

        document.querySelector('.avisoDigitacao').value="";
            
        document.querySelector('.botaoNovoJovo').style.display='none';
        document.querySelector('.botaoDesistir').style.display='none';

    }

}
function apagarForca(array){



}

function montagemForca(posicao,status){

   var astemaior = document.querySelector('.astemaior');
   var astemenor = document.querySelector('.astemenor');
   var base = document.querySelector('.base');
   var bracodireito = document.querySelector('.bracodireito');
   var bracoesquerdo = document.querySelector('.bracoesquerdo');
   var cabeca = document.querySelector('.cabeca');
   var corda = document.querySelector('.corda');
   var pernadireita = document.querySelector('.pernadireita');
   var pernaesquerda = document.querySelector('.pernaesquerda');
   var tronco = document.querySelector('.tronco');

   var forca = [base,astemaior,astemenor,corda,cabeca,tronco,bracoesquerdo,bracodireito,pernaesquerda,pernadireita];
 
   forca[posicao].style.display=status;
}

function telaJogo(){

    document.querySelector('.avisoDigitacao').style.display = 'none';
    document.querySelector('.botaoSalvarIniciar').style.display='none';
    document.querySelector(".avisoDigitacao").style.display='none';
    document.querySelector(".botaoCancelar").style.display='none';

    document.querySelector('.botaoAdicionarPalavra').style.display='none';
    document.querySelector(".botaoIniciar").style.display='none';

    document.querySelector('.botaoNovoJovo').style.display='initial';
    document.querySelector('.botaoDesistir').style.display='initial';


}

function insertAfter(newElement, reference) {
    reference.parentNode.insertBefore(newElement, reference.nextSibling);
}



function carregarPalavraSecreta(letra){
    
  /* Testando */
 el = document.createElement("div")

el.textContent= letra;
const div = document.querySelector(".palavraSecreta");
el.classList.add("letraPalavraSecreta");
insertAfter(el, div);

}
