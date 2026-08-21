import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Reginas — Fortalecendo as finanças da casa e do negócio',
  description:
    'Projeto de educação financeira e autonomia feminina nascido na UFPE, hoje em rede com o IFPE Campus Igarassu, atuando em Recife, Igarassu e cidades vizinhas de Pernambuco.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-[#F8F7F5]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
