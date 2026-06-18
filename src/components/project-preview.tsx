import type { Project } from "@/data/projects"

type ProjectPreviewProps = {
  variant: "hero" | "card"
  project: Project
}

export function ProjectPreview({ variant, project }: ProjectPreviewProps) {
  const isHero = variant === "hero"

  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: project.pBg }}
    >
      <div
        className="flex shrink-0 items-center gap-[6%] px-[7%]"
        style={{ height: isHero ? "40%" : "36%", background: project.pBand }}
      >
        <div
          className="aspect-square h-[34%] shrink-0 rounded-[4px]"
          style={{ background: project.pDot }}
        />
        <div
          className="h-[16%] w-[22%] shrink-0 rounded-full"
          style={{ background: "rgba(15,15,20,.13)" }}
        />
        <div
          className="h-[16%] w-[13%] shrink-0 rounded-full"
          style={{ background: "rgba(15,15,20,.09)" }}
        />
      </div>

      {isHero ? (
        <div className="flex flex-1 items-stretch gap-[4%] p-[7%]">
          <div
            className="flex-1 rounded-[6px]"
            style={{ background: project.pBlock, opacity: 0.8 }}
          />
          <div
            className="flex-1 rounded-[6px]"
            style={{ background: project.pBlock, opacity: 0.6 }}
          />
          <div
            className="flex-1 rounded-[6px]"
            style={{ background: project.pBlock, opacity: 0.4 }}
          />
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-[8%] p-[7%]">
          <div
            className="flex-[2] rounded-[6px]"
            style={{ background: project.pBlock }}
          />
          <div className="flex flex-1 gap-[5%]">
            <div
              className="flex-1 rounded-[4px]"
              style={{ background: project.pBlock, opacity: 0.8 }}
            />
            <div
              className="flex-1 rounded-[4px]"
              style={{ background: project.pBlock, opacity: 0.6 }}
            />
            <div
              className="flex-1 rounded-[4px]"
              style={{ background: project.pBlock, opacity: 0.4 }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
