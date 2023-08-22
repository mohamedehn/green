import React from "react";
import Image from "next/image";
import borne from "../../assets/borne.jpg"

import { UserPlusIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Conseils personnalisés et adaptés',
    description:
      "Un conseiller vous accompagne et vous aide à comprendre les étapes, à choisir l'équipement adapté et répond à vos questions jusqu'à la mise en service de votre borne.",
    icon: UserPlusIcon,
  },
  {
    name: 'Installation fiable et sécurisée',
    description: 'Nos installateurs sont formés et contrôlé afin de vous garantir une fiabilité et une sécurité totale de votre installation.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Borne de recharge de grande qualité',
    description: 'Les équipements et matériaux choisi par notre entreprise sont de très grande qualité et répondent à une exigence stricte de notre part.',
    icon: BoltIcon,
  },
]

export default function Bornes() {
  return (
    <div className="overflow-hidden bg-greyforbg py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">Borne de recharge électrique</h2>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-800" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="flex text-justify">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={borne}
            alt="Product screenshot"
            className="w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
