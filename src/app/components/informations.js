import React from 'react';
import { HomeIcon, EnvelopeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/20/solid';



export default function Informations() {
  return (
    <div className="bg-greyforbg py-24 max-w-6xl mx-auto flex">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-semibold leading-7 text-green-700">Comment nous contacter ?</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div>
                <p>Mail : </p>
                <p>Téléphone : </p>
            </div>
            <div>
                Adresse : 
                333 Cours du 3e Millénaire <br/>
                69800 Saint Priest
            </div>
            <div></div>
          </dl>
        </div>
      </div>
    </div>
  )
}
