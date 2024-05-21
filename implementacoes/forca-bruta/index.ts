import { bruteForceSearch } from "./brute-force-search";

export function bruteForceSearchExample(text:string, pattern:string): void {
  const [match_positions, comparisons] = bruteForceSearch(text, pattern);

  console.log(`Texto: ${text}`);
  console.log(`Padrão: ${pattern}`);
  console.log(`Posições de ocorrência: [${match_positions}]`);
  console.log(`Comparações: ${comparisons}`);
}

bruteForceSearchExample("ABRAKADABRA", "ABRA");