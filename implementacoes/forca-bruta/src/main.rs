fn brute_force_search(text: &str, pattern: &str) -> (Vec<usize>, usize) {
    let mut match_positions = Vec::new(); // Vetor para armazenar as posições onde o padrão é encontrado
    let mut comparison_count = 0; // Contador de comparações
    let text_length = text.len();
    let pattern_length = pattern.len();

    // Se o padrão é vazio ou maior que o texto, retorna o vetor vazio e o contador
    if pattern_length == 0 || text_length < pattern_length {
        return (match_positions, comparison_count);
    }

    // Converte as strings em vetores de caracteres para acesso por índice
    let text_chars: Vec<char> = text.chars().collect();
    let pattern_chars: Vec<char> = pattern.chars().collect();

    // Loop para verificar cada possível posição de início no texto
    for start in 0..=text_length - pattern_length {
        let mut match_index = 0;

        // Loop para verificar cada caractere do padrão
        while match_index < pattern_length {
            comparison_count += 1; // Incrementa o contador de comparações
            if text_chars[start + match_index] != pattern_chars[match_index] {
                break;
            }
            match_index += 1;
        }

        // Se todos os caracteres do padrão corresponderem, armazena a posição inicial
        if match_index == pattern_length {
            match_positions.push(start);
        }
    }

    (match_positions, comparison_count)
}

fn main() {
    let text = "ABRAKADABRA";
    let pattern = "ABRA";
    let (result, comparison_count) = brute_force_search(text, pattern);

    println!("Pattern found at positions: {:?}", result);
    println!("Total comparisons: {}", comparison_count);
}