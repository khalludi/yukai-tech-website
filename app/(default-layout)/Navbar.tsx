"use client";

import "./navbar.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { CSSTransition } from "react-transition-group";
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const nodeRef = useRef(null);

  return (
    <nav className="px-20 pt-10 flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              href="/"
              className="text-xl font-medium"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className="text-4xl font-bold">
                yukai.tech
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className={"block sm:hidden"}>
        <div className="z-30">
          <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
        </div>
        <CSSTransition
          in={isMenuOpen}
          nodeRef={nodeRef}
          timeout={2000}
          classNames="alert"
          unmountOnExit
        >
          <div
            ref={nodeRef}
            className={`absolute z-20 left-1/2 -translate-x-1/2 bg-slate-100 w-full mt-4`}
          >
            <div className="flex flex-col">
              <Link
                href="/about"
                className="text-xl font-medium hover:underline hover:bg-slate-50 px-20 py-10"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-xl font-medium hover:underline hover:bg-slate-50 px-20 py-10"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="text-xl font-medium bg-black text-white hover:underline hover:bg-white hover:text-black px-20 py-10 border-2 border-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </CSSTransition>
      </div>

      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() + " !text-xl font-medium"
                }
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/blog"
              className="text-xl font-medium"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() + " !text-xl font-medium"
                }
              >
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  navigationMenuTriggerStyle() +
                  " !text-xl font-medium p-2 !bg-black hover:!bg-white hover:border-black" +
                  " focus:!bg-white focus:border-black border-2 border-white  text-white rounded-lg"
                }
              >
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
