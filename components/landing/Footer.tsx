import Link from "next/link";

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link href="#" prefetch={false}>
            About Us
          </Link>
          <Link href="#" prefetch={false}>
            Our Team
          </Link>
          <Link href="#" prefetch={false}>
            Careers
          </Link>
          <Link href="#" prefetch={false}>
            News
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Products</h3>
          <Link href="#" prefetch={false}>
            Polling
          </Link>
          <Link href="#" prefetch={false}>
            Surveys
          </Link>
          <Link href="#" prefetch={false}>
            Analytics
          </Link>
          <Link href="#" prefetch={false}>
            Integrations
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link href="#" prefetch={false}>
            Blog
          </Link>
          <Link href="#" prefetch={false}>
            Documentation
          </Link>
          <Link href="#" prefetch={false}>
            Help Center
          </Link>
          <Link href="#" prefetch={false}>
            API
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false}>
            Cookie Policy
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <Link href="#" prefetch={false}>
            Support
          </Link>
          <Link href="#" prefetch={false}>
            Sales
          </Link>
          <Link href="#" prefetch={false}>
            Press
          </Link>
          <Link href="#" prefetch={false}>
            Partnerships
          </Link>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">AlxPolly</span>
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AlxPolly. All rights reserved.</p>
      </div>
    </footer>
  );
}
