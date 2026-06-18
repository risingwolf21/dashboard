import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function LiveBadge() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          variant="outline"
          className="gap-1.5 border-transparent font-sans"
          style={{
            background: "color-mix(in srgb, var(--live-green) 15%, transparent)",
            color: "var(--live-green-text)",
          }}
        >
          <span
            className="size-1.5 rounded-full"
            style={{ background: "var(--live-green)" }}
          />
          live
        </Badge>
      </TooltipTrigger>
      <TooltipContent>Deployed and responding</TooltipContent>
    </Tooltip>
  )
}
