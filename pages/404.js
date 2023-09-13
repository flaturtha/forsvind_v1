// pages/404.js

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mb-4">Page Not Found</p>
      <p className="text-gray-600 mb-8">Our motto is GET LOST but we didn&#39;t mean <i>on our website!</i></p>
      <Link href="/" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Go back to Home</Link>
    </div>
  );
}

