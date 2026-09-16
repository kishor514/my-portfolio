export default function Marquee({ text = 'Explore my services' }) {
  const items = Array.from({ length: 8 }).fill(text)

  return (
    <div className="overflow-hidden border-y border-white/20 bg-panel py-4 sm:py-8 hover:[&_.marquee-track]:[animation-play-state:paused]">
      <div className="marquee-track" style={{ animationDuration: '120s' }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 whitespace-nowrap text-[5rem] font-bold text-white/10 sm:text-[8rem] md:text-[10rem] lg:text-[12rem] cursor-default transition-colors hover:text-white/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
