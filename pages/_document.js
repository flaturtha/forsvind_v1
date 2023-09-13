// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add your custom meta tags, analytics script, etc. here */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-gray-100 text-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
