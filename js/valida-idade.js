export default function validaIdade(campo) {
  const dataNascimento = new Date(campo.value);
  validarIdade(dataNascimento);

  console.log(validarIdade(dataNascimento));
}

function validarIdade(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

  return dataAtual >= dataMais18;
}