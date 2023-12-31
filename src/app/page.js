'use client'

import Header from './components/header';
import Presentation from './components/presentation';
import Fonctionnement from './components/fonctionnement';
import Devis from './components/devis';
import Engagements from './components/engagements';
import Informations from './components/informations';
import Avis from './components/avis';
import Footer from './components/footer';
import './globals.css'
import PopUpCookies from './components/popUpCookies';
import ScrollToTop from './components/scrollToTop';

export default function Home() {
  return (
    <>
      <Header/>
      <Presentation/>
      <ScrollToTop/>
      <PopUpCookies/>
      <Fonctionnement/>
      <Devis/>
      <Engagements/>
      {/* <Avis/> */}
      <Informations/>
      <Footer/>
    </>
  )
}
