const botaoTopo = document.getElementById("botao-topo");
let count = 1;
const agendamentoForm = document.getElementById("agendamento-style-forms");
const confirmacaoAgend = document.getElementById("confirmacao-agendamento"); 

alert("Bem-vindo à Clínica RM! Explore nossos serviços e agende sua consulta.");

botaoTopo.onclick = function(){
    window.scrollTo({top: 0});
}

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
    
    confirmacaoAgend.style.display = "block";
    e.target.reset();
});