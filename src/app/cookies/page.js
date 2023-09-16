'use client'
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import PopUpCookies from "../components/popUpCookies";
import ScrollToTop from "../components/scrollToTop";
import { useInView } from 'react-intersection-observer';


export default function Cookies(){

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return(
        <div>
        <Header/>
        <PopUpCookies/>
        <div className={`bg-greyforbg py-20 sm:py-24 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
            <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-16">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">POLITIQUE DE GESTION DES COOKIES</h2>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-10">INFORMATIONS À PROPOS DES COOKIES</h3>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Lors de la consultation de notre site internet, des cookies sont déposés sur le terminal (ordinateur, tablette, smartphone) 
                        avec lequel vous naviguez.
                    </p>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-10">QU’EST CE QU’UN COOKIE ?</h3>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Le cookie est un petit fichier texte déposé dans un espace dédié du disque dur de votre terminal qui va stocker des 
                        informations relatives à votre navigation. Il est téléchargé par votre navigateur lors de la visite d’un site internet. 
                        Lorsque vous revenez sur ce site en utilisant le même appareil, le cookie et les informations qui y sont stockés sont 
                        soit envoyés au site internet qui l’a créé (cookie propriétaire) soit envoyés à un autre site internet auquel il 
                        appartient (cookie tiers). Certains cookies sont extrêmement utiles car ils peuvent améliorer l’expérience de 
                        l’utilisateur. Par exemple, lorsque vous consultez plusieurs fois un site internet avec un même navigateur, les cookies 
                        gardent en mémoire, vos préférences, la manière dont vous utilisez un site et adaptent le contenu affiché pour qu’il soit 
                        adapté à vos besoins et intérêts personnels. Selon leur fonction et leur finalité, les cookies peuvent être divisés en 
                        quatre catégories : les cookies essentiels, les cookies de mesures d’audience et de statistique, les cookies fonctionnels 
                        et les cookies publicitaires.
                    </p>
                    <ScrollToTop/>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-10">QUELLE EST LA DUREE DE CONSERVATION D’UN COOKIE ?</h3>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Les cookies déposés par Green Energy Solutions, nos sous-traitants et nos partenaires et les données de navigations 
                        recueillies sont conservées pour une durée maximale de 13 mois à compter du dépôt sur votre terminal. A l’expiration de 
                        ce délai, votre consentement sera à nouveau nécessaire au dépôt du cookie.
                    </p>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-10">LES CATEGORIES DE COOKIES</h3>
                    <h4 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl pt-6">LES COOKIES ESSENTIELS :</h4>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Les cookies essentiels, également appelés cookies « strictement nécessaires », assurent des fonctions sans lesquelles 
                        le site ne peut pas fonctionner correctement. Ils sont stockés sur votre appareil uniquement pendant la durée de la 
                        session d’utilisation du navigateur, et votre consentement n’est pas requis pour ce type de cookie.
                    </p>
                    <h4 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl pt-6">LES COOKIES DE MESURES D’AUDIENCE ET DE STATISTIQUES :</h4>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Les cookies de mesures d’audience et de statistique permettent de produire des statistiques anonymes quant à la 
                        fréquentation du site (ex : nombre de visites, les pages consultées, le temps passé…). Ces cookies permettent d’adapter 
                        le site aux demandes des visiteurs et d’améliorer sa performance et ses fonctionnalités.
                    </p>
                    <h4 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl pt-6">LES COOKIES DE FONCTIONNELS :</h4>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Les cookies fonctionnels permettent à un site internet d’enregistrer des informations qui ont déjà été fournies 
                        (ex : le nom de l’utilisateur, la localisation) et d’offrir à l’utilisateur des fonctions améliorées et personnalisées.
                    </p>
                    <h4 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl pt-6">LES COOKIES PUBLICITAIRES :</h4>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Les cookies publicitaires sont utilisés pour diffuser des publicités qui sont pertinentes pour certains utilisateurs 
                        spécifiques et adaptées à leurs intérêts.
                    </p>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-10">COMMENT GÉRER ET SUPPRIMER LES COOKIES ?</h3>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Lors de votre première visite sur le site, un bandeau vous informe de la présence de ces cookies et vous invite à les 
                        accepter ou les refuser. Les cookies, qui nécessitent votre consentement, seront déposés uniquement si vous y consentez.
                    </p>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Par ailleurs, pour gérer les cookies, la plupart des navigateurs vous permettent de refuser ou d’accepter tous les 
                        cookies ou de n’en accepter que certains. Vous trouverez la procédure de gestion et de suppression des cookies à la 
                        rubrique aide de votre navigateur, ou directement en cliquant sur les liens suivants :
                    </p>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Pour Chrome, cliquer&nbsp;
                        <a href="http://support.google.com/chrome/bin/answer.py?hl=fr&hlrm=en&answer=95647">ici</a>
                    </p>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Pour Safari, cliquer&nbsp;
                        <a href="http://support.apple.com/kb/HT1677?viewlocale=fr_FR">ici</a>
                    </p>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Pour Firefox, cliquer&nbsp;
                        <a href="http://support.mozilla.org/fr/kb/activer-desactiver-cookies?redirectlocale=fr&redirectslug=Activer+et+d%C3%A9sactiver+les+cookies">
                            ici
                        </a>
                    </p>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Pour Opera, cliquer&nbsp;
                        <a href="http://help.opera.com/Windows/10.20/fr/cookies.html">ici</a>
                    </p>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-10">
                        MISES À JOUR DE LA POLITIQUE DE GESTION DES COOKIES :
                    </h3>
                    <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                        Green Energy Solutions se réserve le droit de modifier ou de mettre à jour cette politique lorsque cela devient 
                        nécessaire (dernière mise à jour le 09/08/2023), afin de s’adapter aux retours clients, aux changements liés à nos 
                        produits et services, ou pour être conforme à de nouvelles exigences légales. Nous vous prions de bien vouloir la 
                        consulter régulièrement. Lorsque nous mettons à jour cette politique, nous révisons la date de « dernière mise à jour » en 
                        haut de ce document.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}