const botaoTopo = document.getElementById("botao-topo");
const botaoBarraMobile = document.getElementById("botao-nav-mobile");
const barraNavMobile = document.getElementById("barra-nav-mobile");
let count = 1;
const agendamentoForm = document.getElementById("agendamento-style-forms");
const confirmacaoAgend = document.getElementById("confirmacao-agendamento");
const telefoneAgend = document.getElementById("telefone");

alert("Bem-vindo à Clínica RM! Explore nossos serviços e agende sua consulta.");

botaoTopo.onclick = function(){
    window.scrollTo({top: 0});
}

botaoBarraMobile.addEventListener("click", function() {
    barraNavMobile.classList.add("abrir-barra-mobile");
})
barraNavMobile.addEventListener("click", function() {
    barraNavMobile.classList.remove("abrir-barra-mobile");
})

document.getElementById("radio1-serv").checked = true;
setInterval(function(){
    nextImage();
}, 5000);
function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio" + count + "-serv").checked = true;
}

agendamentoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const comentario = document.getElementById("comentario").value;

    console.log(`Solicitação do agendamento:\nNome: ${nome}; \nTelefone: ${telefone}; \nEmail: ${email}; \nComentários: ${comentario}.`)

    alert("Solicitação de agendamento enviada!");
    
    confirmacaoAgend.style.display = "block";
    e.target.reset();

    setTimeout(() => {
        confirmacaoAgend.style.display = "none";
    }, 5000);
});

telefoneAgend.addEventListener("input", function() {
    let numero = telefoneAgend. value;
    numero = numero.replace(/\D/g, "");

    if(numero.length > 11){
        numero = numero.slice(0, 11);
    }
    if(numero.length >= 2 && numero.length <= 6){
        numero = `(${numero.slice(0, 2)}) ${numero.slice(2)}`;
    }
    else if(numero.length > 6) {
        numero = `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7)}`;
    }

    telefoneAgend.value = numero;
});