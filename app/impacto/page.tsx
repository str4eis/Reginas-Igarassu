import Image from 'next/image'

const timeline = [
  {
    year: '2018',
    title: 'O Início: Reginas na UFPE',
    description:
      'Nascimento do projeto dentro do grupo de pesquisa Caleidoscópio (UFPE), com foco em educação financeira e autonomia de mulheres do bairro de Joana Bezerra, no Recife.',
    color: '#8B35C4',
    align: 'right',
  },
  {
    year: '2025',
    title: 'Nasce o Reginas Igarassu',
    description:
      'Parceria formalizada com o IFPE Campus Igarassu (Edital Pibex, outubro/2025), estendendo a metodologia da UFPE às mulheres de áreas rurais e urbanas de Igarassu e cidades vizinhas.',
    color: '#2A9D8F',
    align: 'left',
  },
  {
    year: '2026',
    title: 'Uma Rede, Duas Frentes',
    description:
      'UFPE e IFPE passam a atuar como uma única rede — o Reginas —, unindo Recife, Igarassu e o litoral pernambucano em torno do letramento financeiro crítico.',
    color: '#C9951A',
    align: 'right',
  },
]

export default function ImpactoPage() {
  return (
    <div className="bg-[#F8F7F5]">
      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">Relatório de Impacto</p>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1C1C2E] leading-tight mb-6">
            Semeando
            <br />
            Mudanças em
            <br />
            Rede
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            O Reginas atua na linha de frente da educação financeira comunitária, transformando a
            realidade de mulheres do Recife, de Igarassu e das cidades vizinhas através do
            letramento crítico e comportamental.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-[400px] max-w-full h-96 md:w-[500px] md:h-[420px] rounded-3xl bg-[#8B35C4] overflow-hidden shadow-2xl relative">
            <Image
              src="/fotos/grupo-mulheres.jpeg"
              alt="Grupo de Mulheres do Curso para Empreendedoras"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-[#8B35C4] rounded-2xl p-8 text-white">
            <p className="font-display font-bold text-6xl mb-1">500+</p>

            <p className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-4">
              Mulheres Impactadas na Rede
            </p>

            <p className="font-display italic text-sm text-white/80 border-t border-white/20 pt-4">
              "O Reginas me deu a voz que eu não sabia que tinha."
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <div className="flex items-start gap-2 mb-1">
              <svg
                className="w-5 h-5 text-[#8B35C4] mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <div>
                <p className="font-display font-bold text-5xl text-[#1C1C2E]">
                  100+
                </p>

                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">
                  Novas Beneficiárias Diretas em Igarassu
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#2A9D8F] rounded-2xl p-8 text-white">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="font-semibold text-sm">
                Recife, Igarassu & Litoral
              </span>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Duas instituições, uma rede: UFPE e IFPE atuando lado a lado em Pernambuco.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ABRANGÊNCIA ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-8">
              Nossa Abrangência Territorial
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-[#8B35C4]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#8B35C4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1C1C2E] mb-1">
                    Recife — Joana Bezerra
                  </h4>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    Berço do projeto na UFPE, com atuação junto a mulheres da comunidade e apoio
                    do CECINE/UFPE.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                <div className="w-8 h-8 rounded-full bg-[#C9951A]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#C9951A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945"
                    />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1C1C2E] mb-1">
                    Igarassu e Cidades Vizinhas
                  </h4>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    Frente Reginas Igarassu, em parceria com o IFPE, atendendo mulheres de
                    comunidades rurais, urbanas e de pesca artesanal (marisqueiras).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="rounded-3xl overflow-hidden h-80 shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63239.32840093686!2d-34.9338096477271!3d-7.8470368965261255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab6ace8ae386b3%3A0xe4bf3f7928d2800b!2sIgarassu%2C%20PE!5e0!3m2!1spt-BR!2sbr!4v1779892922593!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            <div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2 shadow text-xs font-semibold text-[#1C1C2E] z-10">
              📍 RECIFE & IGARASSU
              <br />
              <span className="font-normal text-gray-500">
                Pernambuco
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl text-[#1C1C2E] text-center mb-16">
            Nossa Caminhada
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="space-y-16">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    item.align === 'left' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      item.align === 'right'
                        ? 'text-right'
                        : 'text-left'
                    }`}
                  >
                    <p className="font-display font-bold text-4xl text-gray-200">
                      {item.year}
                    </p>
                  </div>

                  <div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white shadow-md z-10"
                    style={{ backgroundColor: item.color }}
                  />

                  <div className="w-1/2">
                    <h3
                      className="font-display font-semibold text-lg mb-1"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── METAS DA FRENTE IGARASSU ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="section-label">Metas 2025–2026</p>
          <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">O que a Frente Igarassu se Propõe a Entregar</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <p className="font-display font-bold text-4xl text-[#8B35C4] mb-2">+30%</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ganho médio esperado na pontuação de letramento financeiro entre pré e pós-teste
              das participantes.
            </p>
          </div>
          <div className="card">
            <p className="font-display font-bold text-4xl text-[#2A9D8F] mb-2">50</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empreendedoras apoiadas na adoção de cálculo de custo, precificação justa e
              separação entre finanças do negócio e da casa.
            </p>
          </div>
          <div className="card">
            <p className="font-display font-bold text-4xl text-[#C9951A] mb-2">50%</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Meta de participantes relatando maior poder de decisão nas finanças domésticas
              após o acompanhamento.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[#8B35C4] to-[#6B1EA0] rounded-3xl p-12 text-center text-white">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
            Ajude-nos a ampliar esse impacto.
          </h2>

          <p className="text-white/80 text-sm max-w-md mx-auto mb-8">
            Sua participação pode ser o diferencial para mais uma mulher, no Recife ou em
            Igarassu, descobrir sua autonomia financeira.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:projetofinanceiramente.ifpe@gmail.com"
              className="bg-white text-[#8B35C4] px-6 py-3 rounded-full font-medium text-sm hover:bg-white/20 transition-all"
            >
              Quero ser voluntária
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
