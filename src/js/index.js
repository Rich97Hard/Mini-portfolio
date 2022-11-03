/*comentario no js é igual a java e css /
console.log pra ver o codigo / ctrl ; - serve para comentar e descomentar uma linha co o "//"
OBJETIVO: quando clicarmos na aba, temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder ao conteúdo da aba anterior 

- Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

- Passo 2 - ar um jeito de identificar o clique no elemento da aba

- Passo 3 - quando o usuário clicar, desmarcar a aba selecionada

- Passo 4: marcar a aba clicada como selecionado.

- Passo 5: esconder o conteúdo anterior. 

- Passo 6: mostrar o conteúdo da aba selecionada.

*/

//- Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    //- Passo 2 - ar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {
        
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)

    });
});

function  selecionarAba(aba) {
    //- Passo 3 - quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //- Passo 4: marcar a aba clicada como selecionado.
    aba.classList.add("selecionado");

}

function mostrarInformacoesDaAba(aba) {
//- Passo 5: esconder o conteúdo anterior.
const informacaoSelecionada = document.querySelector(".informacao.selecionado");
informacaoSelecionada.classList.remove("selecionado");

//- Passo 6: mostrar o conteúdo da aba selecionada.
const idDoElementoDeInformacoesDaAba  = `informacao-${aba.id}`
const informacaoASerMostrada  = document.getElementById(idDoElementoDeInformacoesDaAba)
informacaoASerMostrada.classList.add("selecionado")

}
