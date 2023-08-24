import React from "react";
import Image from "next/image";
import chaudiere from "../../assets/chaudiere.png"


export default function Chaudiere() {
    
  return (
    <div className="overflow-hidden bg-greyforbg py-16 sm:py-20" id="chaudiere">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Image
                src={chaudiere}
                alt="Product screenshot"
                className="w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 object-cover"
            />
            <div className="lg:pr-8">
                <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-green-700">Chaudières</h2>
                
                <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none text-justify">
                    <p>
                        Opter pour une chaudière nouvelle génération en tant que système de chauffage vous offre l&apos;opportunité de réaliser 
                        des économies d&apos;énergie substantielles. L&apos;installation d&apos;une chaudière à condensation vous procure un 
                        appareil hautement efficient qui, en plus d&apos;améliorer le confort thermique et sanitaire de votre domicile, 
                        affiche une performance remarquable.
                    </p>
                    <p>
                        Avec notre solution clé en main, nous vous accompagnons de bout en bout. De l&apos;évaluation des besoins de votre 
                        équipement à sa mise en fonction, un expert dédié suit attentivement votre dossier et vous prodigue des conseils avisés.
                    </p>
                    <p>
                        De plus, vous avez la certitude que le montage du nouveau système de chauffage est réalisé par un artisan qualifié 
                        et Reconnu Garant de l&apos;Environnement (RGE) !
                    </p>         
                </dl>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
