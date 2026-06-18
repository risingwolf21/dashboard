import { BrowserChrome } from "@/components/browser-chrome"
import { LiveBadge } from "@/components/live-badge"
import { ProjectPreview } from "@/components/project-preview"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Project } from "@/data/projects"

export function FeaturedHero({ project }: { project: Project }) {
  return (
    <Card className="gap-0 overflow-hidden rounded-[14px] p-0">
      <div className="overflow-hidden rounded-t-[14px] border border-border shadow-[0_20px_32px_-22px_rgba(0,0,0,0.45)]">
        <BrowserChrome project={project} variant="hero" />
        <div className="relative aspect-[24/9] overflow-hidden">
          <ProjectPreview variant="hero" project={project} />
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <h2 className="font-mono text-2xl font-bold text-foreground">
              {project.name}
            </h2>
            <LiveBadge />
          </div>
          <p className="text-sm text-muted-foreground">{project.tagline}</p>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <a href={project.url} target="_blank" rel="noreferrer">
            Open {project.domain} <span aria-hidden>↗</span>
          </a>
        </Button>
      </div>
    </Card>
  )
}
