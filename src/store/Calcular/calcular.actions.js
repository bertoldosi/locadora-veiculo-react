export function soma(primeiroValor, segundoValor) {
  return {
    type: 'SOMA',
    payload: [primeiroValor, segundoValor],
  };
}

export function subtracao(primeiroValor, segundoValor) {
  return {
    type: 'SUBTRACAO',
    payload: [primeiroValor, segundoValor],
  };
}
