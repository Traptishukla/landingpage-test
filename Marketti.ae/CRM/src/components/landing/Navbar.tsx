"use client";

import { ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useIsIPadPro } from '@/hooks/useIsIPadPro';
import Marketti from '../../assets/Marketti.png';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import DemoScheduler from './DemoScheduler';

const NavLink = ({
  href,
  children,
  id,
}: {
  href: string;
  children: React.ReactNode;
  id: string;
}) => (
  <Link
    href={href}
    id={id}
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const isIPadPro = useIsIPadPro();

  const navLinksContent = (
    <>
      <NavLink id="whyMarketti" href="/#why-marketti">Why Marketti.ae?</NavLink>
      <NavLink id="Coremodule" href="/#modules">Core Modules</NavLink>
      <Link
        id="Feature"
        href="/features"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Features
      </Link>
      <NavLink id="compare" href="/#compare">Compare</NavLink>
      <NavLink id="industries" href="/#industries">Industries</NavLink>
      <NavLink id="testimonials" href="/#testimonials">Testimonials</NavLink>
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/60 ${
        isIPadPro ? 'px-2' : 'px-4'
      }`}
    >
      <div
        className={`container mx-auto flex h-16 items-center justify-between px-4 ${
          isIPadPro ? 'gap-2' : 'gap-4'
        }`}
      >
        <a href="#home" className="text-xl font-bold text-primary">
          <Image src={Marketti} width={150} height={150} id='Marketti nav logo' alt='Logo'/>
        </a>

        <nav className="hidden lg:flex items-center space-x-6">
          {navLinksContent}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="hidden lg:block">
          <Button asChild id="book demo">
            <a
              href="https://marketti.inventurs.com/demo-setup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Demo
            </a>
          </Button>
        </div>
        <div className="lg:hidden">

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="hover:bg-blue-300">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <SheetTitle>Menu</SheetTitle> {/* ✅ moved inside */}
              <a
                id="Marketti"
                href="#home"
                className="text-xl font-bold text-primary"
              >
                Marketti
              </a>

              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinksContent}
              </nav>

        <div className="flex items-center space-x-2">
          
                <Button asChild id="book demo">
                  <a
                    href="https://marketti.inventurs.com/demo-setup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
