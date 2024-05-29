---
dragPos:
  fb-1: 248,51,201,56
---

## Força bruta

<!-- <img border="rounded" class="w-full h-full" src="/images/força-bruta-1.svg" alt=""> -->

<Cadeia cadeia="TRES TIGRES TRISTES" />

<Cadeia v-drag="'fb-1'" cadeia="TRISTE" />

<Counter />

---
---

### Implementação

````md magic-move
```typescript
function bruteForceSearch(text: string, pattern: string): [number[], number] {...}
```
```typescript
function bruteForceSearch(text: string, pattern: string): [number[], number] {
  const matchPositions: number[] = []; // Array para armazenar as posições onde o padrão é encontrado
  let comparisonCount = 0; // Contador de comparações
  const textLength = text.length;
  const patternLength = pattern.length;
}
```
```typescript
function bruteForceSearch(text: string, pattern: string): [number[], number] {
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
}
```
```typescript
function bruteForceSearch(text: string, pattern: string): [number[], number] {
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
  for (let start = 0; start <= textLength - patternLength; start++) {...}

  return [matchPositions, comparisonCount];
}
```
```typescript
function bruteForceSearch(text: string, pattern: string): [number[], number] {
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
}
```
```typescript
function bruteForceSearch(text: string, pattern: string): [number[], number] {
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
```
````

---
---

### Análise

$O((n-m+1)m)$

- $n$ é o tamanho do texto
- $m$ é o tamanho do padrão

O algoritmo percorre todas as posições do texto $(n-m+1)$ e, para cada posição, compara o padrão com o texto (até $m$ caracteres).

exemplo:

- texto: "AAAAAAAAAA" -> tamanho: 10
- padrão: "AAAA" -> tamanho: 4

$O((10 - 4 + 1) * 4)$

$O(7 * 4)$

$O(28)$

<Cadeia v-drag="'fb-4'" cadeia="AAAAAAAAAA" class="absolute bottom-0 left-0" />
<Cadeia v-drag="'fb-5'" cadeia="AAAA" class="absolute bottom-0 right-0" />

<!--
O força bruta tem O notation de O((n-m+1)m), onde n é o tamanho do texto e m é o tamanho do padrão.

O algoritmo percorre todas as posições do texto (n-m+1) e, para cada posição, compara o padrão com o texto (ate m caracteres).

Se o padrão for encontrado no início do texto, o algoritmo terá complexidade O(nm), pois percorrerá todo o texto para encontrar o padrão.

No pior caso, o algoritmo terá complexidade O(nm), mas, em média, terá complexidade O((n-m+1)m/2).
-->
