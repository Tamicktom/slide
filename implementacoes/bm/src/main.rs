use std::collections::HashMap;

// Função principal que implementa o algoritmo de Boyer-Moore
fn boyer_moore(text: &str, pattern: &str) -> Vec<usize> {
    if pattern.is_empty() {
        return vec![];
    }

    let text: Vec<char> = text.chars().collect();
    let pattern: Vec<char> = pattern.chars().collect();

    let text_len = text.len();
    let pattern_len = pattern.len();

    let mut bad_char_table = HashMap::new();
    for (i, &ch) in pattern.iter().enumerate() {
        bad_char_table.insert(ch, i);
    }

    fn calculate_suffix_table(pattern: &[char]) -> Vec<isize> {
        let m = pattern.len();
        let mut suffix = vec![-1; m];
        let mut f = 0;
        let mut g = m - 1;

        suffix[m - 1] = m as isize;

        for i in (0..m - 1).rev() {
            if i > g && suffix[i + m - 1 - f] < (i - g).try_into().unwrap() {
                suffix[i] = suffix[i + m - 1 - f];
            } else {
                if i < g {
                    g = i;
                }
                f = i;
                while g > 0 && pattern[g] == pattern[g + m - 1 - f] {
                    g -= 1;
                }
                suffix[i] = (f - g) as isize;
            }
        }

        suffix
    }

    let suffix = calculate_suffix_table(&pattern);

    fn calculate_good_suffix_table(pattern: &[char], suffix: &[isize]) -> Vec<usize> {
        let m = pattern.len();
        let mut good_suffix = vec![m; m];

        for i in 0..m {
            if suffix[i] == i as isize + 1 {
                for j in 0..m - i - 1 {
                    if good_suffix[j] == m {
                        good_suffix[j] = m - i - 1;
                    }
                }
            }
        }

        for i in 0..m - 1 {
            good_suffix[m - 1 - suffix[i] as usize] = m - 1 - i;
        }

        good_suffix
    }

    let good_suffix = calculate_good_suffix_table(&pattern, &suffix);

    let mut occurrences = Vec::new();
    let mut s = 0;

    while s <= text_len - pattern_len {
        let mut j = (pattern_len - 1) as isize;

        while j >= 0 && pattern[j as usize] == text[s + j as usize] {
            j -= 1;
        }

        if j < 0 {
            occurrences.push(s);
            s += if s + pattern_len < text_len {
                pattern_len - bad_char_table.get(&text[s + pattern_len]).map_or(0, |&last_occ| last_occ)
            } else {
                1
            };
        } else {
            let bad_char_shift = bad_char_table
                .get(&text[s + j as usize])
                .map_or(j + 1, |&last_occ| j - last_occ as isize);
            let good_suffix_shift = good_suffix[j as usize];
            s += std::cmp::max(bad_char_shift as usize, good_suffix_shift);
        }
    }

    occurrences
}

// Função principal para teste
fn main() {
    let text = "abracadabra";
    let pattern = "abra";
    let result = boyer_moore(text, pattern);

    for pos in result {
        println!("Pattern found at position: {}", pos);
    }
}
