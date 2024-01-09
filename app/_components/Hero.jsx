import React from "react";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-semibold sm:text-5xl">
            Welcome to
            <strong className="font-bold text-primary sm:block">
              {" "}
              JustChoose!{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            This is the best and the right place to make your purchase!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/home">
              <div className="flex items-center justify-center w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
                Get Started <IoArrowForwardCircleOutline className="ml-2" />
              </div>
            </Link>

            <a
              className="flex items-center justify-center w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More <CgMoreO className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
