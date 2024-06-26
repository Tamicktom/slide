function computeLongestPrefixSuffixArray(pattern: string[]): number[] {
  const patternLength: number = pattern.length;
  const lps: number[] = new Array(patternLength).fill(0);
  let length = 0; // Comprimento do maior prefixo que é também sufixo
  let i = 1;

  // Calcula o array de LPS para o padrão
  while (i < patternLength) { // Enquanto não percorrer todo o padrão
    if (pattern[i] === pattern[length]) { // Se os caracteres correspondem
      length++;
      lps[i] = length; // Atualiza o valor do array LPS
      i++; // Atualiza o índice
    } else { // Se os caracteres não correspondem
      if (length !== 0) { // Se o comprimento não é 0
        length = lps[length - 1]; // Atualiza o comprimento
      } else {
        lps[i] = 0; // Atualiza o valor do array LPS
        i++;
      }
    }
  }

  return lps; // Retorna o array LPS calculado
}

function KMPSearch(pattern: string[], text: string[]): number[] {
  const patternLength = pattern.length;
  const textLength = text.length;

  const lps = computeLongestPrefixSuffixArray(pattern);
  let j = 0; // Índice para pattern[]
  let i = 0; // Índice para text[]

  console.log(`Tabela de transição de falhas: [${lps}]`);
  const patternPositions: number[] = [];

  while ((textLength - i) >= (patternLength - j)) {
    if (pattern[j] === text[i]) { // Se os caracteres correspondem
      j++;
      i++;
    }
    if (j === patternLength) { // Se o padrão foi encontrado
      patternPositions.push(i - j); // Adiciona a posição do padrão encontrado
      j = lps[j - 1]; // Atualiza j para o próximo caractere
    } else if (i < textLength && pattern[j] !== text[i]) { // Se os caracteres não correspondem
      if (j !== 0) { // Se j não é 0, atualiza j
        j = lps[j - 1]; // Atualiza j para o próximo caractere
      } else { // Se j é 0, atualiza i
        i = i + 1; // Atualiza i para o próximo caractere
      }
    }
  }

  return patternPositions; // Retorna as posições do padrão encontrado
}

// Converte as strings em arrays de caracteres
const text = "AAABAAABAAAC".split('');
const pattern = "AAC".split('');

console.log(`Texto:                         [${text}]`);
console.log(`Padrão:                        [${pattern}]`);
console.log(`Posições do padrão no texto:   [${KMPSearch(pattern, text)}]`);
