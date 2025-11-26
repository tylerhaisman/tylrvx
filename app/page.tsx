"use client";

export default function Home() {
  return (
    <>
      <div className="p-6 bg-black min-h-screen w-full flex justify-center items-center text-xs">
        <div className="flex flex-col gap-24">
          <div className="">
            <p
              className="hover:underline w-fit"
              data-cursor
              onClick={() =>
                window.open("https://instagram.com/tylrvx", "_blank")
              }
            >
              Instagram
            </p>
            <p
              className="hover:underline w-fit"
              data-cursor
              onClick={() =>
                window.open("https://tiktok.com/@tylrvx", "_blank")
              }
            >
              TikTok
            </p>
            {/* <p
              className="hover:underline w-fit"
              data-cursor
              onClick={() =>
                window.open("https://soundcloud.com/tylrvx", "_blank")
              }
            >
              SoundCloud
            </p> */}
            <p
              className="hover:underline w-fit"
              data-cursor
              onClick={() =>
                window.open("https://www.youtube.com/@tylrvx", "_blank")
              }
            >
              YouTube
            </p>
            <p
              className="hover:underline w-fit"
              data-cursor
              onClick={() => window.open("https://x.com/tylrvx", "_blank")}
            >
              X
            </p>
          </div>
          <h1 className="text-[14vw] shadow-2xl">@tylrvx</h1>
          <div className="">
            <p
              className="hover:underline w-fit"
              data-cursor
              onClick={() =>
                window.open(
                  "https://open.spotify.com/playlist/0P2kcsfDGmy9gE230zhX5C?si=4978facf9d454df3",
                  "_blank"
                )
              }
            >
              {'Check out playlist on Spotify: "The Hills" by @tylrvx'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
