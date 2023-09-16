import React from "react";
import Image from "next/image";
import chauffe from "../../assets/chauffe.jpg";
import { useInView } from 'react-intersection-observer';


export default function Chauffe() {

  const { ref, inView } = useInView({
      threshold: 0.4,
  });
    
  return (
    <div className={`overflow-hidden bg-greyforbg py-16 sm:py-20 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref} id="chauffe">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 bg-white rounded-xl py-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Image
                src={chauffe}
                alt="Product screenshot"
                className="w-full h-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 object-cover"
            />
            <div className="lg:pr-8">
                <div className="lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-green-700">Chauffe-eau thermodynamique et électrique</h2>
                
                <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none text-justify">
                    <p>
                        Le chauffe-eau thermodynamique exploite la technologie de la pompe à chaleur, en capturant les calories de l&apos;air ambiant 
                        pour les redistribuer et chauffer l&apos;eau de votre domicile.
                    </p>
                    <p>
                        En optant pour ce système, vous profitez d&apos;un excellent confort en eau chaude sanitaire tout en réalisant des 
                        économies d&apos;énergie considérables. En remplacement d&apos;un chauffe-eau électrique, ces économies peuvent atteindre 
                        jusqu&apos;à 70 %, selon les estimations de l&apos;Ademe.
                    </p>
                    <p>
                        D&apos;un autre côté, le chauffe-eau électrique présente l&apos;avantage d&apos;une installation extrêmement simple, 
                        adaptable à tous les types de logement, il suffit de le brancher sur une arrivée d&apos;eau et une prise électrique. 
                        De plus, les modèles récents sont aujourd&apos;hui plus économes en énergie.
                    </p>
                    <p>
                        Avec Green Energy Solutions, vous bénéficiez d&apos;un accompagnement personnalisé de la part de nos conseillers. 
                        Ils vous guideront dans le choix de l&apos;installation et du modèle les plus adaptés à vos besoins spécifiques !
                    </p>         
                </dl>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
