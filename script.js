let titulo = document.getElementById("titulo");
console.log(typeof titulo);
console.log(titulo.innerText);

function verificarInput(){
    let nome = document.getElementById('nome').value;
    // console.log(nome)
    if(nome.length<5){
        nome.className = 'erro'
    }else {
        nome.className = '';
    }
}
