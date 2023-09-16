'use client'

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HelpEtat from "../components/helpEtat";
import Devis from "../components/devis";
import Fonctionnement from "../components/fonctionnement";
import PopUpCookies from "../components/popUpCookies";
import ScrollToTop from "../components/scrollToTop";
import { useInView } from 'react-intersection-observer';


export default function AideEtat () {

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        <div>
            <Header/>
            <div className={`bg-white px-6 py-24 sm:py-32 lg:px-8 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-green-700 sm:text-5xl">Aides de l&apos;Etat</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                        En réponse à l&apos;impératif de transition vers un futur plus respectueux de l&apos;environnement, le gouvernement 
                        français a mis en place une série d&apos;aides financières pour catalyser la rénovation énergétique des habitations. 
                        Ces mesures ont pour objectif de faciliter l&apos;accès aux travaux de rénovation, de réduire la consommation énergétique 
                        des bâtiments, et de contribuer à la réduction des émissions de gaz à effet de serre. Explorez ces aides et transformez 
                        votre habitation en un foyer éco-responsable, tout en bénéficiant d&apos;économies substantielles. Votre contribution à un 
                        avenir plus vert commence ici.
                    </p>
                </div>
            </div>
            <ScrollToTop/>
            <HelpEtat/>
            <PopUpCookies/>
            <Fonctionnement/>
            <Devis/>
            <Footer/>
        </div>
    )
}