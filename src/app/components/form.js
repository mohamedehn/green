
import { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Form() {
  const [agreed, setAgreed] = useState(false)

  const { ref, inView } = useInView({
      threshold: 0.15,
  });

   // les variable ci-dessous permettent de récupérer les cookies et ainsi vérifier si ils sont accepté ou non
  // on interviendra ensuite sur le bouton envoyer afin de le rendre inactif si les cookies ont été rejetées ou en attente de choix
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);

  useEffect(() => {
    const cookiesAccepted = document.cookie.split(';').find(cookie => cookie.trim().startsWith('cookiesAccepted='));
    const isAccepted = cookiesAccepted && cookiesAccepted.split('=')[1] === 'true';
    setIsCookiesAccepted(isAccepted);
  }, []);

//fonction qui permettra d'afficher un message d'alerte
  function handleClick() {
    if (!isCookiesAccepted) {
      alert("Veuillez accepter les cookies pour continuer.");
    }
  }
  
  // function qui permet de bloquer l'envoi du formulaire, de supprimer les cookies du local storage, de refresh la page + afficher popUpCookies
  const acceptCookies = (event) => {
    event.preventDefault();
    localStorage.removeItem("cookiesAccepted");
    window.location.reload();
  };

  return (
    <div className={`bg-white px-6 py-16 sm:py-20 lg:px-8 max-w-6xl mx-auto rounded-xl mb-20 ${inView ? 'animate-fade-in' : 'opacity-0'} transition-opacity`} ref={ref}>
      {/* <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-green-700 sm:text-4xl">Formulaire de contact</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        </p>
      </div>
      <form action="https://formsubmit.co/contact@greenenergysolutions.fr" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-16">
        <input type="hidden" name="_next" value="https://greenenergysolutions.fr/confirmation"/>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Prénom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="objet" className="block text-sm font-semibold leading-6 text-gray-900">
              Objet
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="objet"
                required
                id="objet"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                required
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Téléphone
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone-number"
                required
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
        {isCookiesAccepted ? 
          <button
            type="submit"
            disabled={!isCookiesAccepted} // permet de vérifier si l'utilisateur à accepté ou non les cookies
            className="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer
          </button>
        :
          <div className='text-md leading-8 text-gray-900'>
            <button onClick={acceptCookies}>Merci d&apos;accepter au préalable les cookies en cliquant ici</button>
          </div>
        }
          {/* <button
            type="submit"
            className="block w-full rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Envoyer
          </button> */}
        </div>
      </form>
    </div>
  )
}
