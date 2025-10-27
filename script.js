function adicionar(valor) {
  document.getElementById('tela').value += valor;
}

function calcular() {
  try {
    const tela = document.getElementById('tela');
    tela.value = eval(tela.value);
  } catch (e) {
    alert('Expressão inválida');
  }
}

function apagar() {
  const tela = document.getElementById('tela');
  tela.value = tela.value.slice(0, -1);
}

function limpar() {
  document.getElementById('tela').value = '';
}

//digitação pelo teclado
document.addEventListener('keydown', function(event) {
  const tela = document.getElementById('tela');
  if (event.key >= '0' && event.key <= '9' || ['+', '-', '*', '/', '.'].includes(event.key)) {
    tela.value += event.key;
  } else if (event.key === 'Enter') {
    calcular();
  } else if (event.key === 'Backspace') {
    tela.value = tela.value.slice(0, -1);
  }
});
