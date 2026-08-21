import Link from 'next/link'
import Image from 'next/image'

const editais = [
  { year: '2025', title: 'Edital Pibex/IFPE — Reginas Igarassu', fonte: 'Pró-Reitoria de Extensão (PROEXT/IFPE)', status: 'Aprovado', statusColor: '#2A9D8F' },
  { year: '2025', title: '8º Seminário de Agroecologia do IFPE', fonte: 'Instituto Federal de Pernambuco', status: 'Concluído', statusColor: '#C9951A' },
  { year: '2025', title: 'FORCAMPO - CONIF', fonte: 'Instituto Federal de Pernambuco', status: 'Concluído', statusColor: '#2A9D8F' },
  { year: '2025', title: 'ENEXC', fonte: 'Instituto Federal de Pernambuco', status: 'Concluído', statusColor: '#8B35C4' },
  { year: '2025', title: 'SERNEGRA', fonte: 'Instituto Federal de Pernambuco', status: 'Concluído', statusColor: '#8B35C4' },
]

const parceiros = [
  { name: 'UFPE', logo: '/parceiros/ufpe.png' },
  { name: 'IFPE', logo: '/parceiros/ifpe.png' },
  { name: 'HUB Canoa Grande', logo: '/parceiros/hub.png' },
  { name: 'CTEN Igarassu', logo: '/parceiros/cten.png' },
  { name: 'ADEMIG', logo: '/parceiros/ademig.png' },
  { name: 'CECINE / UFPE', logo: '/parceiros/cecine.png' },
]

const transparencia = [
  { title: 'Relatório de Impacto', desc: 'Análise do crescimento social e das metas atingidas pela rede Reginas (UFPE + IFPE).', action: 'Download PDF', icon: '📄' },
  { title: 'Formulário do Projeto (Anexo I)', desc: 'Detalhamento oficial do projeto de extensão Reginas Igarassu, submetido ao Pibex/IFPE.', action: 'Download PDF', icon: '🏛️' },
  { title: 'Governança & Ética', desc: 'Nossos códigos de conduta e diretrizes de atuação institucional.', action: 'Acessar Online', icon: '🔍' },
  { title: 'Carta de Princípios', desc: 'O manifesto que guia nossas escolhas e parcerias estratégicas.', action: 'Ler Manifesto', icon: '📋' },
]

const numeros = [
  { label: 'Mulheres Impactadas (rede)', value: '+500' },
  { label: 'Novas Beneficiárias Diretas (Igarassu)', value: '100' },
  { label: 'Beneficiárias Indiretas (Igarassu)', value: '200' },
]

export default function ParceirosPage() {
  return (
    <div className="bg-[#F8F7F5]">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#8B35C4] leading-tight mb-6">
            Crescendo em Rede:<br />Nossas Parcerias
          </h1>
          <p className="font-display italic text-gray-600 text-base leading-relaxed max-w-md mb-6">
            O Reginas nasceu na UFPE e ganhou uma nova frente com o IFPE Campus Igarassu.
            Acreditamos que a transformação social é um trabalho coletivo: juntas, essas
            instituições — e os parceiros que caminham com elas — capacitam mulheres e fortalecem
            comunidades através da educação financeira.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#2A9D8F]/10 text-[#2A9D8F] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
            ✦ Rede de Impacto
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-[500px] md:h-[300px] rounded-3xl bg-[#8B35C4] overflow-hidden shadow-2xl relative">
            <Image
              src="/fotos/reginasufpe.jpeg"
              alt="Parcerias Reginas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* ─── EDITAIS ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-2">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">Editais Aprovados</h2>
              <p className="text-gray-500 text-sm mt-1 max-w-sm">
                O reconhecimento de nossa metodologia por instituições de fomento nacionais.
              </p>
            </div>
            <button className="text-sm text-[#8B35C4] font-medium hover:underline flex items-center gap-1 whitespace-nowrap ml-4">
              Ver Histórico Completo →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {editais.map((edital) => (
              <div key={edital.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm border-l-4"
                style={{ borderLeftColor: edital.statusColor }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-400">{edital.year}</span>
                  <svg className="w-5 h-5 text-[#2A9D8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-[#1C1C2E] mb-1">{edital.title}</h3>
                <p className="text-gray-400 text-xs mb-4">{edital.fonte}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: edital.statusColor }}>
                    Status: {edital.status}
                  </span>
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARCEIROS INSTITUCIONAIS ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-display font-bold text-3xl text-[#1C1C2E] text-center mb-3">Parceiros Institucionais</h2>
        <p className="text-center text-gray-500 text-sm max-w-lg mx-auto mb-10">
          UFPE e IFPE são as instituições que sustentam a rede Reginas, ao lado de parceiros
          locais em Igarassu que viabilizam a execução das oficinas e ações comunitárias.
        </p>
        <div className="w-10 h-0.5 bg-[#8B35C4] mx-auto mb-10" />
        <div className="flex flex-wrap justify-center gap-12">
          {parceiros.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                <Image 
                  src={p.logo} 
                  alt={p.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 text-center">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TRANSPARÊNCIA ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-3">Transparência & Impacto</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                A prestação de contas é o pilar da nossa credibilidade. Acesse nossos relatórios e
                o formulário oficial do projeto submetido ao IFPE.
              </p>
              <div className="border border-gray-100 rounded-2xl p-5">
                <p className="text-sm font-semibold text-[#8B35C4] mb-3">Nossos Números</p>
                {numeros.map((n) => (
                  <div key={n.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-sm text-gray-600">{n.label}</span>
                    <span className="text-sm font-bold text-[#8B35C4]">{n.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {transparencia.map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-[#1C1C2E] text-sm leading-tight">{item.title}</h4>
                    <span className="text-lg ml-2">{item.icon}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{item.desc}</p>
                  <button className="text-xs text-[#8B35C4] font-semibold flex items-center gap-1 hover:underline">
                    {item.action.startsWith('Download') ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    )}
                    {item.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[#8B35C4] to-[#6B1EA0] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="max-w-lg">
            <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-3">
              Sua instituição pode ser o próximo motor de mudança.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              Estamos buscando novos parceiros para expandir a rede Reginas para além de Recife e
              Igarassu. Vamos conversar sobre como podemos colaborar?
            </p>
          </div>
          <a href="mailto:projetofinanceiramente.ifpe@gmail.com" className="shrink-0 bg-white text-[#8B35C4] font-semibold text-sm px-8 py-4 rounded-2xl hover:shadow-xl transition-all whitespace-nowrap">
            Seja um Parceiro Institucional
          </a>
        </div>
      </section>

    </div>
  )
}
