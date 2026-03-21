const conect = document.getElementById('0')
const count = document.getElementById('count')
const resposta = document.getElementById('1')

function atualizar() {
    // remove todos os espaços do texto
    resposta.value = conect.value.replace(/\s/g, '');
    // atualiza o contador
    count.textContent = `Caracteres: ${resposta.value.length}`;
}

conect.addEventListener('paste', function(){
    setTimeout(atualizar, 0)
})
conect.addEventListener('input', function(){
    setTimeout(atualizar, 0)
})

