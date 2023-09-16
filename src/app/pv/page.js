'use client'

import Devis from "../components/devis";
import Fonctionnement from "../components/fonctionnement";
import Footer from "../components/footer";
import Header from "../components/header";
import Engagements from "../components/engagements";
import Panneau from "../components/pv";
import PopUpCookies from "../components/popUpCookies";
import ScrollToTop from "../components/scrollToTop";
import { useInView } from 'react-intersection-observer';


export default function PV () {

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        <div>
            <Header/>
            <div className={`bg-white px-6 py-24 sm:py-32 lg:px-8 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-green-700 sm:text-5xl">Panneaux photovoltaïques</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        <span className="text-center">Grâce à l&apos;auto-consommation, réduisez votre facture d&apos;énergie! <br/></span>
                        <span className="text-justify">
                            Explorez l&apos;opportunité d&apos;investir dans l&apos;énergie photovoltaïque en choisissant nos panneaux solaires, 
                            en collaboration avec un leader du secteur. Unissons nos efforts pour accélérer l&apos;atteinte de la neutralité carbone 
                            et pour favoriser le développement et la création d&apos;habitats respectueux de l&apos;environnement.
                        </span>
                    </p>
                </div>
            </div>
            <ScrollToTop/>
            <PopUpCookies/>
            <Panneau/>
            <Fonctionnement/>
            <Engagements/>
            <Devis/>
            <Footer/>
        </div>
    )
}