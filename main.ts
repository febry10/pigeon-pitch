// Pigeon Pitch, One Line — make.fun entry.
// Writes exactly one pitch line to /output/entry.txt and exits 0.
// Deterministic: no clock, no randomness, no I/O besides the write.
// The joke lands at the end: a delivery guarantee only a pigeon can offer.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Forget drones — fund PeckEx: my flock knows every rooftop, dodges every hawk, and works for crumbs, so we deliver in 10 minutes or poop on your competitor's car for free.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
try { chmodSync(outDir, 0o755); } catch {}
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
try { chmodSync(outFile, 0o644); } catch {}
process.exit(0);
