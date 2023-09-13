import Image from 'next/image';

export default function OopsHome() {
  return (
    <div className="bg-viking bg-no-repeat bg-cover h-screen flex flex-col justify-center items-end">
      <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
        <div className="col-start-3 row-start-1 flex justify-center items-start">
          <Image src="/forsvind.svg"
          alt="Førsvind"
          width={800}
          height={182}
          priority
          className="mt-48 mr-96" />
        </div>
        <div className="bg-blue-500 w-full h-full col-start-2 row-start-2 mt-48 mr-96">
          <h2 className="text-white text-4xl font-extrabold">Get Lost · Survive · Thrive</h2>
        </div>
      </div>
    </div>
  );
}
