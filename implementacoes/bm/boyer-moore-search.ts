// Tipo que representa a Tabela de Más Correspondências
type BadMatchTable = Record<string, number>

// Função para construir a Tabela de Más Correspondências
const buildBadMatchTable = (str: string): BadMatchTable => {
  const tableObj: BadMatchTable = {}
  const strLength = str.length

  // Preenche a tabela com as posições das más correspondências
  for (let i = 0; i < strLength - 1; i++) {
    tableObj[str[i]] = strLength - 1 - i
  }

  // Adiciona a última letra do padrão à tabela, se não estiver presente
  if (tableObj[str[strLength - 1]] === undefined) {
    tableObj[str[strLength - 1]] = strLength
  }

  return tableObj
}

// Função que implementa o algoritmo Boyer-Moore
const boyerMoore = (str: string, pattern: string) => {
  // Construir a Tabela de Más Correspondências para o padrão
  const badMatchTable = buildBadMatchTable(pattern)
  let offset = 0
  const patternLastIndex = pattern.length - 1
  const maxOffset = str.length - pattern.length

  // Percorrer a string de entrada até o ponto onde o padrão ainda pode ser encontrado
  while (offset <= maxOffset) {
    let scanIndex = 0

    // Verificar se há correspondência do padrão na posição atual
    while (pattern[scanIndex] === str[scanIndex + offset]) {
      if (scanIndex === patternLastIndex) {
        // Padrão encontrado na posição atual
        return offset
      }
      scanIndex++
    }

    // Obtém o caractere de má correspondência
    const badMatchString = str[offset + patternLastIndex]

    // Ajusta o offset baseado na Tabela de Más Correspondências
    if (badMatchTable[badMatchString]) {
      offset += badMatchTable[badMatchString]
    } else {
      offset++
    }
  }

  // Retorna -1 se o padrão não for encontrado
  return -1
}

// Testes da função boyerMoore
console.log(boyerMoore('A ARANHA ARRANHA A JARRA', 'ARANHA')) // Esperado: 2
console.log(boyerMoore('AAIOOOAADDZXYCAADAABAABA', 'AADA')) // Esperado: 13

// Testes da função buildBadMatchTable
console.log(buildBadMatchTable('ARANHA')) // Esperado: { T: 3, E: 2, S: 1 }
console.log(buildBadMatchTable('AADA')) // Esperado: { A: 1, D: 2 }
