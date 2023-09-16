'use client'

import React from "react";
import Footer from "../components/footer";
import Informations from "../components/informations";
import Form from "../components/form";
import PopUpCookies from "../components/popUpCookies";
import ScrollToTop from "../components/scrollToTop";
import { useInView } from 'react-intersection-observer';
import Header from "../components/header";



export default function Contact () {

    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    return(
        <div>
            <Header/>
            <div className={`bg-white px-6 py-24 sm:py-32 lg:px-8 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-green-700 sm:text-5xl">Contact</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                        Nous sommes ravis de pouvoir vous aider de manière plus personnalisée. Si vous avez des questions, des demandes 
                        spécifiques ou si vous souhaitez simplement en savoir plus sur notre entreprise et nos services, c&apos;est ici que vous 
                        pouvez nous joindre. Nous sommes déterminés à répondre à vos besoins et à établir une communication ouverte et 
                        efficace avec vous. N&apos;hésitez pas à remplir le formulaire ci-dessous ou à consulter les autres informations 
                        utiles relatives à notre entreprise.
                    </p>
                </div>
            </div>
            <ScrollToTop/>
            <PopUpCookies/>
            <Informations/>
            <Form/>
            <Footer/>
        </div>
    )
}