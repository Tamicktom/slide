---
dragPos:
  bm-1: 56,162,192,90
---

## Boyer-Moore

<Cadeia cadeia="TRES TIGRES TRISTES" />

<Cadeia v-drag="'bm-1'" cadeia="TRISTE" />

<Counter />

---
---

BM - Deslocamento por caráter ruim

<img
src="/images/bm-1.svg"
/>

---
---

BM - Deslocamento por sufixo bom

<img
src="/images/bm-2.svg"
/>

---
---

### Implementação - Boyer-Moore

````md magic-move
```rust
let
```
````

---
---

### Análise - Boyer-Moore

- Melhor caso: $O(n/m)$
- Pior caso: $O(nm)$
