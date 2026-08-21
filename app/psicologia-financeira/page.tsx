import Link from 'next/link'
import Image from 'next/image'

const temas = [
  {
    icon: '🧠',
    color: '#8B35C4',
    title: 'Vieses Cognitivos',
    desc: 'Entenda como padrões mentais automáticos — como o viés de confirmação, o efeito manada e a aversão à perda — afetam suas decisões de investimento e poupança sem que você perceba.',
    tags: ['Aversão à Perda', 'Viés de Confirmação', 'Efeito Manada'],
  },
  {
    icon: '🎯',
    color: '#2A9D8F',
    title: 'Arquitetura de Escolha',
    desc: 'Aprenda a organizar seu ambiente financeiro de forma que as escolhas mais benéficas para o seu "eu do futuro" sejam também as mais fáceis de fazer no dia a dia.',
    tags: ['Nudge', 'Poupança Automática', 'Defaults'],
  },
  {
    icon: '⏳',
    color: '#C9951A',
    title: 'Desconto Hiperbólico',
    desc: 'Por que preferimos R$100 hoje a R$150 amanhã? Descubra como o tempo distorce nossa percepção de valor e como contornar essa armadilha mental na hora de planejar o futuro.',
    tags: ['Gratificação Imediata', 'Planejamento', 'Procrastinação'],
  },
  {
    icon: '🔄',
    color: '#8B35C4',
    title: 'Contabilidade Mental',
    desc: 'Tratamos dinheiro de formas diferentes dependendo de como ele chegou até nós. Entender essa tendência é o primeiro passo para construir uma relação mais racional com as finanças.',
    tags: ['Dinheiro Extra', 'Orçamento', 'Gastos'],
  },
  {
    icon: '🌊',
    color: '#2A9D8F',
    title: 'Emoções e Mercado',
    desc: 'Medo e euforia são os maiores inimigos do investidor. Aprenda a identificar o momento em que suas emoções estão no comando e como criar barreiras racionais de proteção.',
    tags: ['Medo', 'Euforia', 'Volatilidade'],
  },
  {
    icon: '🪞',
    color: '#C9951A',
    title: 'Excesso de Confiança',
    desc: 'A maioria das pessoas acredita que é acima da média no que faz — inclusive em finanças. Saiba como esse viés leva a riscos excessivos e como calibrar melhor sua autoavaliação.',
    tags: ['Autoconhecimento', 'Risco', 'Diversificação'],
  },
]

const artigos = [
  {
    categoria: 'Comportamento',
    titulo: 'Por que você gasta mais no cartão do que no dinheiro físico',
    tempo: '5 min',
    cor: '#8B35C4',
  },
  {
    categoria: 'Planejamento',
    titulo: 'O método dos envelopes e a psicologia por trás dele',
    tempo: '7 min',
    cor: '#2A9D8F',
  },
  {
    categoria: 'Investimentos',
    titulo: 'Efeito IKEA: por que amamos o que construímos com nossas mãos',
    tempo: '6 min',
    cor: '#C9951A',
  },
  {
    categoria: 'Comunidade',
    titulo: 'Finanças coletivas: o poder da poupança em grupo nas comunidades pesqueiras',
    tempo: '8 min',
    cor: '#8B35C4',
  },
]

