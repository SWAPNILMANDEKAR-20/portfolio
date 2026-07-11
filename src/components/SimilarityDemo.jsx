import { useMemo, useState } from "react";

// Lightweight client-side similarity heuristic (token overlap, Jaccard-weighted)
// Stands in for the embedding-based semantic similarity Swapnil builds at IEEE CIS —
// no API calls, just enough signal to make the two points move meaningfully.
const STOPWORDS = new Set([
  "the","a","an","is","are","was","were","of","to","in","on","and","or","for",
  "with","as","by","at","it","this","that","be","been","has","have","had",
]);

function tokenize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
}

function similarity(a, b) {
  const ta = tokenize(a);
  const tb = tokenize(b);
  if (ta.length === 0 || tb.length === 0) return 0;
  const setA = new Set(ta);
  const setB = new Set(tb);
  const intersection = [...setA].filter((w) => setB.has(w)).length;
  const union = new Set([...setA, ...setB]).size;
  const jaccard = union === 0 ? 0 : intersection / union;
  return Math.min(1, Math.pow(jaccard, 0.55));
}

export default function SimilarityDemo() {
  const [a, setA] = useState("The mitochondria is the powerhouse of the cell.");
  const [b, setB] = useState("Mitochondria generate energy for the cell.");

  const score = useMemo(() => similarity(a, b), [a, b]);

  const W = 320;
  const H = 150;
  const maxDist = 220;
  const dist = (1 - score) * maxDist;
  const cx = W / 2;
  const cy = H / 2;
  const p1x = cx - dist / 2;
  const p2x = cx + dist / 2;
  const jitterY = 12 * Math.sin(score * 6);

  const verdict =
    score > 0.65 ? "closely aligned" : score > 0.3 ? "partially related" : "weakly related";

  return (
    <div className="rounded-2xl border border-line bg-surface p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[11px] text-rust">live demo</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <label className="block">
          <span className="font-mono text-[11px] text-mist">reference_answer</span>
          <textarea
            value={a}
            onChange={(e) => setA(e.target.value)}
            rows={2}
            className="focus-ring mt-1 w-full resize-none rounded-lg border border-line bg-cream/50 px-3 py-2 text-sm text-ink placeholder:text-mist/60 outline-none"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] text-mist">student_answer</span>
          <textarea
            value={b}
            onChange={(e) => setB(e.target.value)}
            rows={2}
            className="focus-ring mt-1 w-full resize-none rounded-lg border border-line bg-cream/50 px-3 py-2 text-sm text-ink placeholder:text-mist/60 outline-none"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full sm:w-[58%] h-[130px]"
          role="img"
          aria-label={`Similarity plot showing the two answers are ${verdict}`}
        >
          <line
            x1={p1x}
            y1={cy}
            x2={p2x}
            y2={cy + jitterY}
            stroke="#C2551C"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{ transition: "all 500ms cubic-bezier(0.4,0,0.2,1)" }}
          />
          <g style={{ transition: "transform 500ms cubic-bezier(0.4,0,0.2,1)" }}
             transform={`translate(${p1x}, ${cy})`}>
            <circle r="6" fill="#2F5D50" />
            <text y="-14" textAnchor="middle" fill="#7A7263" fontSize="10" fontFamily="JetBrains Mono">ref</text>
          </g>
          <g style={{ transition: "transform 500ms cubic-bezier(0.4,0,0.2,1)" }}
             transform={`translate(${p2x}, ${cy + jitterY})`}>
            <circle r="6" fill="#C2551C" />
            <text y="-14" textAnchor="middle" fill="#7A7263" fontSize="10" fontFamily="JetBrains Mono">student</text>
          </g>
        </svg>

        <div className="w-full sm:w-[42%] rounded-xl border border-line bg-cream/50 px-4 py-3">
          <div className="font-mono text-[11px] text-mist uppercase tracking-widest">score</div>
          <div className="font-display text-3xl font-semibold text-rust">
            {score.toFixed(2)}
          </div>
          <div className="mt-1 text-xs text-mist">{verdict}</div>
        </div>
      </div>
      {/* demo note removed per request */}
    </div>
  );
}
