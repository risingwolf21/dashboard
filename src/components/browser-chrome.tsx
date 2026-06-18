import { TrafficLights } from "@/components/traffic-lights"
import { cn } from "@/lib/utils"
import type { Project } from "@/data/projects"

type BrowserChromeProps = {
  project: Project
  variant: "hero" | "card"
}

export function BrowserChrome({ project, variant }: BrowserChromeProps) {
  const isHero = variant === "hero"

  return (
    <div
      className={cn(
        "flex shrink-0 items-center bg-card-2",
        isHero ? "h-[38px] gap-2.5 px-3.5" : "h-[30px] gap-1.5 px-2.5"
      )}
    >
      <TrafficLights size={isHero ? 11 : 8} />
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "flex min-w-0 flex-1 items-center gap-1.5 truncate rounded-full border border-border bg-background font-mono text-muted-foreground transition-colors hover:text-foreground",
          isHero ? "h-6 px-3 text-[12.5px]" : "h-[18px] px-2 text-[10.5px]"
        )}
      >
        <span
          className="shrink-0 rounded-full"
          style={{
            width: isHero ? 6 : 5,
            height: isHero ? 6 : 5,
            background: "var(--live-green)",
          }}
        />
        <span className="truncate">{isHero ? project.url : project.domain}</span>
      </a>
    </div>
  )
}
