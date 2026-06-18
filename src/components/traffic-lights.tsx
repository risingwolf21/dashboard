const COLORS = ["var(--traffic-red)", "var(--traffic-yellow)", "var(--traffic-green)"]

export function TrafficLights({ size }: { size: number }) {
  return (
    <div className="flex shrink-0 items-center gap-[6px]">
      {COLORS.map((color) => (
        <span
          key={color}
          className="rounded-full"
          style={{ width: size, height: size, backgroundColor: color }}
        />
      ))}
    </div>
  )
}
