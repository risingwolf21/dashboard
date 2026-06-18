import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { githubUser, projects } from "@/data/projects"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar className="size-10 shrink-0">
            <AvatarFallback
              className="font-mono text-[13px] font-semibold text-white"
              style={{ background: "var(--avatar-gradient)" }}
            >
              {githubUser.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-[14.5px] font-semibold leading-tight text-foreground">
              {githubUser.username}
            </span>
            <span className="truncate text-[12.5px] leading-tight text-muted-foreground">
              {projects.length} projects · all live
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <a href={githubUser.profileUrl} target="_blank" rel="noreferrer">
              <span className="hidden sm:inline">GitHub</span>
              <span aria-hidden>↗</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
