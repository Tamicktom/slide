---
---

## Boyer-Moore

<div class="w-full max-w-[600px] mx-auto">
<img
src="/images/bm-paper.png"
/>
</div>

<!--
Publicado em 1977 por Robert Boyer e J Strother Moore.

O algoritmo é baseado em duas heurísticas:

- Deslocamento por caráter ruim.
- Deslocamento por sufixo bom.

O deslocamento final será o maior dos dois.

O algoritmo é mais eficiente que o KMP na prática.
-->

---
dragPos:
  bm-1: 364,23,192,55
---

<Cadeia cadeia="JACARE TIGRES TRISTE" />

<Cadeia v-drag="'bm-1'" cadeia="TRISTE" />

<Counter />

<!--
Comparando com os outros algoritmos, o BM começa a busca pelo final do padrão.

Se o último caractere do padrão não casar com o texto, o BM pode pular várias posições do texto, pois ele já sabe que essas posições não casam com o padrão.

Os dois calculos são completamente independentes. BM sempre escolhe o maior deslocamento.
-->

---
dragPos:
  bm-2: 427,120,192,60
---

BM - Deslocamento por caráter ruim

- Caso 1: O caráter ruim (n) aparece em outra posição do padrão.

<Cadeia cadeia="A ARANHA" />

<Cadeia v-drag="'bm-2'" cadeia="ARANHA" />

<!--
O deslocamento por caráter ruim é o deslocamento que o BM faz quando o último caractere do padrão não casar com o texto.

Ou seja, ele trabalha com a falha.

O caráter T do texto que não foi encontrado no padrão, deve aparecer em outra posição do padrão ou não adianta fazer comparações que o BM já sabe que não vai casar.

Se esse carater não estiver no padrão, o BM pula o padrão inteiro.

Se esse carater estiver no padrão, o BM pula o padrão até o carater T, dentro do padrão.

|||||||||||||||||||||||||||

O caractere ruim vai ser NO TEXTO, não no padrão, no exemplo é o "N".

No sufixo bom, o caractere ruim é o "A", pois o sufixo bom é NO PADRÃO.

||||||

Esse N aparece em alguma outra posição do padrão? Sim, na posição 3.

Então, o BM pula o padrão até o caractere N, dentro do padrão. No caso, deslocamento de 2 posições.
-->

---
dragPos:
  bm-algo-2: 298,121,192,57
---

BM - Deslocamento por caráter ruim

- Caso 2: O caráter ruim (n) não aparece em nehnuma outra posição do padrão.

<Cadeia cadeia="A ÁGUA PINGA" />

<Cadeia v-drag="'bm-algo-2'" cadeia="ARANHA" />

<!--
"A" com "A" vai casar, mas ao comprar "U" com "H", vão ser diferentes.
O caractere ruim "U" não aparece em nenhuma outra posição do padrão.
Então, o BM pula o padrão inteiro.

Não há nenhuma lógica de comparação, o BM já sabe que não vai casar, pois "U", que é o caractere ruim, não aparece em nenhuma outra posição do padrão.

O deslocamento do padrão vai ser o suficiente para pular o "U";
-->

---
dragPos:
  bm-tabela: 733,195,64,128
---

Cálculo do deslocamento por caráter ruim

<Cadeia cadeia="ARANHA" />

<div v-drag="'bm-tabela'" class="flex flex-row items-center justify-center">
<div class="flex flex-col items-center justify-center">
<Position string="A" :hideCount="true" />
<Position string="H" :hideCount="true" />
<Position string="N" :hideCount="true" />
<Position string="R" :hideCount="true" />
</div>
<div class="flex flex-col items-center justify-center">
<Position string="2" :hideCount="true" />
<Position string="4" :hideCount="true" />
<Position string="3" :hideCount="true" />
<Position string="1" :hideCount="true" />
</div>
</div>

<!--
Observar a ocorrência mais à direita de cada caráter. 

Exceto o último e inserir o caráter e sua posição em uma tabela hash.

Caracteres que não estiverem na tabela hash, valerão -1.

BM sempre vai colocar a posição mais a direita na tabela hash.

Assim, no exemplo de "A AGUA PINGA", na primeira comparação, o BM vai pular 5 posições.

Pois, 4 - (-1) = 5.

Quando um simbolo for buscado na tabela hash e não for encontrado, o BM pula o padrão inteiro.
-->

---
---

BM - Deslocamento por sufixo bom

<img
src="/images/bm-2.svg"
/>

<!--
O deslocamento por sufixo bom é o deslocamento que o BM faz quando o último caractere do padrão casar com o texto.
-->

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

<iframe src="http://whocouldthat.be/visualizing-string-matching/" class="w-full h-[512px]"></iframe>

---
---

### Análise - Boyer-Moore

- Melhor caso: $O(n/m)$
- Pior caso: $O(nm)$
