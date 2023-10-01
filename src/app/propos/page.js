'use client'

import { useState } from 'react';
import {AcademicCapIcon, CheckCircleIcon, HandRaisedIcon, RocketLaunchIcon, SparklesIcon, SunIcon, UserGroupIcon} from '@heroicons/react/20/solid';
import Footer from '../components/footer';
import Header from '../components/header';
import Image from 'next/image';
import hire from "../../assets/hire.jpg";
import pv2 from "../../assets/pv2.jpg";
import PopUpCookies from '../components/popUpCookies';
import ScrollToTop from '../components/scrollToTop';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';


const stats = [
  { label: "Création de l'entreprise", value: '2022' },
  { label: 'Personnes dans notre équipe', value: '10+' },
  { label: 'De clients satisfait', value: 'Une multitude' },
]
const values = [
  {
    name: 'Durabilité',
    description: "Nous plaçons la durabilité au cœur de tout ce que nous faisons, en créant des solutions énergétiques qui préservent notre planète pour les générations futures.",
    icon: RocketLaunchIcon,
  },
  {
    name: 'Innovation',
    description: "Notre quête incessante d'innovation alimente notre capacité à repousser les limites, en créant des technologies énergétiques avancées qui ouvrent la voie à un avenir énergétique plus intelligent et plus propre.",
    icon: HandRaisedIcon,
  },
  {
    name: 'Qualité et Satisfaction Client',
    description: "La satisfaction de nos clients est notre moteur. Nous nous engageons à fournir des solutions énergétiques exceptionnelles qui dépassent les attentes et créent une valeur durable.",
    icon: UserGroupIcon,
  },
  {
    name: 'Expertise',
    description: 'Avec une équipe de spécialistes chevronnés, nous apportons une expertise inégalée dans chaque projet, garantissant des solutions efficaces et personnalisées à chaque défi énergétique.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Engagement Écologique',
    description: "Notre engagement envers l'environnement guide chaque décision, chaque conception et chaque installation, assurant des résultats qui profitent à la planète et à ses habitants.",
    icon: SparklesIcon,
  },
  {
    name: 'Responsabilité Sociale',
    description: "Nous reconnaissons notre rôle en tant que catalyseur du changement positif, en créant des opportunités d'emplois verts et en contribuant à des collectivités plus résilientes.",
    icon: SunIcon,
  },
]
// const team = [
//   {
//     name: 'Leslie Alexander',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     location: 'Toronto, Canada',
//   },
//   // More people...
// ]

const benefits = [
  'Salaires attratifs',
  'Impact Environnemental',
  'Expertise Collaborative ',
  'Projets Variés',
  'Un environnement sain',
  'Développement Personnel',
]


export default function Propos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { ref, inView } = useInView({
      threshold: 0.01,
  });

  return (
    <div className={`bg-grayforbg ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
      {/* Header */}
      <Header/>
      <PopUpCookies/>
      <main className="max-w-6xl mx-auto">
        

        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-28">
            <h2 className="font-bold tracking-tight text-green-700 text-5xl">Green Energy Solutions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Propulsant la transition énergétique avec expertise et innovation, offrant des solutions sur mesure pour 
                un avenir durable et respectueux de l&apos;environnement.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-8 text-gray-600 lg:max-w-none lg:grid-cols-2 text-justify">
              <div>
                <p>
                    Green Energy Solutions, une entreprise pionnière dans le domaine de l&apos;énergie durable, s&apos;est engagée à façonner un 
                    avenir plus respectueux de l&apos;environnement grâce à des solutions énergétiques innovantes. Avec une réputation solide 
                    et une expertise reconnue, nous sommes à l&apos;avant-garde de la transition énergétique. Depuis notre création, nous avons 
                    consolidé notre position en tant qu&apos;acteur clé de l&apos;industrie, offrant des services et des produits éco-responsables 
                    qui marient parfaitement performance et durabilité.
                </p>
                <p className="mt-8">
                    Chez Green Energy Solutions, notre mission est de proposer des solutions d&apos;énergie renouvelable adaptées aux besoins 
                    individuels de nos clients. De la conception à la mise en œuvre, nous transformons les idées en réalité, en fournissant des 
                    installations solaires, des pompes à chaleur efficaces, et bien plus encore. Notre engagement envers l&apos;énergie verte va 
                    au-delà de la simple fourniture de technologies durables ; nous visons à inspirer un changement positif en encourageant 
                    l&apos;adoption de pratiques énergétiques respectueuses de l&apos;environnement.
                </p>
              </div>
              <div>
                <p>
                    Notre approche est ancrée dans l&apos;expertise. Nos professionnels hautement qualifiés combinent des connaissances 
                    approfondies avec une compréhension précise des besoins individuels de chaque client. Nous croyons en une approche sur 
                    mesure, adaptée aux particularités de chaque projet, que ce soit pour des habitations individuelles, des bâtiments 
                    commerciaux ou des installations industrielles. Grâce à notre partenariat avec des experts reconnus dans le domaine, nous 
                    offrons des solutions de pointe et des résultats exceptionnels.
                </p>
                <p className="mt-8">
                    Green Energy Solutions s&apos;inscrit résolument dans la construction d&apos;un avenir énergétique durable. Nous sommes 
                    fiers de notre contribution à la réduction des émissions de carbone et de notre soutien au développement de technologies 
                    vertes. Notre engagement envers l&apos;innovation continue, la qualité exceptionnelle et la satisfaction du client demeure 
                    au cœur de notre vision. En choisissant Green Energy Solutions, vous choisissez un partenaire dédié à l&apos;excellence 
                    environnementale et à l&apos;édification d&apos;un monde plus propre et plus prospère.
                </p>
              </div>
              <ScrollToTop/>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-green-700">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src={pv2}
            alt=""
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl text-center">Nos valeurs</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                Portées par un ensemble de valeurs essentielles, nous incarnons des principes éthiques. La mission de Green Energy Solutions est 
                d&apos;œuvrer pour un impact positif et la création d&apos;un avenir énergétique respectueux de l&apos;environnement.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-green-700">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-green-800" aria-hidden="true" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Notre équipe</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in neque vel omnis. Eos error odio. Qui
              fugit voluptatibus eum culpa.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-green-700">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="text-sm leading-6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div> */}

        {/* CTA section */}
        <div className="relative z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <Image
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src={hire}
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Rejoignez l&apos;aventure</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Rejoignez Green Energy Solutions pour façonner un avenir énergétique durable, tout en propulsant votre carrière vers de 
                    nouvelles hauteurs.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-green-700 sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex">
                  <Link href="/jobs" className="text-sm font-semibold leading-6 text-green-800">
                    Consultez nos offres d&apos;emplois <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
        <Footer/>
    </div>
  )
}
