let tentativas= 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let tentatRestant= 6;
let erros= 0;
const palavras= [
    palavras001 = {
        nome: "JAVA",
        categoria: "Linguagens de Programação"
    },
    palavras002={
        nome: "PYTHON",
        categoria: "Linguagens de Programação"
    },
    palavras003={
        nome : "SWIFT",
        categoria: "Linguagens de Programação"
    },
    palavras004={
        nome : "RUBY",
        categoria: "Linguagens de Programação"
    },
    palavras005={
        nome : "PERL",
        categoria: "Linguagens de Programação"
    },
    palavras006={
        nome : "NETBEANS",
        categoria: "IDEs"
    },
    palavras007={
        nome : "VSCODE",
        categoria: "IDEs"
    },
    palavras008={
        nome : "ECLIPSE",
        categoria: "IDEs"
    },
    palavras009={
        nome : "SUBLIMETEXT",
        categoria: "IDEs"
    },
    palavras010={
        nome : "PHPSTORM",
        categoria: "IDEs"
    },
    palavras011={
        nome : "MOTHEBOARD",
        categoria: "Componentes de PC"
    },
    palavras012={
        nome : "PROCESSADOR",
        categoria: "Componentes de PC"
    },
    palavras013={
        nome : "MONITOR",
        categoria: "Componentes de PC"
    },
    palavras014={
        nome : "TECLADO",
        categoria: "Componentes de PC"
    },
    palavras015={
        nome : "COOLER",
        categoria: "Componentes de PC"
    },
    palavras016={
        nome : "DELL",
        categoria: "Marcas de PC"
    },
    palavras017={
        nome : "SONY",
        categoria: "Marcas de PC"
    },
    palavras018={
        nome : "COMPAQ",
        categoria: "Marcas de PC"
    },
    palavras019={
        nome : "ASUS",
        categoria: "Marcas de PC"
    },
    palavras020={
        nome : "TOSHIBA",
        categoria: "Marcas de PC"
    },
];

alert("Bem vindo! Antes de iniciar é importante saber que você tem apenas 6 tentativas! As palavras estão relacionadas a Linguagens de Programação, tipos de IDEs, Marcas e Componentes de PC. Boa Sorte!!!");

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)  

    palavraSecretaSorteada= palavras[indexPalavra].nome;
    palavraSecretaCategoria= palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i]= "&nbsp;"
            palavraTela.innerHTML= palavraTela.innerHTML + "<div class= 'letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML= palavraTela.innerHTML + "<div class= 'letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-"+ letra).disabled=true;
    if(tentativas>0){
        mudarEstiloLetra("tecla-"+ letra);
        comparalistas(letra); 
        montarPalavraNaTela();   
    }
    
}

function mudarEstiloLetra(tecla){
    document.getElementById(tecla).style.background = "#00ff22";
    document.getElementById(tecla).style.color = "#000000";
}

function mudarEstiloLetraE(tecla){
    document.getElementById(tecla).style.background = "#fa0202";
    document.getElementById(tecla).style.color = "#000000";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos<0){
        tentativas--
        document.getElementById("tentativas").innerHTML = +tentativas;
        mudarEstiloLetraE("tecla-"+ letra);
        carregaImagemForca();
        if(tentativas==0)
        {
            abreModal("GAME OVER!! A palavra secreta era " +palavraSecretaSorteada, "Para jogar novamente click no 🕹️");
        }
        
    }
    else{
        for(i=0; i<palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i]==letra){
                listaDinamica[i]= letra;
            }
            
        }
    }

    let vitoria= true;
    for(i=0; i< palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria= false;
        }
    }

    if(vitoria==true){
        abreModal("PARABÉNS!!", "Você acertou! Foi salvo da forca!! Para jogar novamente click no 🕹️");
        tentativas=0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./images/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./images/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./images/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./images/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./images/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./images/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./images/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo= document.getElementById("exampleModalLabel");
    modalTitulo.innerText= titulo;

    let modalBody= document.getElementById("modalBody");
    modalBody.innerText= mensagem; 
    $("#meuModal").modal({
        show: true
    })
}

let teclaReinicar= document.querySelector("#tecla-reinicar")
teclaReinicar.addEventListener("click", function(){
    location.reload();
});


