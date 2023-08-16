'use client'

import Head from 'next/head';
import Header from './components/header';
import Presentation from './components/presentation';
import Fonctionnement from './components/fonctionnement';
import Devis from './components/devis';
import Engagements from './components/engagements';
import Informations from './components/informations';

export default function Home() {
  return (
    <>
      <Header/>
      <Presentation/>
      <Fonctionnement/>
      <Devis/>
      <Engagements/>
      <Informations/>
    </>
  )
}
