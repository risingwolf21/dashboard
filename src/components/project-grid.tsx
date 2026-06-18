import { ProjectCard } from "@/components/project-card"
import type { Project } from "@/data/projects"

type ProjectGridProps = {
  projects: Project[]
  onSelect: (id: string) => void
}

export function ProjectGrid({ projects, onSelect }: ProjectGridProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between">
        <h3 className="text-[15px] font-semibold text-foreground">
          More live sites
        </h3>
        <span className="font-mono text-xs text-muted-foreground">
          {projects.length} more
        </span>
      </div>
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  )
}
