## Knuth-Morris-Pratt

<div class="w-full max-w-[600px] mx-auto">
<img
src="/images/kmp-paper.png"
/>
</div>

---
dragPos:
  kmp-1: 183,147,192,90
---

<Cadeia cadeia="A ARANHA SUBIU A PAREDE" />

<Cadeia v-drag="'kmp-1'" cadeia="ARANHA" />

<Counter />

<!--
O KMP trabalha com a ideia de que se o padrão não casar com o texto em uma determinada posição, ele pode pular algumas posições do texto, pois ele já sabe que essas posições não casam com o padrão.

O KMP encontra a performance desejada, ou seja, ele compara cada caractere do texto uma única vez.

Com o passar dos anos, algoritmos mais sofisticados permitem encontrar padrões testando APENAS alguns caracteres do texto.
-->

---
---

KMP

<div class="flex justify-center items-center w-full mx-auto">
<img
src="/images/kmp-clear.svg"
/>
</div>

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
```rust
pub struct KMP {
    pattern: Vec<char>,
    failure_function: Vec<usize>,
    pattern_length: usize
}
```
````

---
---

### Análise

- **Tempo de pré-processamento**: $O(m)$
- **Tempo de busca**: $O(n)$

onde $m$ é o tamanho do padrão e $n$ é o tamanho do texto.

Ou seja, o algoritmo de Knuth-Morris-Pratt tem complexidade $O(m + n)$.
