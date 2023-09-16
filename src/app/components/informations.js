import React from 'react';
import { HomeIcon, EnvelopeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/20/solid';
import { useInView } from 'react-intersection-observer';


const features = [
  {
    name: 'Mail',
    description:
      'contact@greenenergysolutions.fr',
    href: 'mailto:contact@greenenergysolutions.fr',
    icon: EnvelopeIcon,
  },
  {
    name: 'Adresse',
    description:
      "333 Cours du 3e Millénaire - 69800 Saint Priest",
    href: '#',
    icon: ClipboardDocumentCheckIcon,
  },
]

export default function Informations() {

  const { ref, inView } = useInView({
      threshold: 0.4,
  });

  return (
    <div className={`bg-greyforbg py-20 max-w-6xl mx-auto flex ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-green-700">Comment nous contacter ?</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex">
                <dt className="flex items-center text-base font-semibold leading-7 text-gray-900 mr-5">
                  <feature.icon className="h-5 w-5 flex-none text-green-700" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="flex items-center flex-auto text-base leading-7 text-gray-600">
                  <p className="flex-auto text-justify">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='flex justify-center mt-20 h-[350px] w-full'>
              <iframe className='w-[70%] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.786030803332!2d4.9320224999999995!3d45.7153292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c3e6e59a50ed%3A0xfcd315d503f2c978!2s333%20Cr%20du%203%C2%B0%20Mill%C3%A9naire%2C%2069800%20Saint-Priest!5e0!3m2!1sfr!2sfr!4v1692284560354!5m2!1sfr!2sfr"></iframe>
            </div>
      </div>
    </div>
  )
}
