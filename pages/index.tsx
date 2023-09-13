import Image from "next/legacy/image"
import ResponsiveImage from '../src/components/ResponsiveImage/ResponsiveImage.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-content-start pt-16 items-center bg-fixed bg-vikingsm md:bg-vikingmd lg:bg-viking bg-cover md:bg-bottom lg:bg-top lg:bg-auto bg-no-repeat">
      
      <div className="relative flex place-items-center p-4 pl-32 lg:p-12 xl:pl-96 xl:pt-0">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/forsvind-b.svg"
          alt="Forsvind text logo"
          width={1000}
          height={228}
          priority
        />
      </div>

      <div className="relative flex pl-8 md:pl-16 xl:pl-96">
        <h2 className="text-white/75  drop-shadow-2xl font-extrabold tracking-wide text-xl md:text-5xl uppercase backdrop-blur-sm xl:backdrop-blur-2xl p-2">Get Lost &middot; Survive &middot; Thrive</h2>
      </div>

      <div className="relative flex flex-col mt-16 md:mt-64 lg:mt-16 md:mr-16 lg:mr-0 p-6 pl-8 md:ml-16 xl:ml-96 bg-white/75 md:bg-white/[0.35] lg:bg-white/50 lg:w-1/2">
        <p className="text-gray-800 text-3xl lg:text-3xl font-black md:text-5xl ">What is the most critical survival tool in&nbsp;your&nbsp;arsenal?</p>
        <p className="md:text-2xl text-center md:text-left mt-4 md:font-semibold text-gray-800 italic">&hellip; and are you using it properly?</p>
        <button class="flex-1 px-6 py-2 mt-8 lg:w-64 self-center font-semibold select-none rounded-md text-gray-800 border-2 border-gray-800 hover:border-black hover:text-black">Find Out &#x2794;</button>
      </div>

      {/* EXTRA BUTTONS ETC WERE CUT FROM HERE! */}
      
    </main>
  )
}