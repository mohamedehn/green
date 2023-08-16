import React from 'react';
import Image from 'next/image';
import { EnvelopeIcon} from '@heroicons/react/20/solid';
import computer from "../../assets/computer.jpg"

const features = [
  {
    name: 'Obtenir un devis personnalisé',
    description:'',
    icon: EnvelopeIcon,
  }
]

export default function Devis() {
  return (
    <div className="overflow-hidden bg-greyforbg py-24 sm:py-16 max-w-6xl flex mx-auto rounded-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-xl bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Demandez un devis gratuit & sans engagement!</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                Un devis personnalisé pour votre projet vous attend. Alors n&apos;hésitez pas à nous contacter en cliquant sur le lien ci-dessous.
                Un conseiller prendra contact avec vous pour étudier votre projet.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <a href='#'>
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-700" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                    </a>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={computer}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem]"
              width={1432}
              height={442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