export default function PsicologiaFinanceiraPage() {
  return (
    <div className="bg-[#F8F7F5]">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">Educação Financeira</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#8B35C4]">Psicologia</span><br />
            <span className="text-[#1C1C2E]">Financeira</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md mb-6">
            A relação com o dinheiro é, acima de tudo, uma relação com nossas emoções, crenças e
            expectativas de futuro. Entender os mecanismos por trás das nossas decisões financeiras
            é o primeiro passo para transformá-las.
          </p>
          <blockquote className="border-l-4 border-[#8B35C4] pl-4 py-2 italic text-gray-500 text-sm font-display leading-relaxed">
            "Não somos tão racionais quanto pensamos — e reconhecer isso é o ato mais inteligente que podemos ter."
          </blockquote>
        </div>

        {/* Visual decorativo */}
        <div className="flex justify-end">
          <div className="relative w-full max-w-sm">
            <div className="rounded-3xl bg-gradient-to-br from-[#8B35C4]/10 to-[#2A9D8F]/10 border border-[#8B35C4]/20 h-80 flex items-center justify-center">
              <div className="text-center space-y-3 px-8">
                {['Vieses Cognitivos', 'Arquitetura de Escolha', 'Desconto Hiperbólico', 'Contabilidade Mental'].map((item, i) => (
                  <div key={item}
                    className="bg-white rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 text-left flex items-center gap-2"
                    style={{ marginLeft: i % 2 === 1 ? '1.5rem' : 0 }}>
                    <div className="w-2 h-2 rounded-full bg-[#8B35C4] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-2xl bg-[#C9951A] -z-10" />
          </div>
        </div>
      </section>

      {/* ─── TEMAS PRINCIPAIS ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B35C4] font-semibold mb-2">Finanças Comportamentais</p>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">Os Grandes Temas</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
              Conceitos da economia comportamental aplicados à realidade das mulheres da rede Reginas, do Recife a Igarassu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {temas.map((tema) => (
              <div key={tema.title} className="card hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{tema.icon}</span>
                  <div className="w-2 h-8 rounded-full" style={{ backgroundColor: tema.color }} />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#1C1C2E] mb-2 group-hover:text-[#8B35C4] transition-colors">
                  {tema.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{tema.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tema.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE DESTAQUE ─── */}
      <section className="bg-[#1C1C2E] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <p className="font-display text-5xl text-[#8B35C4] opacity-60 mb-4">"</p>
          <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed mb-6">
            À medida que gastamos dinheiro, devemos ter a coragem de fazer uma autoavaliação e admitir que emoção está conduzindo nossos gastos.
          </blockquote>
          <p className="text-sm text-gray-400 uppercase tracking-widest">Deborah Smith Pegues</p>
        </div>
      </section>

        {/* ─── APP COMPRAS CONSCIENTES ─── */}
             <section className="max-w-7xl mx-auto px-6 py-20">
               <div className="bg-gradient-to-br from-[#8B35C4]/5 to-[#2A9D8F]/5 rounded-3xl p-10 border border-gray-100 shadow-sm grid md:grid-cols-2 gap-10 items-center">
                 {/* Preview */}
                 <div className="bg-white rounded-2xl h-72 flex items-center justify-center border border-gray-100 order-2 md:order-1 overflow-hidden">
                   <Image 
                     src="/fotos/escala.png" 
                     alt="Preview do app Compras Conscientes"
                     width={400}
                     height={400}
                     className="w-full h-full object-cover"
                   />
                 </div>
       
                 <div className="order-1 md:order-2">
                   <p className="section-label-teal">App Interativo</p>
                   <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-4">
                     Compras Conscientes
                   </h2>
                   <p className="text-gray-600 text-sm leading-relaxed mb-6">
                     Controle impulsos e tome decisões de compra mais assertivas. Nosso app utiliza uma escala comportamental 
                     para ajudá-la a identificar quando uma compra é realmente necessária. Pause, reflita e compre com propósito.
                   </p>
                   <div className="flex gap-3">
                     <Link href="https://emanoelluiz01.github.io/Compra-Consciente/" target="_blank" className="bg-[#8B35C4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#7B25B4] transition-colors">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                       </svg>
                       Acessar App
                     </Link>
                   </div>
                 </div>
               </div>
             </section>

      {/* ─── ARTIGOS ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">Artigos Técnicos</h2>
            <p className="text-gray-500 text-sm mt-1">Leituras selecionadas para aprofundar seu entendimento.</p>
          </div>
          <button className="text-sm text-[#8B35C4] font-medium hover:underline whitespace-nowrap ml-4">
            Ver todos →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {artigos.map((artigo) => (
            <div key={artigo.titulo}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 rounded-full shrink-0 mt-1" style={{ backgroundColor: artigo.cor }} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: artigo.cor }}>
                    {artigo.categoria}
                  </p>
                  <h4 className="font-semibold text-[#1C1C2E] text-sm leading-snug group-hover:text-[#8B35C4] transition-colors">
                    {artigo.titulo}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{artigo.tempo} de leitura</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-300 group-hover:text-[#8B35C4] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-[#8B35C4] to-[#6B1EA0] rounded-3xl p-12 text-center text-white">
          <h2 className="font-display font-bold text-3xl mb-3">Mantenha-se Atualizada</h2>
          <p className="text-white/80 text-sm max-w-md mx-auto mb-8">
            Receba novos artigos, estudos de caso e convites para workshops exclusivos sobre
            psicologia financeira e autonomia feminina.
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
