"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <h2
          className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
          SOLVE DOUBTS WITH{" "}
          <div
            className="relative mx-auto inline-block w-full [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div
              className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)] w-full text-center">
              <span className="block">COE CHATBOT.</span>
            </div>
            <div
              className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 w-full text-center">
              <span className="block">COE CHATBOT.</span>
            </div>
          </div>
        </h2>
        
        {/* Button */}
        <Link href={'/chat'}>
        <button
          className="relative z-20 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300 text-lg md:text-xl lg:text-2xl">
          Chat
        </button>
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
