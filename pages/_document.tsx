import {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="This is a test task from ROSSERY" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
