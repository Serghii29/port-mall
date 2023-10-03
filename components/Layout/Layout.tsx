import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>
        {title}
        {' '}
        | Port Mall
      </title>
    </Head>

    <main>
      {children}
    </main>
  </>
);
