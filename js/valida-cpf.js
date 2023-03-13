export default function validaCPF(campo) {
  const cpf = campo.value.replace(/\.|-/g, '');
 if (validarNumerosRepetidos(cpf) || validarPrimeiroDigito(cpf) || validarSegundoDigito(cpf)) campo.setCustomValidity('Esse CPF não existe');
}

function validarNumerosRepetidos(cpf) {
  const numerosRepetidos = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
  ]

  return numerosRepetidos.includes(cpf)
}

function validarPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let index = 0; index < 9; index += 1) {
    soma += cpf[index] * multiplicador;
    multiplicador -= 1;    
  }

  soma = (soma * 10) % 11;

  if (soma === 10 || soma === 11) soma = 0;

  return soma != cpf[9];
}

function validarSegundoDigito(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for (let index = 0; index < 10; index += 1) {
    soma += cpf[index] * multiplicador;
    multiplicador -= 1;    
  }

  soma = (soma * 10) % 11;

  if (soma === 10 || soma === 11) soma = 0;

  return soma != cpf[10];
}

