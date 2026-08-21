'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function InvestmentSimulator() {
  const [valor, setValor] = useState('')
  const [meses, setMeses] = useState(60)
  const [taxa, setTaxa] = useState('')
  const [resultado, setResultado] = useState<{ futuro: number; rendimento: number } | null>(null)

  const calcular = () => {
    const v = parseFloat(valor.replace(',', '.'))
    const t = parseFloat(taxa.replace(',', '.')) / 100
    if (!v || !t || meses < 1) return
    const taxaMensal = Math.pow(1 + t, 1 / 12) - 1
    const futuro = v * Math.pow(1 + taxaMensal, meses)
    setResultado({ futuro, rendimento: futuro - v })
  }

  const fmt = (n: number) =>
    n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const chartBars = useMemo(() => {
    const v = parseFloat(valor.replace(',', '.')) || 5000
    const t = parseFloat(taxa.replace(',', '.')) / 100 || 0.12
    const taxaMensal = Math.pow(1 + t, 1 / 12) - 1
    const pontos = [0, 24, 60, 96, 120].map((m) => ({
      label: m === 0 ? 'Hoje' : `${m / 12} Anos`,
      value: v * Math.pow(1 + taxaMensal, m),
    }))
    const max = pontos[pontos.length - 1].value
    return pontos.map((p) => ({ ...p, pct: (p.value / max) * 100 }))
  }, [valor, taxa])

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Inputs */}
      <div className="bg-white rounded-2xl p-6 border border-l-4 border-l-[#C9951A] border-gray-100 shadow-sm">
        <div className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
              Valor para Guardar/Investir (R$)
            </label>
            <input
              type="text"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="Ex: 500,00"
              className="w-full border-b-2 border-gray-200 focus:border-[#8B35C4] outline-none py-2 text-[#1C1C2E] text-sm transition-colors bg-transparent"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
              Tempo (Meses)
            </label>
            <input
              type="range"
              min={1}
              max={120}
              value={meses}
              onChange={(e) => setMeses(Number(e.target.value))}
              className="w-full accent-[#8B35C4]"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 mês</span>
              <span className="font-semibold text-[#8B35C4]">{meses} meses</span>
              <span>120 meses</span>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
              Taxa de Juros Anual (%)
            </label>
            <input
              type="text"
              value={taxa}
              onChange={(e) => setTaxa(e.target.value)}
              placeholder="Ex: 12.5"
              className="w-full border-b-2 border-gray-200 focus:border-[#8B35C4] outline-none py-2 text-[#1C1C2E] text-sm transition-colors bg-transparent"
            />
          </div>

          <button
            onClick={calcular}
            className="w-full bg-[#8B35C4] text-white font-semibold py-3 rounded-xl hover:bg-[#7B25B4] transition-colors tracking-wide text-sm"
          >
            Calcular Futuro
          </button>
        </div>
      </div>

      {/* Resultado */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
            Valor Futuro Estimado
          </p>
          <p className="font-display font-bold text-4xl text-[#8B35C4] mb-1">
            {resultado ? fmt(resultado.futuro) : 'R$ —'}
          </p>
          {resultado && (
            <p className="text-[#2A9D8F] text-sm font-semibold">
              + {fmt(resultado.rendimento)} rendimento total
            </p>
          )}
        </div>

        {/* Chart */}
        <div className="mt-6 flex items-end gap-3 h-32">
          {chartBars.map((bar) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-lg transition-all duration-500"
                style={{
                  height: `${bar.pct}%`,
                  backgroundColor: bar.label === '10 Anos' ? '#8B35C4' : '#D8B4FE',
                  minHeight: 8,
                }}
              />
              <span className="text-[10px] text-gray-400">{bar.label}</span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
          Simulação apenas educativa, com juros compostos. Não é uma recomendação de investimento.
        </p>
      </div>
    </div>
  )
}

export default function FerramentasPage() {
  return (
    <div className="bg-[#F8F7F5]">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label-teal">Rede Reginas — UFPE + IFPE</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1C1C2E] leading-tight mb-6">
            Ferramentas<br />Financeiras
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            A autonomia financeira começa com clareza. Use nossas ferramentas gratuitas para
            planejar o orçamento da casa, precificar o seu negócio e simular o crescimento das
            suas economias.
          </p>
        </div>

        <div className="flex justify-end">
          <Image 
            src="/fotos/caruaru.jpeg"
            alt="Ferramentas Reginas"
            width={400}
            height={400}
            className="w-full h-auto max-w-sm rounded-3xl shadow-lg"
          />
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
              <Link
                href="https://emanoelluiz01.github.io/Compra-Consciente/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#8B35C4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-[#7B25B4] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Acessar App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIMULADOR ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-1">Simulador de Investimentos</h2>
          <p className="text-gray-500 text-sm italic mb-8">Use diretamente em nosso site para visualizar seu crescimento futuro.</p>
          <InvestmentSimulator />
        </div>
      </section>

      {/* ─── PLANILHA ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label-teal">Recurso Gratuito</p>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-4">
              Planilha de Orçamento<br />Reginas
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Nossa planilha foi desenhada para quem quer controlar os gastos da casa e do negócio
              com clareza. Inclui abas de orçamento mensal, fundo de reserva, cálculo de custo e
              precificação para pequenos empreendimentos.
            </p>
            <div className="flex gap-3">
              <a
                href="/recursos/planilha-orcamento-reginas.xlsx"
                download
                className="bg-[#1C1C2E] text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Download Planilha
              </a>
              <Link
                href="/recursos/tutorial-planilha-reginas.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-[#8B35C4] transition-colors px-3 flex items-center"
              >
                Ver Tutorial
              </Link>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-gray-50 rounded-2xl h-52 flex items-center justify-center border border-gray-100">
            <div className="text-center text-gray-300">
              <svg className="w-16 h-16 mx-auto mb-2 text-[#8B35C4] opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M3 14h18M10 3v18M14 3v18M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
              </svg>
              <p className="text-xs text-gray-400">Preview planilha</p>
            </div>
          </div>
        </div>
      </section>

{/* ─── PSICOLOGIA FINANCEIRA TEASER ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[#8B35C4]/5 to-[#2A9D8F]/5 rounded-3xl border border-[#8B35C4]/10 p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="section-label">Aprofunde seu Conhecimento</p>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-4">Psicologia Financeira</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Entenda como vieses cognitivos, emoções e crenças moldam suas decisões financeiras.
              Nossa seção especializada traz artigos técnicos e conceitos de finanças comportamentais
              aplicados à realidade das mulheres da nossa rede, do Recife a Igarassu.
            </p>
            <ul className="space-y-2 mb-6">
              {['Vieses Cognitivos', 'Arquitetura de Escolha', 'Desconto Hiperbólico', 'Contabilidade Mental'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B35C4]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/psicologia-financeira" className="btn-primary inline-flex items-center gap-2">
              Explorar Psicologia Financeira →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🧠', label: 'Vieses', color: '#8B35C4' },
              { icon: '🎯', label: 'Escolhas', color: '#2A9D8F' },
              { icon: '⏳', label: 'Tempo', color: '#C9951A' },
              { icon: '🌊', label: 'Emoções', color: '#8B35C4' },
            ].map((card) => (
              <div key={card.label} className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center gap-2 border border-gray-100 shadow-sm text-center">
                <span className="text-3xl">{card.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: card.color }}>{card.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAXIMIZE SUA GESTÃO ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display font-bold text-3xl text-[#1C1C2E] text-center mb-3">
            Maximize sua Gestão
          </h2>
          <p className="text-gray-500 text-sm text-center max-w-lg mx-auto mb-12">
            Temas trabalhados nas oficinas do Reginas para fortalecer as finanças da casa e do
            negócio.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
                  </svg>
                ),
                title: 'Orçamento Doméstico',
                desc: 'Organize as contas da casa, separe o essencial do supérfluo e crie o hábito de planejar mês a mês.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3v-6m-3 6v-2m9-9l-2 2m0 0l-2-2m2 2V3"/>
                  </svg>
                ),
                title: 'Precificação Justa',
                desc: 'Calcule custos fixos e variáveis do seu negócio para chegar a um preço que cobre gastos e gera lucro.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                ),
                title: 'Separação Casa/Negócio',
                desc: 'Aprenda a manter as finanças do empreendimento separadas das finanças pessoais e familiares.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#8B35C4]/10 flex items-center justify-center text-[#8B35C4] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#1C1C2E] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}