"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";

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

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">AlxPolly</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="#features"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild variant="outline">
            <Link href="/auth">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigation links for AlxPolly
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 p-4">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  prefetch={false}
                  onClick={() => setIsSheetOpen(false)}
                >
                  <MountainIcon className="h-6 w-6" />
                  <span className="text-lg font-semibold">AlxPolly</span>
                </Link>
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    href="#features"
                    className="hover:underline underline-offset-4"
                    prefetch={false}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="#pricing"
                    className="hover:underline underline-offset-4"
                    prefetch={false}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="hover:underline underline-offset-4"
                    prefetch={false}
                    onClick={() => setIsSheetOpen(false)}
                  >
                    About
                  </Link>
                </nav>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="outline">
                    <Link href="/auth">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
