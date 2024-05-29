## Knuth-Morris-Pratt

<div class="w-full max-w-[600px] mx-auto">
<img
src="/images/kmp-paper.png"
/>
</div>

---
dragPos:
  kmp-1: 213,17,190,56
---

<Cadeia cadeia="A ARANHARANHARRANHA" />

<Cadeia v-drag="'kmp-1'" cadeia="ARANHA" />

<Counter />

<!--
O KMP trabalha com a ideia de que se o padrão não casar com o texto em uma determinada posição, ele pode pular algumas posições do texto, pois ele já sabe que essas posições não casam com o padrão.

O KMP encontra a performance desejada, ou seja, ele compara cada caractere do texto uma única vez.

Com o passar dos anos, algoritmos mais sofisticados permitem encontrar padrões testando APENAS alguns caracteres do texto.
-->

---
dragPos:
  KMP-BANANA: 460,170,121,54
---

KMP

<div class="flex justify-center items-center w-full mx-auto">
<img
src="/images/kmp-clear.svg"
/>
</div>

<Cadeia v-click cadeia="AAABAAC" />

<Cadeia v-click v-drag="'KMP-BANANA'" cadeia="AAC" />

<Cadeia v-click cadeia="010" />

<!--
O KMP parte da ideia de um diagrama de estados, onde cada estado representa um prefixo do padrão.

Cada estado representa uma etapa do reconhecimento do padrão.

Se estou fazendo o reconhecimento, e ainda não tem nenhum caracter testado, estou no estado 0.

Se o primeiro caracter do padrão casar com o primeiro caracter do texto, eu passo para o estado 1.

Chegando no estado 6, Encontrei o padrão em uma determinada posição do texto.

Então devo voltar 6 posições.

O que acontece na maioria das vezes, é que não encontramos o padrão em uma determinada posição do texto e a transição de estado vai falhar.

Se eu estiver no estado 0 e não vier um A, eu permaneço no estado 0.

Agora se eu estiver no estado 1 e vier outra letra, a forma mais simples é pensar em voltar ao estado 0.
Mas o KMP é mais inteligente que isso.

Vamos suport que encontramos dois A seguidos:

Eu encontro o primeiro A, vou para o estado 1. 

Em seguida encontro o segundo A, volto para o 0 ou mantenho no 1?

Esse segundo A, pode ser o inicio de um novo padrão.

Knuth-Morris-Pratt resolve isso com a tabela de falhas.
-->

---
---

### KMP - Transições de Falhas

<div class="flex justify-center items-center w-full mx-auto">
<img
src="/images/kmp-1.svg"
/>
</div>

<!--
Cada estado representa uma etapa do reconhecimento do padrão.

Se eu estiver no estado 0 e não vier um A, eu permaneço no estado 0.

Transição baseada em eventos.
-->

---
---

### KMP - Contrução da tabela de falha - 2º exemplo

<div class="flex justify-center items-center w-full mx-auto">
<img
src="/images/kmp-2.svg"
/>
</div>

<!--
A análise é relativamente simples, temos que pensar em repetição de prefixos.

AR é prefixo? Sim, prefixo de tamanho 2.

O diagrama ajuda visualmente a entender a tabela de falhas.
-->

---
---

KMP - Exemplo de busca

<img
src="/images/kmp-3.svg"
/>

<!--
Os caracteres do padrão são usados apenas para construir a tabela de falhas.

A busca é feita apenas com o texto.
-->

---
---

KMP - Exemplo de busca

<img
src="/images/kmp-4.svg"
/>

---
---

### Implementação

````md magic-move
```typescript
// primeiro passo: construir a tabela de falhas
function computeLongestPrefixSuffixArray(pattern: string[]): number[] {...}
```
```typescript
function computeLongestPrefixSuffixArray(pattern: string[]): number[] {
  const patternLength: number = pattern.length;
  const lps: number[] = new Array(patternLength).fill(0);
  let length = 0; // Comprimento do maior prefixo que é também sufixo
  let i = 1;

  // Calcula o array de LPS para o padrão
  while (i < patternLength) {...}

  return lps; // Retorna o array LPS calculado
}
```
```typescript
function computeLongestPrefixSuffixArray(pattern: string[]): number[] {
  const patternLength: number = pattern.length;
  const lps: number[] = new Array(patternLength).fill(0);
  let length = 0; // Comprimento do maior prefixo que é também sufixo
  let i = 1;

  // Calcula o array de LPS para o padrão
  while (i < patternLength) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps; // Retorna o array LPS calculado
}
```
```typescript
function computeLongestPrefixSuffixArray(pattern: string[]): number[] {...}

function KMPSearch(pattern: string[], text: string[]): void {
  const patternLength = pattern.length;
  const textLength = text.length;

  const lps = computeLongestPrefixSuffixArray(pattern);
  let j = 0; // Índice para pattern[]
  let i = 0; // Índice para text[]
}
```
```typescript
function computeLongestPrefixSuffixArray(pattern: string[]): number[] {...}

function KMPSearch(pattern: string[], text: string[]): void {
  const patternLength = pattern.length;
  const textLength = text.length;

  const lps = computeLongestPrefixSuffixArray(pattern);
  let j = 0; // Índice para pattern[]
  let i = 0; // Índice para text[]

  while ((textLength - i) >= (patternLength - j)) {
    if (pattern[j] === text[i]) { // Se os caracteres correspondem
      j++;
      i++;
    }
    if (j === patternLength) { // Se o padrão foi encontrado
      console.log(`Padrão encontrado em: ${i - j}`);
      j = lps[j - 1]; // Atualiza j para o próximo caractere
    } else if (i < textLength && pattern[j] !== text[i]) { // Se os caracteres não correspondem
      if (j !== 0) { // Se j não é 0, atualiza j
        j = lps[j - 1]; // Atualiza j para o próximo caractere
      } else { // Se j é 0, atualiza i
        i = i + 1; // Atualiza i para o próximo caractere
      }
    }
  }
}
```
````

---
---

### Análise

- **Tempo de pré-processamento**: $O(m)$
- **Tempo de busca**: $O(m+n)$

onde $m$ é o tamanho do padrão e $n$ é o tamanho do texto.

Ou seja, o algoritmo de Knuth-Morris-Pratt tem complexidade $O(m + n)$.
