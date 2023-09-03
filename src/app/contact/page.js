'use client'

import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Informations from "../components/informations"
import Form from "../components/form"


export default function Contact () {
    return(
        <div>
            <Header/>
            <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
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
            <Informations/>
            <Form/>
            <Footer/>
        </div>
    )
}