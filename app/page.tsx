import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-start pr-24 bg-viking bg-auto bg-no-repeat">
      
      <div className="relative flex place-items-center mt-48 mb-0">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/forsvind-b.svg"
          alt="Forsvind Logo"
          width={1000}
          height={228}
          priority
        />
      </div>

      <div className="relative flex place-items-center">
        <h2 className="text-white font-extrabold tracking-wider text-5xl uppercase">Get Lost &middot; Survive &middot; Thrive</h2>
      </div>

      {/* EXTRA BUTTONS ETC WERE CUT FROM HERE! */}
      
    </main>
  )
}
