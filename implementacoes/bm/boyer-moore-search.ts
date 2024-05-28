// Tipo que representa a Tabela de Más Correspondências
type BadMatchTable = Record<string, number>

// Função para construir a Tabela de Más Correspondências
// Função para construir a Tabela de Más Correspondências
export const buildBadMatchTable = (pattern: string[]): BadMatchTable => {
  const tableObj: BadMatchTable = {}
  const patternLength = pattern.length

  // Preencher a tabela com o valor padrão
  for (let i = 0; i < patternLength - 1; i++) {
    const char = pattern[i];
    tableObj[char] = i;
  }

  // Se o caractere final do padrão não estiver na tabela, adicione-o
  const lastChar = pattern[patternLength - 1]
  if (!tableObj[lastChar]) {
    tableObj[lastChar] = patternLength - 1;
  }

  return tableObj;
}

// Função que implementa o algoritmo Boyer-Moore
export const boyerMoore = (text: string[], pattern: string[]): {
  indexes: number[]
  comparisons: number
} => {
  // Construir a Tabela de Más Correspondências para o padrão
  const badMatchTable = buildBadMatchTable(pattern);
  const patternLastIndex = pattern.length - 1;
  const maxOffset = text.length - pattern.length;
  const indexes: number[] = [];
  let offset = 0;

  // Contador de comparações
  let comparisons = 0;

  // Percorrer o array de caracteres até o ponto onde o padrão ainda pode ser encontrado
  for (let i = 0; i <= maxOffset; i += offset) {
    offset = 0;

    // Percorrer o padrão de trás para frente
    for (let j = patternLastIndex; j >= 0; j--) {
      
    }
  }

  return {
    indexes,
    comparisons
  }
}

const text = 'A ARANHA ARRANHA A JARRA'.split('')
const pattern = 'ARANHA'.split('')

console.log(`
Texto: ${text.join('')}
Padrão: ${pattern.join('')}
Posição do padrão no texto: ${boyerMoore(text, pattern)}
Tabela de Más Correspondências: ${JSON.stringify(buildBadMatchTable(pattern))}
`)