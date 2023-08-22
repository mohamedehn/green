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
            <Bornes/>
            <Fonctionnement/>
            <HelpBorne/>
            <Devis/>
            <Footer/>
        </div>
    )
}