function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function FilePlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" x2="12" y1="18" y2="12" />
      <line x1="9" x2="15" y1="15" y2="15" />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why Choose AlxPolly?
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our platform is designed to be intuitive, powerful, and accessible to everyone. Here's what makes us stand out.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
          <div className="grid gap-1 text-center">
            <div className="flex justify-center items-center mb-4">
                <FilePlusIcon className="h-10 w-10 text-gray-800 dark:text-gray-200" />
            </div>
            <h3 className="text-lg font-bold">Easy Poll Creation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Create polls in seconds with our simple and intuitive form. No complicated setup required.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="flex justify-center items-center mb-4">
                <BarChartIcon className="h-10 w-10 text-gray-800 dark:text-gray-200" />
            </div>
            <h3 className="text-lg font-bold">Real-time Results</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Watch the results come in live. Our charts update in real-time for instant feedback.
            </p>
          </div>
          <div className="grid gap-1 text-center">
            <div className="flex justify-center items-center mb-4">
                <ShareIcon className="h-10 w-10 text-gray-800 dark:text-gray-200" />
            </div>
            <h3 className="text-lg font-bold">Share and Embed</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Easily share your polls with a unique link or embed them directly on your website or blog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
