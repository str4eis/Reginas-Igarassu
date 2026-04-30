import Link from 'next/link'

export default function RecursosPage() {
  return (
    <div className="bg-[#F8F7F5]">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#2A9D8F]/10 text-[#2A9D8F] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            Educação e Conhecimento
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#8B35C4]">Recursos que</span><br />
            <span className="text-[#2A9D8F]">Empoderam a</span><br />
            <span className="text-[#1C1C2E]">Curadoria.</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Nossa biblioteca digital oferece ferramentas práticas e fundamentação teórica para
            fortalecer a autonomia das mulheres no campo e nas águas.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-end">
          <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 h-72 flex items-center justify-center">
            <div className="text-center text-white/30">
              <svg className="w-20 h-20 mx-auto mb-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <p className="text-sm uppercase tracking-widest">Resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARTILHAS ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-2">
            <div>
              <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">Cartilhas de Orientação</h2>
              <p className="text-gray-500 text-sm mt-1 max-w-sm">
                Guias fundamentais desenvolvidos para as realidades locais, focados em direitos, autonomia e sustentabilidade.
              </p>
            </div>
            <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[
              {
                tag: 'Edição 2024',
                title: 'Cartilha Mulheres do Campo',
                desc: 'Exploração aprofundada sobre gestão de recursos rurais, cooperativismo e sucessão familiar.',
                size: '4.2 MB',
                color: 'from-green-100 to-emerald-200',
                accentColor: '#2A9D8F',
              },
              {
                tag: 'Edição 2024',
                title: 'Cartilha Mulheres das Águas',
                desc: 'Direitos das comunidades pesqueiras, preservação ambiental e comercialização artesanal.',
                size: '3.8 MB',
                color: 'from-teal-100 to-cyan-200',
                accentColor: '#2A9D8F',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className={`w-24 h-28 rounded-xl bg-gradient-to-br ${item.color} shrink-0 flex items-center justify-center`}>
                  <svg className="w-10 h-10 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: item.accentColor }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#C9951A] mb-1">{item.tag}</p>
                    <h3 className="font-display font-semibold text-lg text-[#1C1C2E] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <button className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-[#2A9D8F] hover:underline">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    Baixar PDF ({item.size})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINANÇAS COMPORTAMENTAIS ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl mb-2">
              <span className="text-[#8B35C4]">Finanças</span><br />
              <span className="text-[#8B35C4]">Comportamentais</span>
            </h2>
            <p className="font-display italic text-gray-500 text-sm mb-6 leading-relaxed">
              "A relação com o dinheiro é, acima de tudo, uma relação com as nossas emoções e expectativas de futuro."
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: '🧠',
                  title: 'Vieses Cognitivos',
                  desc: 'Entenda como padrões mentais automáticos podem afetar suas decisões de investimento e poupança.',
                },
                {
                  icon: '🎯',
                  title: 'Arquitetura de Escolha',
                  desc: 'Aprenda a organizar seu ambiente financeiro para facilitar escolhas que beneficiem seu eu do futuro.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#8B35C4]/10 flex items-center justify-center text-base shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C2E] text-sm mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-[#1C1C2E] text-white text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Acessar Artigos Técnicos →
            </button>
          </div>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-black h-80 flex items-center justify-center">
            <div className="text-center text-white/20">
              <svg className="w-20 h-20 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={1}/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3"/>
              </svg>
              <p className="text-sm">Imagem financas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-[#8B35C4] to-[#6B1EA0] rounded-3xl p-12 text-center text-white">
          <h2 className="font-display font-bold text-3xl mb-3">Mantenha-se Atualizada</h2>
          <p className="text-white/80 text-sm max-w-md mx-auto mb-8">
            Receba novos materiais, estudos de caso e convites para workshops exclusivos sobre
            gestão e autonomia feminina.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/50 text-sm outline-none focus:ring-2 focus:ring-white/40"
            />
            <button className="bg-white text-[#8B35C4] font-semibold text-sm px-6 py-3 rounded-full hover:shadow-lg transition-all whitespace-nowrap">
              Inscrever
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
