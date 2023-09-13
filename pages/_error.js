// pages/_error.js

import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">
        {statusCode ? `An error ${statusCode} occurred` : 'An error occurred'}
      </h1>
      <p className="text-xl text-gray-700 mb-4">Sorry, something went wrong.</p>
      <Link href="/">
        <a className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
