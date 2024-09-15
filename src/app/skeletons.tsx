export function HeroLoad() {
  return (
    <section className="h-[35rem] sm:h-[41rem] relative rounded-[2rem] overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-md flex flex-col items-center justify-center space-y-4 p-8">
        {/* Three centered lines */}
        <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
        <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
      </div>

      {/* Kept the circle in the bottom right for some visual interest */}
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    </section>
  );
}

const ScheduleSquare: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  return (
    <div
      {...props}
      className={`bg-gray-200 animate-pulse rounded ${props.className}`}
    />
  );
};

export function ScheduleSkeleton() {
  return (
    <main className="min-h-screen bg-altgrey px-10 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-fr">
          {Array.from({ length: 40 }).map((_, index) => (
            <ScheduleSquare
              key={index}
              className="w-full h-full aspect-square"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export function GallerySkeleton() {
  return (
    <main className="min-h-screen px-5 sm:px-12">
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="aspect-square">
              <div className="w-full h-full rounded-lg bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export function GallerySquare({ photoSpan }: { photoSpan: number }) {
  return (
    <div
      className="w-[250px] justify-self-center bg-gray-200 animate-pulse"
      style={{ gridRow: `span ${photoSpan}` }}
    >
      <div className="rounded-xl overflow-hidden group"></div>
    </div>
  );
}
