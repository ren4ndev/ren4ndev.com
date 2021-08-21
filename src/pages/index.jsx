import React from 'react';
import Head from 'next/head';
import HomePage from 'components/Templates/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ren4ndev</title>
      </Head>
      <HomePage />
    </>
  );
}
