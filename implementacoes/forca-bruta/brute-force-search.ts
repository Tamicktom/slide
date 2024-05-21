export function bruteForceSearch(text: string, pattern: string): [number[], number] {
  const matchPositions: number[] = []; // Array para armazenar as posições onde o padrão é encontrado
  let comparisonCount = 0; // Contador de comparações
  const textLength = text.length;
  const patternLength = pattern.length;

  // Se o padrão é vazio ou maior que o texto, retorna o array vazio e o contador
  if (patternLength === 0 || textLength < patternLength)
    return [matchPositions, comparisonCount];

  // Converte as strings em arrays de caracteres para acesso por índice
  const textChars = Array.from(text);
  const patternChars = Array.from(pattern);

  // Loop para verificar cada possível posição de início no texto
  for (let start = 0; start <= textLength - patternLength; start++) {
    let matchIndex = 0;

    // Loop para verificar cada caractere do padrão
    while (matchIndex < patternLength) {
      comparisonCount += 1; // Incrementa o contador de comparações
      if (textChars[start + matchIndex] !== patternChars[matchIndex])
        break;

      matchIndex += 1;
    }

    // Se todos os caracteres do padrão corresponderem, armazena a posição inicial
    if (matchIndex === patternLength)
      matchPositions.push(start);
  }

  return [matchPositions, comparisonCount];
}
