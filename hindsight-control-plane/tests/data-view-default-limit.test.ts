import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const dataViewPath = fileURLToPath(new URL("../src/components/data-view.tsx", import.meta.url));

describe("DataView graph fetch limit", () => {
  it("loads up to 10,000 memories by default", () => {
    const source = readFileSync(dataViewPath, "utf8");

    expect(source).toContain("useState(10_000)");
    expect(source).not.toContain("useState(1000)");
  });
});
