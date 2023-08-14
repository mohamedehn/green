import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Green Energy Solutions',
  description: "Basée en région Rhône-Alpes Auvergne, Green Energy Solutions est une startup indépendantede conseils, d'études et de travaux en matière d'économie énergétique destinée aux particuliers et aux professionnelles. Soucieux des problématiques liées à l'environnement, nous avons pour ambition de promouvoir les énergies renouvelables et permettre à tout un chacun de les adopter et de faire baisser de manière significative les consommations d'énergies.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.icon',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  // Balise à valider à la fin du projet car V1 en ligne
  // verification: {
  //   google: '8V8uGzYUh9XKtj1hwf1zQ0DOA7n-MDDimrxmvAVeAek',
  // }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
