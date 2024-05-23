---
dragPos:
  kmp-1: -588,162,192,90
---

## Knuth-Morris-Pratt

<Cadeia cadeia="A ARANHA SUBIU A PAREDE" />

<Cadeia v-drag="'kmp-1'" cadeia="ARANHA" />

<Counter />

---
---

KMP - Contrução da tabela de falha

<img
v-click
src="/images/kmp-1.svg"
/>

---
---

KMP - Contrução da tabela de falha

<img
src="/images/kmp-2.svg"
/>

---
---

KMP - Exemplo de busca

<img
src="/images/kmp-3.svg"
/>

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
