import React from "react";
import Image from "next/image";
import climair from "../../assets/climair.jpg";
import { useInView } from 'react-intersection-observer';



export default function Air() {

  const { ref, inView } = useInView({
      threshold: 0.4,
  });

  return (
    <div className={`overflow-hidden bg-greyforbg py-16 sm:py-20" ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref} id="pacairair">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-green-700">Pompe à chaleur air-air réversible</h2>
              
              <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none text-justify">
                <p>
                    La pompe à chaleur air-air, aussi connue sous le nom de climatisation réversible, propose le chauffage pendant les mois 
                    d&apos;hiver et la climatisation pendant l&apos;été.
                </p>
                <p>
                    L&apos;installation inclut une unité extérieure qui extrait les calories de l&apos;air. Par la suite, ces calories sont 
                    converties et distribuées sous forme de chaleur ou de fraîcheur à l&apos;intérieur grâce aux unités intérieures réparties 
                    dans l&apos;habitation. Cette solution de climatisation garantit un confort optimal toute l&apos;année.
                </p>
                <p>
                    Quelle que soit la superficie que vous souhaitez climatiser, sollicitez-nous pour bénéficier des conseils d&apos;un expert 
                    et élaborer un projet adapté aux spécificités de votre domicile !
                </p>         
              </dl>
            </div>
          </div>
          <Image
            src={climair}
            alt="Product screenshot"
            className="w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
