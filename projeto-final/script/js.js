var inputEntrada = document.querySelector('#text-input');
var inputSaida = document.querySelector('#text-output');
var areaConteudoVazio = document.querySelector('.conteudo__vazio');
var areaConteudo__resultado__pronto = document.querySelector('.conteudo__resultado__pronto');


areaConteudoVazio.style.display = 'block';
areaConteudo__resultado__pronto.style.display = 'none';

function botaoCriptografar() {
    console.log("Botão Criptografar clicado");
    const textoEncriptado = criptografar(inputEntrada.value);
    console.log("Texto criptografado:", textoEncriptado);
    inputSaida.value = textoEncriptado;

   
    esconderMensagemNenhuma();

    
    areaConteudoVazio.style.display = 'none';
    areaConteudo__resultado__pronto.style.display = 'block';
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function botaoDescriptografar() {
    console.log("Botão Descriptografar clicado");
    const textoDescriptado = descriptografar(inputEntrada.value);
    console.log("Texto descriptografado:", textoDescriptado);
    inputSaida.value = textoDescriptado;

   
    esconderMensagemNenhuma();

    
    areaConteudoVazio.style.display = 'none';
    areaConteudo__resultado__pronto.style.display = 'block';
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptada;
}

function esconderMensagemNenhuma() {
    console.log("Escondendo mensagem 'Nenhuma Mensagem Encontrada'");
    document.getElementById('h2__resultado').style.display = 'none';
    document.getElementById('p__resultado').style.display = 'none';
}

function copiarTexto() {
    inputSaida.select();
    inputSaida.setSelectionRange(0, 99999);
    document.execCommand("copy");
    console.log("Texto copiado:", inputSaida.value);
}
