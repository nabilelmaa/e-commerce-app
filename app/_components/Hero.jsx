import React from "react";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import Modal from "../_components/Modal";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-black text-3xl font-semibold sm:text-5xl">
            Welcome to
            <strong className="font-bold text-primary sm:block">
              {" "}
              JustChoose!{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-black">
            This is the best and the right place to make your purchase!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <div className="inline-flex items-center justify-center rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring active:bg-indigo-700 sm:w-auto">
                Get Started <IoArrowForwardCircleOutline className="ml-2" />
              </div>
            </Link>

            <Link href="/about">
              <div className="inline-flex items-center justify-center rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-indigo-800 focus:outline-none focus:ring active:text-indigo-700 sm:w-auto">
                Learn More <CgMoreO className="ml-2" />
              </div>
            </Link>
            {/* <Modal /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
