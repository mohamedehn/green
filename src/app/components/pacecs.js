import React from "react";
import Image from "next/image";
import clim from "../../assets/clim.jpg"


export default function PacEcs() {
  return (
    <div className="overflow-hidden bg-greyforbg py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">Pompe à chaleur air-eau</h2>
              
              <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none text-justify">
                <p>
                  La technologie de la pompe à chaleur (PAC) propose une solution de chauffage novatrice qui capte l&apos;énergie de l&apos;air 
                  extérieur pour réchauffer l&apos;intérieur de votre habitation. Les calories prélevées de l&apos;air extérieur représentent une 
                  source d&apos;énergie gratuite, pouvant réduire votre facture d&apos;énergie jusqu&apos;à 60 % (selon l&apos;Ademe).
                </p>
                <p>
                  La version air-eau de la PAC permet de chauffer votre résidence dotée d&apos;un circuit de chauffage à eau tout en produisant 
                  de l&apos;eau chaude sanitaire.
                </p>
                <p>
                  En optant pour l&apos;installation d&apos;une PAC, vous avez accès à des avantages tels qu&apos;une TVA réduite, des aides 
                  financières et des primes pouvant atteindre 9 000 €.
                </p>         
              </dl>
            </div>
          </div>
          <Image
            src={clim}
            alt="Product screenshot"
            className="w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
