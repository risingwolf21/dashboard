import { useTheme, type Theme } from "@/components/theme-provider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const segmentClass =
  "rounded-full px-3 py-1 text-[12.5px] font-medium text-muted-foreground transition-colors data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm hover:bg-transparent hover:text-foreground"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value as Theme)
      }}
      className="gap-0 rounded-full bg-card-2 p-[3px]"
    >
      <ToggleGroupItem value="light" className={segmentClass}>
        Light
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" className={segmentClass}>
        Dark
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
