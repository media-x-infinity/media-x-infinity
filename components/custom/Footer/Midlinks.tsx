import { RippleButton } from "@/components/magicui/ripple-button";

import Link from "next/link";

const Midlinks = () => {
  return (
    <div className=" hidden xl:hidden justify-between mb-8 sm:mb-20 flex-col md:flex-row ">
      {/* Brand + Newsletter */}
      <div className="space-y-4">
        <Link
          href="mailto:contact@ankushtripathi.com?subject=Contacting%20from%20ATM%20website&body=Hi%20Ankush%2C%0A%0AI%E2%80%99d%20like%20to%20learn%20more%20about%20the%20services%20your%20agency%20offers.%0A%0ALet%E2%80%99s%20get%20in%20touch.%0A%0AThanks!
"
          className="flex"
        >
          <RippleButton className="border-0 min-w-[240px] mx-auto sm:mx-0">
            <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-gray-900 dark:text-gray-200 dark:from-white dark:to-slate-900/10 lg:text-sm">
              contact@ankushtripathi.com
            </span>
          </RippleButton>
        </Link>
        <Link href="tel:+919815951565" className="flex">
          <RippleButton className="border-0 min-w-[240px] mx-auto sm:mx-0">
            <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-gray-900 dark:text-gray-200 dark:from-white dark:to-slate-900/10 lg:text-sm">
              +91 9815 95 1565
            </span>
          </RippleButton>
        </Link>

        <p className="tracking-widest font-medium text-sm sm:text-[10px] mb-8 sm:mb-0 min-w-[220px] text-center mt-8 text-black dark:text-gray-400">
          MADE IN INDIA
        </p>
      </div>

      {/* Navigation */}
      <div>
        <ul className="mb-8 sm:mb-0 space-y-4 text-sm text-black dark:text-white tracking-wider uppercase text-center sm:text-left">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
          <li>
            <Link href="/new-quote">New Quote</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="mb-8 sm:mb-0 space-y-4 text-sm text-black dark:text-white tracking-wider uppercase text-center sm:text-left">
          <li>
            <Link href="/services/website-and-app-development">
              Website & App Development
            </Link>
          </li>
          <li>
            <Link href="/services/digital-marketing-and-seo">
              Digital Marketing & SEO
            </Link>
          </li>
          <li>
            <Link href="/services/photography-and-video-editing">
              Photograpy & Video Editing
            </Link>
          </li>
          <li>
            <Link href="/services/mvps-and-prototypes">
              Building MVPs & Prototypes
            </Link>
          </li>
          <li>
            <Link href="/services/ui-ux-and-graphics-designing">
              UI/UX & Graphic Designing
            </Link>
          </li>
          <li>
            <Link href="/services/branding-and-pr-management">
              Branding & PR Management
            </Link>
          </li>
        </ul>
      </div>

      <div className="max-w-min inline mx-auto sm:mx-0">
        <ul className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 space-y-4 text-sm text-black dark:text-white tracking-wider text-center sm:text-left mx-auto sm:mx-0">
          <li>
            <Link
              href="https://www.linkedin.com/in/ankush-tripathi-71a963171/"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap mx-auto sm:mx-0"
            >
              LINKEDIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Midlinks;
