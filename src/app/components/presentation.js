import React from 'react';
import Image from 'next/image';
import panneau from "../../assets/panneau.jpg"


export default function Presentation() {
  return (
    <div className="overflow-hidden bg-white mt-10 rounded-xl max-w-6xl flex mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
                <h2 className="text-3xl font-semibold leading-7 text-green-700 text-center">Green Energy Solutions</h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pt-4">
                Avec GES, la rénovation énergétique c&apos;est simple !
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                    Basée en région Rhône-Alpes Auvergne, Green Energy Solutions est une société de conseils, d&apos;études et de 
                    travaux en matière d&apos;économie énergétique destinée aux particuliers et aux professionnelles. Soucieux des problématiques 
                    liées à l&apos;environnement, nous avons pour ambition de promouvoir les énergies renouvelables et permettre à tout un chacun 
                    de les adopter et de faire baisser de manière significative les consommations d&apos;énergies.
                </p>
                <div className='mt-6 text-lg leading-8 text-gray-600 text-justify flex justify-around font-semibold hover:text-green-800'>
                    <a href='#'>En savoir +</a>
                    <a href='#'>Nous contacter</a>
                </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={panneau}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
              width={1432}
              height={402}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
