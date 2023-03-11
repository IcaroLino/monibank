import validaCPF from './valida-cpf.js';

const camposForm = document.querySelectorAll('[required]');

function verificarCampo(campo) {
  if (campo.name === 'cpf' && campo.value.length >= 11) validaCPF(campo);
}

camposForm.forEach((campo) => {
  campo.addEventListener('blur', () => verificarCampo(campo));
});


console.log(camposForm);