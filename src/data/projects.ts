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
    id: "leaf",
    name: "leaf",
    tagline: "A clean markdown note-taking PWA built with React, Vite, Supabase, and shadcn/ui.",
    domain: "risingwolf21.github.io/leaf/",
    url: "https://risingwolf21.github.io/leaf/",
    pBg: "#faf8ff",
    pBand: "#ede9fe",
    pBlock: "#ddd6fe",
    pDot: "#7c3aed",
  },
  {
    id: "relay",
    name: "relay",
    tagline: "A clean ticketing system PWA built with React, Vite, Supabase, and shadcn/ui.",
    domain: "risingwolf21.github.io/relay/",
    url: "https://risingwolf21.github.io/relay/",
    pBg: "#fffdf5",
    pBand: "#fef3c7",
    pBlock: "#fde68a",
    pDot: "#f59e0b",
  },
  {
    id: "tempel_des_schreckens",
    name: "tempel_des_schreckens",
    tagline: "The game of the temple of terror",
    domain: "risingwolf21.github.io/tempel_des_schreckens/",
    url: "https://risingwolf21.github.io/tempel_des_schreckens/",
    pBg: "#fff7f8",
    pBand: "#ffe4e6",
    pBlock: "#fecdd3",
    pDot: "#f43f5e",
  },
  {
    id: "hanabi",
    name: "hanabi",
    tagline: "Hanabi — Multiplayer Web App",
    domain: "risingwolf21.github.io/hanabi/",
    url: "https://risingwolf21.github.io/hanabi/",
    pBg: "#f6fbff",
    pBand: "#e0f2fe",
    pBlock: "#bae6fd",
    pDot: "#0ea5e9",
  },
  {
    id: "roundnet_karlsruhe_app",
    name: "Roundnet Karlsruhe App",
    tagline: "Multi-tenant Progressive Web Application for managing Roundnet community events, drinks, and games",
    domain: "roundnet-karlsruhe.web.app",
    url: "https://roundnet-karlsruhe.web.app/",
    pBg: "#f4fcf9",
    pBand: "#d2f9e9",
    pBlock: "#a2edd1",
    pDot: "#048b6a",
  },
  {
    id: "munich_roundnet_app",
    name: "Munich Roundnet App",
    tagline: "Multi-tenant Progressive Web Application for managing Roundnet community events, drinks, and games",
    domain: "munich-roundnet.web.app",
    url: "https://munich-roundnet.web.app/",
    pBg: "#fff8f6",
    pBand: "#ffe4de",
    pBlock: "#ffc6bb",
    pDot: "#6d0505",
  },
  {
    id: "divvy",
    name: "divvy",
    tagline: "Money management app built with React, Vite, Supabase, and shadcn/ui.",
    domain: "risingwolf21.github.io/divvy/",
    url: "https://risingwolf21.github.io/divvy/",
    pBg: "#fffaf5",
    pBand: "#ffedd5",
    pBlock: "#fed7aa",
    pDot: "#fb923c",
  },
]

export const defaultFeaturedId = "leaf"

export const githubUser = {
  username: "risingwolf21",
  initials: "rw",
  profileUrl: "https://github.com/risingwolf21",
}
