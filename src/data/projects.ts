export type Project = {
  id: string
  name: string
  tagline: string
  domain: string
  url: string
  // preview tint palette
  pBg: string
  pBand: string
  pBlock: string
  pDot: string
}

// Swappable data source: replace this static array with a real GitHub
// fetch (e.g. repos with a homepage URL) without changing any consumer.
export const projects: Project[] = [
  {
    id: "aurora",
    name: "aurora",
    tagline: "Local-first markdown notes that sync the moment you reconnect.",
    domain: "aurora-notes.app",
    url: "https://aurora-notes.app",
    pBg: "#faf8ff",
    pBand: "#ede9fe",
    pBlock: "#ddd6fe",
    pDot: "#7c3aed",
  },
  {
    id: "pixel-forge",
    name: "pixel-forge",
    tagline: "A tiny pixel-art editor that exports clean sprite sheets.",
    domain: "pixelforge.dev",
    url: "https://pixelforge.dev",
    pBg: "#fffdf5",
    pBand: "#fef3c7",
    pBlock: "#fde68a",
    pDot: "#f59e0b",
  },
  {
    id: "tempo",
    name: "tempo",
    tagline: "A calm pomodoro timer with weekly focus stats.",
    domain: "usetempo.app",
    url: "https://usetempo.app",
    pBg: "#fff7f8",
    pBand: "#ffe4e6",
    pBlock: "#fecdd3",
    pDot: "#f43f5e",
  },
  {
    id: "nimbus",
    name: "nimbus",
    tagline: "Hourly weather wrapped in beautiful gradient skies.",
    domain: "nimbus-weather.app",
    url: "https://nimbus-weather.app",
    pBg: "#f6fbff",
    pBand: "#e0f2fe",
    pBlock: "#bae6fd",
    pDot: "#0ea5e9",
  },
  {
    id: "lumen",
    name: "lumen",
    tagline: "See every subscription and what you actually spend.",
    domain: "lumen.cash",
    url: "https://lumen.cash",
    pBg: "#f5fffb",
    pBand: "#d1fae5",
    pBlock: "#a7f3d0",
    pDot: "#10b981",
  },
  {
    id: "drift",
    name: "drift",
    tagline: "Real-time collaborative whiteboard, no login required.",
    domain: "drift.so",
    url: "https://drift.so",
    pBg: "#f5feff",
    pBand: "#cffafe",
    pBlock: "#a5f3fc",
    pDot: "#06b6d4",
  },
  {
    id: "echo",
    name: "echo",
    tagline: "Drop an audio file, get a clean, searchable transcript.",
    domain: "echo-transcribe.app",
    url: "https://echo-transcribe.app",
    pBg: "#fffaf5",
    pBand: "#ffedd5",
    pBlock: "#fed7aa",
    pDot: "#fb923c",
  },
]

export const defaultFeaturedId = "aurora"

export const githubUser = {
  username: "risingwolf21",
  initials: "rw",
  profileUrl: "https://github.com/risingwolf21",
}
