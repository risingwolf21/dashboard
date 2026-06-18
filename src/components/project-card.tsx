import { BrowserChrome } from "@/components/browser-chrome"
import { ProjectPreview } from "@/components/project-preview"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Project } from "@/data/projects"

type ProjectCardProps = {
  project: Project
  onSelect: (id: string) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <Card
      onClick={() => onSelect(project.id)}
      className="cursor-pointer gap-0 overflow-hidden rounded-xl p-0 shadow-none transition-all duration-[180ms] hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_16px_28px_-14px_rgba(0,0,0,0.3)]"
    >
      <BrowserChrome project={project} variant="card" />
      <div className="relative aspect-[16/10] overflow-hidden">
        <ProjectPreview variant="card" project={project} />
      </div>
      <div className="flex items-start justify-between gap-2 px-[15px] pt-[13px] pb-[15px]">
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="truncate font-mono text-sm font-semibold text-foreground">
            {project.name}
          </span>
          <span className="line-clamp-1 text-[12.5px] text-muted-foreground">
            {project.tagline}
          </span>
        </div>
        <Button
          asChild
          variant="outline"
          size="icon"
          className="size-[30px] shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.domain}`}
          >
            <span aria-hidden>↗</span>
          </a>
        </Button>
      </div>
    </Card>
  )
}
