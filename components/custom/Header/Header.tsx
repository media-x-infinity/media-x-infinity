"use client";
import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Menu,
  Sparkles,
  ChevronRight,
  Search,
  Moon,
  Sun,
  ShoppingBag,
  Boxes,
  BookOpen,
  Headphones,
} from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";

import Mobiletoggle from "@/components/custom/Mobiletoggle/Mobiletoggle";

import Image from "next/image";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

// Simple theme toggle without providers. Adds/removes the `dark` class on <html>.
function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavigationMenuLink asChild>
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  </NavigationMenuLink>
);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-[1px] border-gray-600 bg-background/100 backdrop-blur supports-[backdrop-filter]:bg-background/99">
      <div className=" mx-auto flex h-16 items-center justify-between gap-3 px-4 sm:px-8 py-10">
        {/* Left: Logo + Mobile Menu */}
        <div className="sm:min-w-[300px] flex items-center gap-2">
          <Link href="/" className="group inline-flex items-center gap-4">
            <div className="relative grid h-9 w-9 place-items-center ">
              <Image
                src="/favicon.svg"
                alt="Company Logo"
                width={200}
                height={80}
                className="flex dark:hidden"
              />
              <Image
                src="/favicon-red-2.svg"
                alt="Company Logo"
                width={200}
                height={80}
                className="hidden dark:flex"
              />
            </div>
            <div className="flex flex-col column items-baseline gap-1">
              <span className="text-[12px] sm:text-[16px] font-semibold  md:block tracking-widest">
                MEDIA X INFINITY
              </span>
              <span className="text-[6px] sm:text-[9px] font-semibold  md:block tracking-widest">
                GSTIN: 24ACEFM8886E1ZW
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden xl:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink href="/" className="tracking-widest">
                  HOME
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/portfolio" className="tracking-widest">
                  PORTFOLIO
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="tracking-widest">
                  SERVICES
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4">
                  <div className="grid w-[500px] grid-cols-2 gap-3">
                    <ProductCard
                      title="Website & App Development"
                      description="We build fast, scalable, user-focused websites & apps."
                      href="/services/website-and-app-development"
                      outerstyle="border-l"
                    />
                    <ProductCard
                      title="Digital Marketing & SEO"
                      description="We craft campaigns boosting brand reach and business ROI."
                      href="/services/digital-marketing-and-seo"
                      outerstyle="border-l"
                    />

                    <ProductCard
                      title="Building MVPs & Prototypes"
                      description="Building MVPs and prototypes to test ideas and launch faster."
                      href="/services/mvps-and-prototypes"
                      outerstyle="border-l"
                    />
                    <ProductCard
                      title="UI/UX & Graphic Designing"
                      description="Seamless UI/UX and graphics that enhance brand presence."
                      href="/services/ui-ux-and-graphics-designing"
                      outerstyle="border-l"
                    />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink href="/contact-us" className="tracking-widest">
                  CONTACT
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Actions */}
        <div className="xl:min-w-[300px] flex justify-end items-center gap-2">
          <div className=" items-center gap-2 pr-4 cursor-pointer hidden">
            <AnimatedThemeToggler className="cursor-pointer" />
          </div>

          <div className="block xl:hidden ">
            <Mobiletoggle />
          </div>

          <Link href="/new-quote">
            <RainbowButton className=" py-2 px-4 tracking-wider text-md text-sm sm:text-md">
              + QUOTE
            </RainbowButton>
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProductCard({
  title,
  description,
  href,
  outerstyle,
}: {
  title: string;
  description: string;
  href: string;
  outerstyle: string;
}) {
  return (
    <Link href={href} className="">
      <div
        className={`${outerstyle} group rounded-md  p-4 transition-all hover:shadow-sm w-[240px]`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-sm font-medium leading-none tracking-tight">
              {title}
            </h4>
            <p className="mt-2 text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MobileItem({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground"
    >
      <span className="flex items-center gap-2 text-sm">
        {icon}
        {children}
      </span>
      <ChevronRight className="h-4 w-4 opacity-60" />
    </Link>
  );
}
