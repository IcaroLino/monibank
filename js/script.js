import validaCPF from './valida-cpf.js';
import validaIdade from './valida-idade.js';

const camposForm = document.querySelectorAll('[required]');

function verificarCampo(campo) {
  if (campo.name === 'cpf' && campo.value.length >= 11) validaCPF(campo);
  if (campo.name === 'aniversario' && campo.value !== '') validaIdade(campo);
}

camposForm.forEach((campo) => {
  campo.addEventListener('blur', () => verificarCampo(campo));
});


console.log(camposForm);