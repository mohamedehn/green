import React from "react"

const stats = [
    {   id: 1, 
        name: 'Des conseils adaptés à votre situation et vos besoins. Un conseiller vous accompagne tout le long de votre projet.', 
        value: 'Conseils de qualité' },
    {   id: 2, 
        name: "Nos prix sont justes et les devis fournies précis. Nous accordons énormément d'importance à la compréhension des documents transmis.", 
        value: 'Prix compétitifs' },
    {   id: 3, 
        name: 'Nos équipes sont formés et suivent un cahier des charges très précis afin de fournir une qualité irréprochable.', 
        value: 'Travaux de qualité' },
    {   id: 4, 
        name: "De nombreuses aides de l'état sont possible pour vos projets. Une page dédiée vous explique tout ce dont vous avez besoin.", 
        value: "Aides de l'états" },
  ]
  
  export default function Engagements() {
    return (
      <div className="bg-greyforbg py-24 max-w-6xl flex mx-auto rounded-xl">
        <div className="mx-auto bg-white rounded-xl w-full">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl pt-4">
                Nos engagements
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 text-center">
                Notre vision repose sur 4 engagements 
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  