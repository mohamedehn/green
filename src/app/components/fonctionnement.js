import React from 'react';
import { HomeIcon, EnvelopeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Contact',
    description:
      'Prenez contact avec notre entreprise. Un membre de notre équipe répondra à vos premières questions. Pour ce faire vous avez 3 possibilités : nous appelez, nous écrire un mail ou nous envoyez une demande via notre formulaire.',
    href: '#',
    icon: EnvelopeIcon,
  },
  {
    name: 'Accompagnement',
    description:
      "Un conseiller réponds à vos questions, réalisé un devis sur-mesure en fonction de vos projets. Un récapitulatif des aides vous sera transmis. Le conseiller vous accompagnera tout au long de votre projet et sera l'intermédiaire avec nos équipes terrains.",
    href: '#',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Travaux',
    description:
      "Une fois le projet validé avec votre conseiller, un RDV pour les travaux sera fixé avec une équipe terrain. A l'issu des travaux votre conseiller reviendra vers vous pour effectuer un débrief des travaux.",
    href: '#',
    icon: HomeIcon,
  },
]

export default function Fonctionnement() {
  return (
    <div className="bg-greyforbg py-24 max-w-6xl mx-auto flex">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-semibold leading-7 text-green-700">Comment ça fonctionne ?</h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl pt-4">
            3 étapes suffisent pour vous permettre d&apos;accomplir votre projet !
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-justify">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
