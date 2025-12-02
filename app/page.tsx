"use client";
import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

import Profile from "../public/assets/images/profile.png";
import { useState } from "react";

import Stars from "./components/stars";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup && (
        <div className="z-20 pt-12 pb-6 md:pb-12 px-10 border border-white/10 border-b-0 fixed bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white/5 to-white/10 flex flex-col justify-center items-center gap-4 rounded-t-4xl backdrop-blur-lg overflow-hidden text-center w-11/12 md:w-auto">
          <button
            className="px-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 absolute right-3 top-3 hover:bg-white/10 cursor-pointer duration-200"
            onClick={() => setShowPopup(false)}
          >
            <i className="bi bi-x text-xl"></i>
          </button>
          <p className="text-xl">Check out my latest Spotify playlist!</p>
          <button
            className="px-4 py-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 w-fit flex justify-center items-center gap-4 hover:bg-white/10 cursor-pointer duration-200"
            onClick={() =>
              open(
                "https://open.spotify.com/playlist/0P2kcsfDGmy9gE230zhX5C?si=5dd0a0826f104c43",
                "_blank"
              )
            }
          >
            <i className="bi bi-spotify scale-110 text-xl"></i>
            <p className="uppercase text-2xl">{'"The Hills" on Spotify'}</p>
            <i className="bi bi-box-arrow-up-right"></i>
          </button>
        </div>
      )}
      <div className="flex flex-col text-xs overflow-hidden">
        <div className="bg-gradient-to-b from-black via-blue-950 to-orange-800">
          <Stars count={120} />
          <div className="p-6 mx-auto max-w-3xl min-h-screen flex justify-center items-center flex-col gap-6">
            <Image
              src={Profile}
              alt="Profile image"
              className="w-30 rounded-full border border-white/10"
            ></Image>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-7xl text-center">TYLER</h1>
              <p className="text-xl">created by @tylrvx</p>
            </div>
            <div className="mt-16 flex flex-wrap gap-2 justify-center items-center text-center">
              <button
                className="px-4 py-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 w-fit flex justify-center items-center gap-4 hover:bg-white/10 cursor-pointer duration-200"
                onClick={() => open("https://instagram.com/tylrvx", "_blank")}
              >
                <i className="bi bi-instagram scale-110 text-xl"></i>
                <p className="uppercase text-2xl">Instagram</p>
              </button>
              <button
                className="px-4 py-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 w-fit flex justify-center items-center gap-4 hover:bg-white/10 cursor-pointer duration-200"
                onClick={() => open("https://tiktok.com/@tylrvx", "_blank")}
              >
                <i className="bi bi-tiktok scale-110 text-xl"></i>
                <p className="uppercase text-2xl">TikTok</p>
              </button>
              <button
                className="px-4 py-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 w-fit flex justify-center items-center gap-4 hover:bg-white/10 cursor-pointer duration-200"
                onClick={() => open("https://youtube.com/@tylrvx", "_blank")}
              >
                <i className="bi bi-youtube scale-110 text-xl"></i>
                <p className="uppercase text-2xl">YouTube</p>
              </button>
              <button
                className="px-4 py-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 w-fit flex justify-center items-center gap-4 hover:bg-white/10 cursor-pointer duration-200"
                onClick={() => open("https://facebook.com/tylrvx", "_blank")}
              >
                <i className="bi bi-facebook scale-110 text-xl"></i>
                <p className="uppercase text-2xl">Facebook</p>
              </button>
              <button
                className="px-4 py-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 w-fit flex justify-center items-center gap-4 hover:bg-white/10 cursor-pointer duration-200"
                onClick={() => open("https://x.com/tylrvx", "_blank")}
              >
                <i className="bi bi-twitter-x scale-110 text-xl"></i>
                <p className="uppercase text-2xl">X</p>
              </button>
              <button
                className="px-4 py-2 border border-white/10 rounded-full bg-gradient-to-b from-white/5 to-white/10 w-fit flex justify-center items-center gap-4 hover:bg-white/10 cursor-pointer duration-200"
                onClick={() => open("https://threads.net/@tylrvx", "_blank")}
              >
                <i className="bi bi-threads scale-110 text-xl"></i>
                <p className="uppercase text-2xl">Threads</p>
              </button>
            </div>
            {/* <p className="text-xl opacity-80">created by @tylrvx</p> */}
          </div>
        </div>
        {/* <div className="p-6 bg-gradient-to-b from-blue-950 to-blue-200">
          <div className="min-h-screen flex justify-center items-center flex-col gap-6"></div>
        </div> */}
      </div>
    </>
  );
}
