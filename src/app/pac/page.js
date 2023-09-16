'use client'

import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Fonctionnement from "../components/fonctionnement";
import Footer from "../components/footer";
import Devis from "../components/devis";
import PacEcs from "../components/pacecs";
import Chaudiere from "../components/chaudiere";
import Air from "../components/air";
import Chauffe from "../components/chauffe-eau";
import Radiateur from "../components/radiateur";
import PacWorks from "../components/PacWorks";
import "../globals.css";
import PopUpCookies from "../components/popUpCookies";
import { useInView } from 'react-intersection-observer';



export default function Pac(){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return (
        <div>
            <Header/>
            <div className={`bg-white px-6 py-24 sm:py-32 lg:px-8 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-green-700 sm:text-5xl">Travaux de chauffage & climatisation</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                        Avec GES, optimisez votre bien-être tout en réduisant votre consommation d&apos;énergie ! Découvrez nos diverses 
                        solutions sur mesure et réalisez des économies sur votre facture énergétique. Qu&apos;il s&apos;agisse de pompes à chaleur, 
                        de climatisation, ou de chauffe-eau, choisir GES signifie choisir la simplicité pour vos projets de chauffage !
                    </p>
                </div>
            </div>
            <PopUpCookies/>
            <PacWorks/>
            <PacEcs/>
            <Chaudiere/>
            <Air/>
            <Chauffe/>
            <Radiateur/>
            <Fonctionnement/>
            
            <Devis/>
            <Footer/>
        </div>
    )
}