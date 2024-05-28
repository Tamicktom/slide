---
layout: statement
---

# Compressão de Cadeias

---
---

````md magic-move
```md
O gato preto pulou sobre o muro, o muro era alto e o gato preto se equilibrou no topo do muro.
```
```md
O gato preto pulou sobre o muro, o muro era alto e o gato preto se equilibrou no topo do muro.

Dicionário:
  1: O
  2: gato
  3: preto
  4: pulou
  5: sobre
  6: o
  7: muro
  8: era
  9: alto
  10: e
  11: se
  12: equilibrou
  13: no
  14: topo
  15: do
```
```md
O gato preto pulou sobre o muro, o muro era alto e o gato preto se equilibrou no topo do muro.

Dicionário:
  1: O            = 1
  2: gato         = 2
  3: preto        = 2
  4: pulou        = 1
  5: sobre        = 1
  6: o            = 3
  7: muro         = 3
  8: era          = 1
  9: alto         = 1
  10: e           = 1
  11: se          = 1
  12: equilibrou  = 1
  13: no          = 1
  14: topo        = 1
  15: do          = 1
```
```md
O gato preto pulou sobre o muro, o muro era alto e o gato preto se equilibrou no topo do muro.

Dicionário:
  1: O            = 1
  2: gato         = 2
  3: preto        = 2
  4: pulou        = 1
  5: sobre        = 1
  6: o            = 3
  7: muro         = 3
  8: era          = 1
  9: alto         = 1
  10: e           = 1
  11: se          = 1
  12: equilibrou  = 1
  13: no          = 1
  14: topo        = 1
  15: do          = 1

Palavras mais repetidas:
  1: preto = 2 -> 00
  2: gato  = 2 -> 01
  3: muro  = 3 -> 10
  4: o     = 3 -> 11
```
```md
O gato preto pulou sobre o muro, o muro era alto e o gato preto se equilibrou no topo do muro.

Dicionário:
  1: O            = 1
  2: gato         = 2
  3: preto        = 2
  4: pulou        = 1
  5: sobre        = 1
  6: o            = 3
  7: muro         = 3
  8: era          = 1
  9: alto         = 1
  10: e           = 1
  11: se          = 1
  12: equilibrou  = 1
  13: no          = 1
  14: topo        = 1
  15: do          = 1

Palavras mais repetidas:
  1: preto = 2 -> 00
  2: gato  = 2 -> 01
  3: muro  = 3 -> 10
  4: o     = 3 -> 11

Compressão:

O 01 00 pulou sobre 11 10, 11 10 era alto e 11 01 00 se equilibrou no topo do 10.
```
````

---
src: ./huffman/index.md
hide: false
---

---
src: ./lz77/index.md
hide: false
---