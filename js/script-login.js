let btnAdd = document.querySelector("#addBotao");

btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector("#meuInput").value;
    if(inputValor ===""){
        alert("Você não preencheu os campos!")
    }else{
        document.querySelector("#mensagem-ok").insertAdjacentHTML(
            "afterend",
            `<div class="card-teste">
            <span>LOGIN EFETUADO COM SUCESSO!</span>
            </div>
            `
        );

        let mensagem = document.querySelector(".card-teste");


        setTimeout(() => {
            mensagem.style.display = "none";

        }, 3000);
        
    }

    document.querySelector("#meuInput").value = "";
});

let btnAdd2 = document.querySelector("#addBotao");

btnAdd2.addEventListener("click", function(){
    let inputValor = document.querySelector("#meuInput2").value;
  
    document.querySelector("#meuInput2").value = "";
});