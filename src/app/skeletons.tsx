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

export function YouTubeSkeleton() {
  return (
    <div className="mx-auto mt-16 w-[320px] h-[180px] sm:w-[400px] sm:h-[225px] lg:w-[560px] lg:h-[315px]">
      <div className="relative w-full h-full bg-gray-200 rounded-lg animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-300/50 rounded-b-lg">
          <div className="flex items-center justify-between p-2">
            <div className="h-8 w-8 bg-gray-300 rounded-full" />
            <div className="flex space-x-2">
              <div className="h-6 w-16 bg-gray-300 rounded" />
              <div className="h-6 w-16 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

export function ProgramSkeleton() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-96 relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%] animate-shimmer">
        <div className="text-white w-full h-96 absolute flex items-center justify-center">
          <div className="h-12 w-3/4 bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="w-full h-64 flex flex-col justify-center items-center px-10 sm:px-20 xl:px-64 gap-y-10 py-20">
        <div className="h-8 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%] animate-shimmer rounded"></div>
        <div className="h-16 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%] animate-shimmer rounded"></div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="container xl:w-[80%] mx-auto pt-14 px-6 lg:px-16 sm:pt-16">
      {/* First section */}
      <div className="flex flex-col md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
        <div className="flex-1 bg-gray-200 p-6 rounded-lg animate-pulse">
          <div className="h-10 w-1/3 bg-gray-300 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="bg-gray-200 rounded-lg relative grow h-[30rem] md:h-auto animate-pulse"></div>
      </div>

      {/* Second section */}
      <div className="mt-14 flex flex-col-reverse md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
        <div className="bg-gray-200 rounded-lg relative grow h-[30rem] md:h-auto animate-pulse"></div>
        <div className="flex-1 bg-gray-200 p-6 rounded-lg animate-pulse">
          <div className="h-10 w-1/3 bg-gray-300 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Third section */}
      <div className="mt-14 flex flex-col md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
        <div className="flex-1 bg-gray-200 p-6 rounded-lg animate-pulse">
          <div className="h-10 w-1/3 bg-gray-300 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="bg-gray-200 rounded-lg relative grow h-[30rem] md:h-auto animate-pulse"></div>
      </div>

      {/* Fourth section */}
      <div className="mt-14 pb-20 flex flex-col-reverse md:flex-row gap-x-4 xl:gap-x-20 gap-y-10">
        <div className="bg-gray-200 rounded-lg relative grow h-[30rem] md:h-auto animate-pulse"></div>
        <div className="flex-1 bg-gray-200 p-6 rounded-lg animate-pulse">
          <div className="h-10 w-1/3 bg-gray-300 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <main className="min-h-screen animate-pulse">
      <div className="container mx-auto px-4 py-8">
        <div className="h-10 w-64 bg-gray-200 rounded-md mx-auto mb-2"></div>
        <div className="h-4 w-96 bg-gray-200 rounded-md mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-300 pt-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-8 w-48 bg-gray-200 rounded-md"></div>
              <div className="h-4 w-full bg-gray-200 rounded-md"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded-md"></div>
            </div>

            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                  <div className="h-4 w-full bg-gray-200 rounded-md"></div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="h-6 w-32 bg-gray-200 rounded-md"></div>
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="h-4 w-full bg-gray-200 rounded-md"
                ></div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-square bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
