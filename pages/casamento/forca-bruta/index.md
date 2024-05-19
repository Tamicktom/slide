---
dragPos:
  square: 242,127,278,119
---

## Força bruta

<!-- <img border="rounded" class="w-full h-full" src="/images/força-bruta-1.svg" alt=""> -->

<Cadeia cadeia="TRES TIGRES TRISTES" />

<Cadeia v-drag="'square'" cadeia="TRISTE" />

<Counter />

---
dragPos:
  square: 402,196,352,90
---

### Implementação

````md magic-move
```rust
fn brute_force_search(text: &str, pattern: &str) -> Vec<usize> {...}
```
```rust
fn brute_force_search(text: &str, pattern: &str) -> Vec<usize> {
    let mut match_positions = Vec::new(); // Vetor para armazenar as posições onde o padrão é encontrado
    let text_length = text.len();
    let pattern_length = pattern.len();
}
```
```rust
fn brute_force_search(text: &str, pattern: &str) -> Vec<usize> {
    let mut match_positions = Vec::new(); // Vetor para armazenar as posições onde o padrão é encontrado
    let text_length = text.len();
    let pattern_length = pattern.len();

    // Se o padrão é vazio ou maior que o texto, retorna o vetor vazio
    if pattern_length == 0 || text_length < pattern_length {
        return match_positions;
    }
}
```
```rust
fn brute_force_search(text: &str, pattern: &str) -> Vec<usize> {
    let mut match_positions = Vec::new(); // Vetor para armazenar as posições onde o padrão é encontrado
    let text_length = text.len();
    let pattern_length = pattern.len();

    // Se o padrão é vazio ou maior que o texto, retorna o vetor vazio
    if pattern_length == 0 || text_length < pattern_length {
        return match_positions;
    }

    // Converte as strings em vetores de caracteres para acesso por índice
    let text_chars: Vec<char> = text.chars().collect();
    let pattern_chars: Vec<char> = pattern.chars().collect();
}
```
```rust
fn brute_force_search(text: &str, pattern: &str) -> Vec<usize> {
    let mut match_positions = Vec::new(); // Vetor para armazenar as posições onde o padrão é encontrado
    let text_length = text.len();
    let pattern_length = pattern.len();

    // Se o padrão é vazio ou maior que o texto, retorna o vetor vazio
    if pattern_length == 0 || text_length < pattern_length {
        return match_positions;
    }

    // Converte as strings em vetores de caracteres para acesso por índice
    let text_chars: Vec<char> = text.chars().collect();
    let pattern_chars: Vec<char> = pattern.chars().collect();

    // Loop para verificar cada possível posição de início no texto
    for start in 0..=text_length - pattern_length {...}
}
```
```rust
for start in 0..=text_length - pattern_length {
    let mut match_index = 0;
    
    // Loop para verificar cada caractere do padrão
    while match_index < pattern_length && text_chars[start + match_index] == pattern_chars[match_index] {
        match_index += 1;
    }

    // Se todos os caracteres do padrão corresponderem, armazena a posição inicial
    if match_index == pattern_length {
        match_positions.push(start);
    }
}
```
```rust
fn brute_force_search(text: &str, pattern: &str) -> Vec<usize> {
    let mut match_positions = Vec::new(); // Vetor para armazenar as posições onde o padrão é encontrado
    let text_length = text.len();
    let pattern_length = pattern.len();

    // Se o padrão é vazio ou maior que o texto, retorna o vetor vazio
    if pattern_length == 0 || text_length < pattern_length {
        return match_positions;
    }

    // Converte as strings em vetores de caracteres para acesso por índice
    let text_chars: Vec<char> = text.chars().collect();
    let pattern_chars: Vec<char> = pattern.chars().collect();

    // Loop para verificar cada possível posição de início no texto
    for start in 0..=text_length - pattern_length {...}

    match_positions
}
```
````

<Cadeia v-click=[6] v-drag="'square'" cadeia="ABRAKADABRA" class="absolute bottom-0 left-0" />
<Cadeia v-click=[6] v-drag="'square'" cadeia="ABRA" class="absolute bottom-0 right-0" />

<!--
usize - representa número sem especificar quantidade de bytes.

Em Rust, podemos ter números do tipo inteiro sem sinal (unsigned) de 0 a 2^n - 1, onde n é a quantidade de bits.

u8 - 0 a 255
u16 - 0 a 65.535
u32 - 0 a 4.294.967.295
u64 - 0 a 18.446.744.073.709.551.615
u128 - 0 a 340.282.366.920.938.463.463.374.607.431.768.211.455
-->

---
dragPos:
  square: 532,275,181,90
---

### Análise

$O((n-m+1)m)$

- $n$ é o tamanho do texto
- $m$ é o tamanho do padrão

O algoritmo percorre todas as posições do texto $(n-m+1)$ e, para cada posição, compara o padrão com o texto (até $m$ caracteres).

<Cadeia v-drag="'square'" cadeia="ABRAKADABRA" class="absolute bottom-0 left-0" />
<Cadeia v-drag="'square'" cadeia="ABRA" class="absolute bottom-0 right-0" />

<!--
O força bruta tem O notation de O((n-m+1)m), onde n é o tamanho do texto e m é o tamanho do padrão.

O algoritmo percorre todas as posições do texto (n-m+1) e, para cada posição, compara o padrão com o texto (ate m caracteres).

Se o padrão for encontrado no início do texto, o algoritmo terá complexidade O(nm), pois percorrerá todo o texto para encontrar o padrão.

No pior caso, o algoritmo terá complexidade O(nm), mas, em média, terá complexidade O((n-m+1)m/2).
-->
