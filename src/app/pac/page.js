'use client'

import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Bornes from "../components/borne";
import Fonctionnement from "../components/fonctionnement";
import Footer from "../components/footer";
import HelpBorne from "../components/helpBorne";
import Devis from "../components/devis";
import PacEcs from "../components/pacecs";

export default function Pac(){
    return (
        <div>
            <Header/>
            <PacEcs/>
            <Fonctionnement/>
            
            <Devis/>
            <Footer/>
        </div>
    )
}