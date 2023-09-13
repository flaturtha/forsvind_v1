// pages/500.js

import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">500</h1>
      <p className="text-xl text-gray-700 mb-4">Internal Server Error</p>
      <p className="text-gray-600 mb-8">Sorry, something went wrong on our end.</p>
      <Link href="/">
        <a className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}
