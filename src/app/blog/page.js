import Link from "next/link";


export default function Blog() {
    return (
      <div className="bg-greyforbg px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 pt-20">
            Oups ! La page est en maintenance. Nous vous invitons à revenir plus tard
         </h2>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <Link href="/">
                <button className="uppercase text-green-700 font-bold">Accueil</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  