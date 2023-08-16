'use client'

import Head from 'next/head';
import Header from './components/header';
import Presentation from './components/presentation';

export default function Home() {
  return (
    <>
      <Header/>
      <Presentation/>
    </>
  )
}
