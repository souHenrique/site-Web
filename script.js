const botaoTopo = document.getElementById("botao-topo");
let count = 1;

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