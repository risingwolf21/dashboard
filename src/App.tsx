import { useState } from "react"

import { FeaturedHero } from "@/components/featured-hero"
import { ProjectGrid } from "@/components/project-grid"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { defaultFeaturedId, projects } from "@/data/projects"

function App() {
  const [featuredId, setFeaturedId] = useState(defaultFeaturedId)

  const featured =
    projects.find((project) => project.id === featuredId) ?? projects[0]
  const rest = projects.filter((project) => project.id !== featured.id)

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto flex max-w-[1180px] flex-col gap-[30px] px-4 py-8 sm:px-8">
          <FeaturedHero project={featured} />
          <ProjectGrid projects={rest} onSelect={setFeaturedId} />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
