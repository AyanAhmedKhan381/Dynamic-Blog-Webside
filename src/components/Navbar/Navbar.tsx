"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import Wrapper from "../Wrapper";
import { navBarLinks } from "@/constants";
import { FaFeatherAlt } from "react-icons/fa";
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

interface Props {
  toggleNav: () => void; // Toggle function passed as a prop
}

const Navbar: React.FC<Props> = ({ toggleNav }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={`w-full h-24 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navBg ? "bg-blue-950 text-black" : "bg-black text-white"
      }`}
    >
      <Wrapper className="h-full flex items-center justify-between gap-5 lg:gap-10">
        <div className="flex items-center text-center gap-3.5">
          <div className="md:w-10 mt-1.5 md:h-10 w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center flex-col">
            <FaFeatherAlt />
          </div>
          <Logo
            className={`font-extrabold md:text-4xl ${navBg ? "text-white" : "text-white"}`}
          />
        </div>

        <div className="hidden md:inline-flex items-center text-white font-semibold gap-8 mr-8">
          {navBarLinks.map((item, i) => (
            <div className="relative group overflow-hidden hoverEffect font-semibold" key={i}>
              <Link
                href={item.link}
                className="text-lg uppercase font-semibold text-white"
              >
                <h1 className="group-hover:text-darkOrange hoverEffect">
                  {item.title}
                </h1>
              </Link>
              <span className="w-full h-[2px] bg-darkOrange absolute left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-transform hoverEffect" />
            </div>
          ))}
        </div>

       <div className="gap-7 items-center text-center space-x-7 hidden md:block mr-14 hoverEffect">
          <ClerkLoaded>
            <SignedIn >
              {/* Show UserButton when the user is signed in */}
             <UserButton afterSignOutUrl="/"  />
            </SignedIn>
            <SignedOut>
              {/* Show Sign In button when the user is not signed in */}
              <Link
                href="/sign-in" // Correctly set the route for the Sign In page
                className="text-base hover:text-darkOrange duration-300 cursor-pointer text-white uppercase font-semibold"
              >
                Sign In
              </Link>
            </SignedOut>
          </ClerkLoaded>

          <Link
            href="/studio" // Ensure this route exists in your app
            className="text-base hover:text-darkOrange duration-300 cursor-pointer text-white uppercase font-semibold"
          >
            Studio
          </Link>
        </div>

        <HiMenuAlt2
          onClick={toggleNav}
          className="inline-flex md:hidden text-white cursor-pointer text-3xl hover:text-darkOrange"
        />
      </Wrapper>
    </header>
  );
};

export default Navbar;
