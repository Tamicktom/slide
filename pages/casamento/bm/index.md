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
  bm-1: 362,21,192,55
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
  bm-2: 425,122,192,60
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
  bm-algo-2: 458,124,192,57
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
dragPos:
  bm-sufixo-bom: 323,339,288,55
---

BM - Deslocamento por sufixo bom

- Caso 1: Sufixo (BA) se repete com caráter anterior diferente.

<Cadeia cadeia="BACBDACBADBADBACCBABADAB" />

<Cadeia v-drag="'bm-sufixo-bom'" cadeia="CBADBADBA" />

<!--
CBADBAD[BA]

Comparando "A", vai ser positivo. Comparando "B", vai ser positivo. Quando chegar no "D", vai ser negativo.

O sufixo bom é o sufixo que se repete no padrão, com o caractere anterior diferente.

No caso, vai ser o "CBA", que é diferente do "DBA".

O deslocamento efetivo é de 6 posições.
-->

---
dragPos:
  bm-sufixo-bom-2: 199,263,288,53
---

BM - Deslocamento por sufixo bom

- Caso 2: Sufixo não se repete com caráter anterior diferente.

<Cadeia cadeia="BACBDACBADBADBACCBABADAB" />

<Cadeia v-drag="'bm-sufixo-bom-2'" cadeia="CABDBADBA" />

<!--
Após fazer a comparação, procuro para trás o padrão.

Não vou encontrar o sufixo bom, pois ele não se repete com o caractere anterior diferente.

O deslocamento vai ser o tamanho do padrão.

A proxima comparação vai ser lá na posição 17.
-->

---
dragPos:
  bm-sufixo-bom-3: 105,128,288,49
---

BM - Deslocamento por sufixo bom

- Caso 3: Parte do sufixo se repete no início do padrão.

<Cadeia cadeia="BACBDADBADBADBACCBABADAB" />

<Cadeia v-drag="'bm-sufixo-bom-3'" cadeia="BABDBADBA" />

<!--
BABDB[ADBA]

"ADBA" não aparecer para trás.

"DBA" não aparece para trás.

"BA" aparece para trás.

Então eu preciso deslocar o padrão de forma que o "BA" do começo do padrão case com o "BA" do sufixo bom.
-->

---
dragPos:
  bm-sufixo-bom-3: 56,224,288,80
---

BM - Deslocamento por sufixo bom

- Cálculo do deslocamento

<Cadeia cadeia="BAADBDCBA" />

<Cadeia v-drag="'bm-sufixo-bom-3'" cadeia="777777761" />

<!--
Essa tabela é para calcular o deslocamento. Por exemplo, se a falha ocorrer na posição 8, o deslocamento vai ser 1.

Se a falha ocorrer na posição 7, o deslocamento vai ser 6.

Nenhum sufixo foi encontrado.

Sufixo "A" válido. Sufixo se repete 6 posições atrás.

Sufixo "BA" válido. Sufixo se repete 7 posições atrás.

Sufixo "CBA" válido. Sufixo não se repete, mas o fragmento "BA" existe 7 posições atrás.

Sufixo "DCBA" válido. Sufixo não se repete, mas o fragmento "BA" existe 7 posições atrás.
-->

---
---

### Exemplo

padrão:

<Cadeia cadeia="GCAGAGAG" />

Tabela hash:

<div class="flex flex-row items-center justify-center">
<div class="flex flex-col items-center justify-center">
<Position string="A" :hideCount="true" />
<Position string="C" :hideCount="true" />
<Position string="G" :hideCount="true" />
</div>
<div class="flex flex-col items-center justify-center">
<Position string="6" :hideCount="true" />
<Position string="1" :hideCount="true" />
<Position string="5" :hideCount="true" />
</div>
</div>

Vetor para cálculo dos deslocamentos por sufixo bom:

<Cadeia cadeia="GCAGAGAG" />
<Cadeia cadeia="77727471" />

<!--
O fato dos números da tabela de deslocamento ficarem "fora de ordem" é natural.
-->

---
dragPos:
  bm-exemplo-3: 761,177,64,96
  bm-exemplo-1: 264,122,256,80
  bm-exemplo-2: 266,34,256,80
---

### Exemplo

<div v-drag="'bm-exemplo-3'" class="flex flex-row items-center justify-center">
<div class="flex flex-col items-center justify-center">
<Position string="A" :hideCount="true" />
<Position string="C" :hideCount="true" />
<Position string="G" :hideCount="true" />
</div>
<div class="flex flex-col items-center justify-center">
<Position string="6" :hideCount="true" />
<Position string="1" :hideCount="true" />
<Position string="5" :hideCount="true" />
</div>
</div>

<Cadeia v-drag="'bm-exemplo-1'" cadeia="77727471" />

<Cadeia cadeia="GCATCGCAGAGAGTATACAGTACG" />
<Cadeia v-drag="'bm-exemplo-2'" cadeia="GCAGAGAG" />

<!--
DCR = Deslocamento por caráter ruim

DSB = Deslocamento por sufixo bom

1. ==============================

Comparando posição 7 do padrão, com 7 do texto.

Caráter ruim A. Deslocamento: 7 - DCR['A'] = 7 - 6 = 1.

Sufixo bom: - Deslocamento: DSB[7] = 1

Melhor deslocamento: 1

Sempre será calculado os dois. É comum que os valores sejam iguais.

2. ==============================

Comparando posição 7 do padrão, com 8 do texto

Caráter ruim: C. Deslocamento: 5 - DCR["C"] = 5 - 1 = 4

Sufixo bom: - Deslocamento: DSB[5] = 4

Melhor deslocamento: 4

3. ==============================

Padrão encontrado na posção 12 do texto.

Após encontrar o padrão, se quiser continuar buscando, o BM vai pular 1 posição.
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
