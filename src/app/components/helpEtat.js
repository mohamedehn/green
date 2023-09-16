import React from "react";
import { useInView } from 'react-intersection-observer';


const features = [
  {
    name: "TVA à 5,5%",
    description:
      "La TVA réduite à 5,5% est une mesure fiscale destinée à rendre plus abordables les travaux de rénovation énergétique. Elle s'applique aux travaux visant à améliorer la performance énergétique des habitations de plus de deux ans. Cette réduction s'applique à une gamme de travaux, y compris l'isolation, le remplacement de fenêtres, l'installation de systèmes de chauffage plus efficaces, etc. Elle vise à encourager les propriétaires à entreprendre des rénovations éco-responsables.",
    href: 'https://www.economie.gouv.fr/particuliers/tva-taux-reduits-travaux#',
  },
  {
    name: "MaPrimeRénov'",
    description:
      "MaPrimeRénov' est une aide financière directe destinée à soutenir la rénovation énergétique des logements en France. Elle est accessible aux propriétaires occupants, aux bailleurs, et aux syndicats de copropriété. Les montants de MaPrimeRénov' varient en fonction des revenus du ménage et des économies d'énergie attendues grâce aux travaux. Elle peut couvrir un large éventail de projets, de l'isolation au remplacement de systèmes de chauffage.",
    href: 'https://www.economie.gouv.fr/particuliers/prime-renovation-energetique',
  },
  {
    name: "CEE (Certificats d'Économie d'Énergie)",
    description:
      "Le dispositif des Certificats d'Économie d'Énergie oblige les fournisseurs d'énergie à promouvoir l'efficacité énergétique. Les particuliers et les entreprises peuvent bénéficier d'aides financières ou de primes en réalisant des travaux de rénovation énergétique qui réduisent leur consommation d'énergie. Les CEE peuvent être utilisés pour financer l'isolation, le remplacement de systèmes de chauffage, le choix d'équipements plus économes en énergie, etc.",
    href: 'https://www.ecologie.gouv.fr/dispositif-des-certificats-deconomies-denergie',
  },
  {
    name: "L'Eco PTZ (Éco Prêt à Taux Zéro)",
    description: 
    "L'Éco PTZ est un prêt à taux zéro destiné à financer des travaux de rénovation énergétique dans les résidences principales construites avant 1990. Il peut couvrir jusqu'à 50 000 € de dépenses liées à l'amélioration de la performance énergétique du logement. Les remboursements commencent après un différé, ce qui en fait une option attrayante pour financer des projets de rénovation sans intérêts.",
    href: "https://www.service-public.fr/particuliers/vosdroits/F19905",
  },
  {
    name: "L'ANAH (Agence Nationale de l'Habitat)",
    description: 
    "L'Agence Nationale de l'Habitat (ANAH) propose des subventions pour la rénovation énergétique des logements. Ces subventions sont destinées aux propriétaires occupants et aux propriétaires bailleurs qui louent à des ménages à revenus modestes. Les montants varient en fonction des ressources et des travaux réalisés, couvrant souvent une part importante des coûts.",
    href: "https://www.anah.fr/",
  },
  {
    name: "Action Logement",
    description: 
    "Action Logement propose des aides financières aux salariés pour améliorer le confort thermique de leur logement. Ces aides peuvent être utilisées pour des travaux d'isolation, de ventilation, de chauffage, etc. Les montants varient en fonction de la situation professionnelle et des ressources du demandeur. Il est conseillé de consulter le site officiel et de vérifier les critères d'éligibilité.",
    href: "https://www.actionlogement.fr/guides/financer-vos-travaux/renovation-energetique-nos-aides-et-prets-accordes",
  }
]

export default function HelpEtat() {

  const { ref, inView } = useInView({
      threshold: 0.4,
  });

  return (
    <div className={`bg-greyforbg py-24 sm:py-32 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">
            Les informations à connaitre pour les aides de l&apos;Etat !
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-justify sm:text-center">
            Dans le cadre de la transition vers un avenir plus durable, le gouvernement français propose plusieurs aides financières pour 
            encourager la rénovation énergétique des logements. Ces incitations visent à rendre les travaux de rénovation plus accessibles, à 
            réduire la consommation d&apos;énergie des bâtiments et à contribuer à la réduction des émissions de gaz à effet de serre. Nous 
            allons explorer les principales aides offertes par l&apos;État pour vous aider à comprendre comment elles peuvent bénéficier à 
            votre projet de rénovation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-green-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-justify">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-green-600">
                      Plus d&apos;informations <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
