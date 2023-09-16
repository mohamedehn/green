import React from "react";
import Image from "next/image";
import pv from "../../assets/pv.jpg";
import { useInView } from 'react-intersection-observer';


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
    name: 'Panneaux solaires de grande qualité',
    description: 'Les équipements et matériaux choisi par notre entreprise sont de très grande qualité et répondent à une exigence stricte de notre part.',
    icon: BoltIcon,
  },
]

const secondFeatures = [
    {
        name:"Sur un toit",
        description:"La solution idéale pour créer et consommer votre énergie solaire est une toiture avec panneaux solaires.",
    },
    {
        name:"Sur un toit-terrasse",
        description:"Si votre toit n'a pas une inclinaison standard, nous ajustons et calibrons l'installation photovoltaïque selon les spécificités de votre toiture.",
    },
    {
        name: "Dans un jardin",
        description: "Parfait pour les résidences dotées d'un vaste espace extérieur ou pour celles dont la toiture ne convient pas aux installations photovoltaïques : nous mettons en place vos panneaux solaires au sol.",
    }
]

export default function Panneau() {

  const { ref, inView } = useInView({
      threshold: 0.25,
  });

  return (
    <div className={`overflow-hidden bg-greyforbg py-16 sm:py-16 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">Panneaux photovoltaïques</h2>
              
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
            src={pv}
            alt="Product screenshot"
            className="w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 object-cover"
          />
        </div>
      </div>
      <div className="bg-greyforbg pt-24 sm:pt-48">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl text-center">Installer des panneaux solaires avec GES</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Il existe 3 solutions à votre disposition pour installer et utiliser des panneaux solaires :
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {secondFeatures.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-green-800">{feature.name}</dt>
              <dd className="mt-1 text-gray-600 text-justify">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  )
}
