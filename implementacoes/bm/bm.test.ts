import { expect, describe, it } from "bun:test";

import { boyerMoore, buildBadMatchTable } from "./boyer-moore-search";

describe("Boyer-Moore Search", () => {
  it("should find the pattern 'ARANHA' in the text", () => {
    const text = "A ARANHA ARRANHA A JARRA".split("");
    const pattern = "ARANHA".split("");

    const result = boyerMoore(text, pattern);
    expect(result).toEqual({
      indexes: [2],
      comparisons: 7,
    });
  });

  it("should not find the pattern 'ARANHA' in the text", () => {
    const text = "A ARANH ARRANHA A JARRA".split("");
    const pattern = "ARANHA".split("");

    const result = boyerMoore(text, pattern);
    expect(result).toEqual({
      indexes: [],
      comparisons: 11,
    });
  });
});

describe("Build Bad Match Table", () => {
  it("should build the bad match table for the pattern 'ARANHA'", () => {
    const pattern = "ARANHA".split("");
    const result = buildBadMatchTable(pattern);
    expect(result).toEqual({
      A: 2,
      H: 4,
      N: 3,
      R: 1,
    });
  });
});