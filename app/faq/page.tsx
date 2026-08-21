'use client'
import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    q: 'O que é o Reginas?',
    a: 'O Reginas é uma rede de extensão universitária voltada à educação financeira e à autonomia de mulheres em Pernambuco. Nasceu na Universidade Federal de Pernambuco (UFPE), a partir do grupo de pesquisa Caleidoscópio, e em 2025 ganhou uma nova frente em parceria com o Instituto Federal de Pernambuco (IFPE) — Campus Igarassu, o Reginas Igarassu.',
  },
  {
    q: 'Qual a relação entre a UFPE e o IFPE no projeto?',
    a: 'São duas instituições que caminham como uma rede única. A metodologia foi desenvolvida na UFPE e é aplicada, com adaptações ao território, pela frente Reginas Igarassu do IFPE. Há mentoria, apoio técnico e troca contínua de materiais entre as duas equipes.',
  },
  {
    q: 'Preciso ser de Igarassu ou do Recife para participar?',
    a: 'As atividades acontecem em ambas as regiões: em Recife, no bairro de Joana Bezerra, e em Igarassu e cidades vizinhas, incluindo comunidades rurais e de pesca artesanal. Consulte a agenda de oficinas mais próxima de você na página de Parceiros ou entre em contato conosco.',
  },
  {
    q: 'As oficinas e cartilhas são gratuitas?',
    a: 'Sim. Todas as oficinas, minicursos, rodas de conversa e materiais educativos do Reginas são gratuitos, financiados por meio de editais de extensão como o Pibex/IFPE e pelo apoio de parceiros institucionais.',
  },
  {
    q: 'O que vou aprender nas oficinas?',
    a: 'Os temas incluem orçamento pessoal e familiar, uso consciente do crédito, precificação e gestão de custos para pequenos negócios, poupança, investimentos e finanças comportamentais — sempre com uma abordagem crítica e participativa.',
  },
  {
    q: 'Como uma instituição pode se tornar parceira do Reginas?',
    a: 'Instituições públicas, privadas ou ONGs interessadas em colaborar podem entrar em contato pela página de Parceiros. Já atuam conosco o Hub Canoa Grande, o CTEN Igarassu, a ADEMIG, o CECINE/UFPE e o Programa Mulheres de Negócios.',
  },
  {
    q: 'Posso ser voluntária ou extensionista do projeto?',
    a: 'Sim. Estudantes de graduação da UFPE e do IFPE podem atuar como extensionistas, e a comunidade em geral pode contribuir como voluntária nas ações. Veja as oportunidades abertas na página de Parceiros.',
  },
  {
    q: 'Como funciona o app Compras Conscientes?',
    a: 'É uma ferramenta interativa, ligada às pesquisas do Reginas sobre redução de compras impulsivas, que ajuda a identificar quando uma compra é realmente necessária. Ele é acessado diretamente pela página de Psicologia Financeira.',
  },
  {
    q: 'Como os resultados do projeto são avaliados?',
    a: 'Usamos instrumentos quantitativos e qualitativos, como pré e pós-testes de letramento financeiro e diários reflexivos, que embasam relatórios técnicos e artigos científicos apresentados em eventos de extensão.',
  },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="bg-[#F8F7F5]">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="section-label text-center">Jurídico</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1C1C2E] leading-tight mb-4 text-center">
          Perguntas Frequentes
        </h1>
        <p className="text-gray-500 text-sm mb-12 text-center max-w-lg mx-auto">
          Dúvidas comuns sobre a rede Reginas, a parceria UFPE + IFPE e como participar.
        </p>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold text-[#1C1C2E] text-sm md:text-base">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#8B35C4] shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Não encontrou o que procurava?</p>
          <Link href="/parceiros" className="btn-primary inline-flex items-center gap-2">
            Fale Conosco →
          </Link>
        </div>
      </section>
    </div>
  )
}
