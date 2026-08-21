import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-[#F8F7F5]">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">Rede de Extensão UFPE + IFPE</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1C1C2E] leading-tight mb-6">
            Cultivando<br />Prosperidade e<br />Autonomia.
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md mb-8">
            O Reginas nasceu na Universidade Federal de Pernambuco (UFPE) e hoje forma uma rede com
            o Instituto Federal de Pernambuco (IFPE) — Campus Igarassu, unindo Recife, Igarassu e
            cidades vizinhas em torno de um mesmo propósito: fortalecer as finanças da casa e do
            negócio de mulheres em contextos de vulnerabilidade social.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/parceiros" className="btn-primary">Junte-se a nós</Link>
            <Link href="/sobre" className="btn-outline">Saber Mais</Link>
          </div>
        </div>

        {/* Logo card */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-[400px] md:h-[400px] rounded-3xl bg-[#8B35C4] overflow-hidden shadow-2xl relative">
            <Image
              src="/logo.png"
              alt="Logo Reginas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── OBJETIVO PRINCIPAL ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#8B35C4] font-semibold mb-12 text-lg">Nosso objetivo principal</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-10 h-10 rounded-full border-2 border-[#8B35C4] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#8B35C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl text-[#1C1C2E] mb-3">Missão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Promover o letramento e a gestão financeira de mulheres e de seus negócios,
                contribuindo para uma educação financeira crítica e comportamental, para a
                autonomia econômica e para o desenvolvimento local em Recife, Igarassu e cidades
                vizinhas.
              </p>
            </div>

            <div className="card">
              <div className="w-10 h-10 rounded-full border-2 border-[#C9951A] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#C9951A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-2xl text-[#1C1C2E] mb-3">Visão</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Consolidar-se como referência em extensão universitária para o empoderamento
                feminino em Pernambuco, ampliando a rede iniciada na UFPE em parceria com o IFPE
                para novos territórios, com mulheres gerindo seus próprios futuros financeiros com
                conhecimento de causa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PSICOLOGIA FINANCEIRA DESTAQUE ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Finanças Comportamentais</p>
            <h2 className="font-display font-bold text-4xl text-[#1C1C2E] leading-tight mb-4">
              Sua relação com o<br />
              dinheiro começa<br />
              <span className="text-[#8B35C4]">na sua mente.</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              Antes de qualquer planilha ou investimento, existe um conjunto de crenças,
              emoções e vieses que moldam cada decisão financeira que você toma.
              A Psicologia Financeira é o primeiro passo para mudar de verdade.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { emoji: '🧠', label: 'Vieses Cognitivos', desc: 'Por que tomamos decisões irracionais sem perceber' },
                { emoji: '🎯', label: 'Arquitetura de Escolha', desc: 'Como organizar o ambiente para tomar melhores decisões' },
                { emoji: '🌊', label: 'Emoções e Dinheiro', desc: 'O papel do medo e da euforia nas suas finanças' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1C1C2E]">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/psicologia-financeira" className="btn-primary inline-flex items-center gap-2">
              Explorar Psicologia Financeira →
            </Link>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#8B35C4]/8 to-[#2A9D8F]/8 rounded-3xl border border-[#8B35C4]/10 p-8 space-y-3">
              {[
                { label: 'Desconto Hiperbólico', sub: 'Preferimos recompensas imediatas ao futuro', color: '#8B35C4', pct: '85%' },
                { label: 'Viés de Confirmação', sub: 'Buscamos informações que confirmam nossas crenças', color: '#2A9D8F', pct: '70%' },
                { label: 'Efeito Manada', sub: 'Seguimos as decisões financeiras de outros', color: '#C9951A', pct: '60%' },
                { label: 'Aversão à Perda', sub: 'A dor de perder é maior que o prazer de ganhar', color: '#8B35C4', pct: '90%' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-semibold text-[#1C1C2E]">{item.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                    </div>
                    <span className="text-xs font-bold ml-3" style={{ color: item.color }}>{item.pct}</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: item.pct, backgroundColor: item.color, opacity: 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Detalhe decorativo */}
            <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-2xl bg-[#C9951A] -z-10" />
          </div>
        </div>
      </section>

      {/* ─── KIT DE FERRAMENTAS ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">Kit de Ferramentas para Empoderamento</h2>
            <p className="text-gray-500 text-sm mt-1">Recursos concebidos para as necessidades das mulheres urbanas, rurais e costeiras da nossa rede.</p>
          </div>
          <Link href="/recursos" className="text-sm text-[#8B35C4] font-medium hover:underline whitespace-nowrap ml-4">
            Ver todos os recursos →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="h-40 bg-gradient-to-br from-amber-100 to-yellow-200 flex items-center justify-center">
              <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 80 80">
                <ellipse cx="40" cy="55" rx="30" ry="15" fill="#C9951A" opacity="0.4" />
                <circle cx="40" cy="35" r="18" fill="#C9951A" opacity="0.6" />
                <circle cx="40" cy="35" r="10" fill="#C9951A" opacity="0.8" />
              </svg>
            </div>
            <div className="p-5">
              <p className="text-xs text-[#2A9D8F] font-semibold mb-2">Disponível agora</p>
              <h4 className="font-display font-semibold text-lg text-[#1C1C2E] mb-2">Cartilha de Educação Financeira para Mulheres Pernambucanas - “Autonomia Financeira feminina”</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                 Esta cartilha foi feita para te ajudar, de forma simples, a entender seu dinheiro, evitar dívidas, criar o hábito de guardar e tomar decisões mais conscientes no dia a dia.
              </p>
              <a
                href="/CARTILHA%20MULHERES%20REGINAS.pdf"
                download="CARTILHA MULHERES REGINAS.pdf"
                className="text-sm text-[#8B35C4] font-medium hover:underline flex items-center gap-1"
              >
                Baixar PDF
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="h-40 bg-gradient-to-br from-teal-100 to-cyan-200 flex items-center justify-center">
              <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 80 80">
                <path d="M10 50 Q30 20 50 45 Q65 60 70 40" stroke="#2A9D8F" strokeWidth="3" fill="none" />
                <path d="M15 60 Q35 30 55 55 Q68 68 72 50" stroke="#2A9D8F" strokeWidth="2" fill="none" opacity="0.6" />
              </svg>
            </div>
            <div className="p-5">
              <h4 className="font-display font-semibold text-lg text-[#1C1C2E] mb-2">Mulheres da Água</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                Alfabetização financeira adaptada para comunidades costeiras e cooperativas de pesca artesanal em Igarassu.
              </p>
              <a href="#" className="text-sm text-[#8B35C4] font-medium hover:underline flex items-center gap-1">
                Ler online
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-[#8B35C4] rounded-2xl p-5 text-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-display font-semibold text-xl mb-2">Simulador de investimento</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Planeje seu futuro com nossa ferramenta financeira simplificada, projetada para projetos de pequena escala.
              </p>
            </div>
            <Link href="/recursos" className="mt-6 bg-white text-[#8B35C4] text-sm font-semibold py-2.5 px-5 rounded-full text-center hover:shadow-lg transition-all">
              Abrir Simulador
            </Link>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <p className="font-display italic text-lg text-[#1C1C2E] text-center">
            "Quando uma mulher cresce, toda a comunidade floresce."
          </p>
          <p className="text-center text-sm text-gray-500 mt-2">— Maria do Carmo, Líder Comunitária</p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2', label: 'Instituições em Rede (UFPE + IFPE)' },
            { value: '500+', label: 'Mulheres Alcançadas', color: 'text-[#2A9D8F]' },
            { value: '100+', label: 'Novas Beneficiárias em Igarassu' },
            { value: '4', label: 'ODS Trabalhados (1, 4, 5 e 12)' },
          ].map(({ value, label, color }) => (
            <div key={label}>
              <p className={`font-display font-bold text-4xl md:text-5xl ${color || 'text-[#1C1C2E]'} mb-1`}>{value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="bg-[#8B35C4] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
            Pronta para liderar sua própria narrativa?
          </h2>
          <p className="text-white/80 text-base mb-8 leading-relaxed">
            Junte-se à nossa rede de mulheres hoje mesmo e comece a construir o futuro que você merece.
            Nossa comunidade em Recife e em Igarassu está esperando por você.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/parceiros" className="btn-white">Junte-se à comunidade</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
