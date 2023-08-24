'use client'

import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Bornes from "../components/borne";
import Fonctionnement from "../components/fonctionnement";
import Footer from "../components/footer";
import HelpBorne from "../components/helpBorne";
import Devis from "../components/devis";

export default function Borne(){

    return (
        <div>
            <Header/>
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-green-700 sm:text-5xl">Borne de recharge</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                        Opter pour une borne de recharge et la mettre en place, c&apos;est simple avec GES ! Nous vous proposons une solution 
                        complète, ajustée à tous les besoins : qu&apos;il s&apos;agisse d&apos;une maison individuelle, d&apos;une habitation 
                        collective ou d&apos;une entreprise. Obtenez rapidement un devis gratuitement !
                    </p>
                </div>
            </div>
            <Bornes/>
            <Fonctionnement/>
            <HelpBorne/>
            <Devis/>
            <Footer/>
        </div>
    )
}