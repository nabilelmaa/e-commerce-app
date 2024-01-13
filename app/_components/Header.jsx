"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-2xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="md:flex md:items-center md:gap-12">
              <Image src="/logo-jc.png" alt="logo" width={45} height={45} />
            </div>
          </Link>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-primary"
                    href="/"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-primary"
                    href="/"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart">
              <div className="text-primary px-5 py-2.5 text-[20px]">
                <FaCartShopping />
              </div>
            </Link>

            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-rose-700"
                href="/"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                  href="/"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="md:hidden relative">
              <button
                onClick={toggleMobileMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition-transform hover:text-gray-600/75 transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {isMobileMenuOpen && (
                <div className="absolute top-10 right-0 w-18 bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 transform scale-y-100">
                  <ul className="text-gray-500 p-4">
                    <li>
                      <a className="hover:text-primary" href="/">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary" href="/">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary" href="/">
                        History
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary" href="/">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary" href="/">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-primary" href="/">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
