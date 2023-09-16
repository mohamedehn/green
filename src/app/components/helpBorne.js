import React from "react";
import { useInView } from 'react-intersection-observer';


const features = [
    {
      name: 'Logement : ',
      description:
        "être propriétaire d'une résidence principale (ou secondaire), locataire ou occupant à titre gratuit de votre habitation.",
    },
    {
      name: 'Ancienneté',
      description:
        "Le logement doit être achevé depuis plus de 2 ans (valable uniquement pour être élligible à la TVA à taux réduit).",
    },
    {
      name: 'Travaux',
      description:
        "L'installation de votre borne de recharge doit être réalisé par un professionnel qualifié IRVE.",
    },
  ]
  
  export default function HelpBorne() {

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    return (
      <div className={`bg-greyforbg py-20 sm:py-24 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-16">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Profitez d&apos;aides financières de l&apos;Etat</h2>
            <p className="mt-6 text-base leading-8 text-gray-600 text-justify">
                Pour la pose d&apos;une borne de recharge, vous avez la possibilité de bénéficier du Crédit d’Impôt qui correspond à 75 % des 
                frais engagés, dans la limite de 300 euros par point de charge (comprenant les frais d&apos;installation). Si votre résidence a 
                plus de deux ans, vous pouvez également tirer parti du taux de TVA réduit (5,5 %).
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-900 text-justify font-semibold">
                Critères d’éligibilité :
            </p>
          </div>
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="font-semibold text-green-700">{feature.name}</dt>
                <dd className="mt-1 text-gray-600 text-justify">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  