import React from "react";
import Image from "next/image";
import radiator from "../../assets/radiator.jpg"


export default function Radiateur() {
  return (
    <div className="overflow-hidden bg-greyforbg py-16 sm:py-20" id="radiateur">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">Radiateurs électriques</h2>
              
              <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none text-justify">
                <p>
                    Si vous désirez augmenter votre confort et réaliser des économies, l&apos;installation d&apos;un radiateur électrique vous 
                    tente. Cependant, au milieu des différentes propositions de radiateurs disponibles, faire un choix devient complexe et 
                    soulève plusieurs interrogations. Opter pour un panneau rayonnant ou un radiateur à inertie ? Quelle puissance est idéale 
                    pour chaque pièce ? Comment procéder à l&apos;installation ?
                </p>
                <p>
                    Nayez-crainte, faites appel à Green Energy Solutions et découvrez notre solution tout-en-un. Bénéficiez d&apos;un accompagnement 
                    personnalisé de bout en bout, choisissez les radiateurs les mieux adaptés à vos besoins, et faites réaliser 
                    l&apos;installation... En fin de compte, si vous recherchez la simplicité, choisissez GES !
                </p>       
              </dl>
            </div>
          </div>
          <Image
            src={radiator}
            alt="Product screenshot"
            className="w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
