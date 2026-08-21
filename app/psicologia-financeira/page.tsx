'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'

type Tema = {
  icon: string
  color: string
  title: string
  desc: string
  tags: string[]
  oQueE: string
  exemplo: string
  comoIdentificar: string[]
}

const temas: Tema[] = [
  {
    icon: '🧠',
    color: '#8B35C4',
    title: 'Vieses Cognitivos',
    desc: 'Padrões mentais automáticos podem influenciar nossas decisões financeiras sem que percebamos.',
    tags: ['Aversão à Perda', 'Viés de Confirmação', 'Efeito Manada'],
    oQueE:
      'Vieses cognitivos são atalhos mentais que usamos para tomar decisões mais rapidamente. Eles podem ser úteis, mas também podem nos levar a escolhas financeiras pouco conscientes.',
    exemplo:
      'Você vê várias pessoas comprando um investimento e decide fazer o mesmo sem analisar se ele realmente faz sentido para sua realidade.',
    comoIdentificar: [
      'Tomar decisões porque todo mundo está fazendo.',
      'Evitar uma escolha apenas pelo medo de perder.',
      'Buscar somente informações que confirmam o que você já pensa.',
    ],
  },
  {
    icon: '🎯',
    color: '#2A9D8F',
    title: 'Arquitetura de Escolha',
    desc: 'A forma como organizamos nosso ambiente pode facilitar ou dificultar boas decisões financeiras.',
    tags: ['Nudge', 'Poupança Automática', 'Defaults'],
    oQueE:
      'Arquitetura de escolha é a maneira como as opções são apresentadas e organizadas. Pequenas mudanças no ambiente podem tornar um comportamento desejado mais fácil.',
    exemplo:
      'Programar automaticamente uma pequena quantia para uma meta faz com que guardar dinheiro aconteça antes que você tenha a oportunidade de gastá-lo.',
    comoIdentificar: [
      'Perceber quais opções são mais fáceis de escolher.',
      'Criar mecanismos automáticos para hábitos positivos.',
      'Organizar o ambiente para reduzir decisões impulsivas.',
    ],
  },
  {
    icon: '⏳',
    color: '#C9951A',
    title: 'Desconto Hiperbólico',
    desc: 'Nossa percepção de valor muda quando comparamos recompensas imediatas com benefícios futuros.',
    tags: ['Gratificação Imediata', 'Planejamento', 'Procrastinação'],
    oQueE:
      'O desconto hiperbólico ajuda a explicar por que uma recompensa menor agora pode parecer mais atraente do que uma recompensa maior no futuro.',
    exemplo:
      'Escolher gastar R$ 100 hoje em vez de guardar esse valor para uma meta que traria um benefício maior daqui a alguns meses.',
    comoIdentificar: [
      'Priorizar recompensas imediatas.',
      'Adiar constantemente metas financeiras.',
      'Ter dificuldade para guardar dinheiro pensando no futuro.',
    ],
  },
  {
    icon: '🔄',
    color: '#8B35C4',
    title: 'Contabilidade Mental',
    desc: 'Podemos tratar o mesmo dinheiro de maneiras diferentes dependendo de onde ele veio ou para que foi destinado.',
    tags: ['Dinheiro Extra', 'Orçamento', 'Gastos'],
    oQueE:
      'A contabilidade mental acontece quando criamos “caixinhas” mentais para o dinheiro. Isso pode fazer com que valores iguais sejam percebidos de maneiras diferentes.',
    exemplo:
      'Gastar com facilidade um dinheiro recebido de presente ou de uma renda extra, enquanto o salário é tratado com muito mais cuidado.',
    comoIdentificar: [
      'Tratar dinheiro extra como “dinheiro que pode ser gasto”.',
      'Criar regras diferentes para cada fonte de renda.',
      'Perder a visão do orçamento total ao separar demais o dinheiro.',
    ],
  },
  {
    icon: '🌊',
    color: '#2A9D8F',
    title: 'Emoções e Mercado',
    desc: 'Medo, ansiedade e euforia podem alterar nossa percepção de risco e influenciar decisões financeiras.',
    tags: ['Medo', 'Euforia', 'Volatilidade'],
    oQueE:
      'Nossas emoções podem interferir na forma como avaliamos riscos e oportunidades. Reconhecer esse estado emocional ajuda a criar uma pausa antes de decidir.',
    exemplo:
      'Vender um investimento rapidamente porque uma queda no mercado causou medo, sem avaliar se a decisão está alinhada ao planejamento.',
    comoIdentificar: [
      'Tomar decisões durante momentos de forte ansiedade.',
      'Sentir necessidade de agir imediatamente.',
      'Mudar de estratégia conforme o humor do momento.',
    ],
  },
  {
    icon: '🪞',
    color: '#C9951A',
    title: 'Excesso de Confiança',
    desc: 'Podemos superestimar nosso conhecimento, capacidade de previsão ou controle sobre os resultados.',
    tags: ['Autoconhecimento', 'Risco', 'Diversificação'],
    oQueE:
      'O excesso de confiança acontece quando acreditamos ter mais conhecimento ou controle do que realmente temos, o que pode aumentar a exposição a riscos.',
    exemplo:
      'Acreditar que consegue prever quais investimentos vão subir e concentrar grande parte do dinheiro em uma única escolha.',
    comoIdentificar: [
      'Subestimar a possibilidade de errar.',
      'Assumir riscos maiores por confiar demais nas próprias previsões.',
      'Ignorar informações que contradizem sua expectativa.',
    ],
  },
]

const perguntas = [
  {
    pergunta: 'Você recebeu R$ 300 inesperados. O que faria primeiro?',
    opcoes: [
      { texto: 'Compraria algo que estou querendo há algum tempo.', tipo: 'impulsividade' },
      { texto: 'Guardaria todo o valor para uma meta futura.', tipo: 'planejamento' },
      { texto: 'Separaria uma parte para aproveitar e outra para guardar.', tipo: 'consciencia' },
      { texto: 'Ficaria pensando bastante antes de decidir.', tipo: 'emocional' },
    ],
  },
  {
    pergunta: 'Quando aparece uma promoção de algo que você gosta, você costuma...',
    opcoes: [
      { texto: 'Comprar logo para não perder a oportunidade.', tipo: 'impulsividade' },
      { texto: 'Verificar primeiro se isso cabe no orçamento.', tipo: 'planejamento' },
      { texto: 'Perguntar se realmente precisava antes da promoção.', tipo: 'consciencia' },
      { texto: 'Sentir ansiedade pensando que pode se arrepender depois.', tipo: 'emocional' },
    ],
  },
  {
    pergunta: 'Quando precisa tomar uma decisão financeira importante, você...',
    opcoes: [
      { texto: 'Prefere resolver rapidamente e seguir em frente.', tipo: 'impulsividade' },
      { texto: 'Compara opções e pensa nas consequências futuras.', tipo: 'planejamento' },
      { texto: 'Procura entender como a decisão afeta suas prioridades.', tipo: 'consciencia' },
      { texto: 'Fica insegura e demora para escolher.', tipo: 'emocional' },
    ],
  },
  {
    pergunta: 'Quando recebe dinheiro extra, você tende a pensar...',
    opcoes: [
      { texto: '“Posso usar porque esse dinheiro não estava no orçamento.”', tipo: 'impulsividade' },
      { texto: '“Posso direcionar esse valor para uma meta.”', tipo: 'planejamento' },
      { texto: '“Vou decidir com base no que é mais importante agora.”', tipo: 'consciencia' },
      { texto: '“Espero não gastar e depois me arrepender.”', tipo: 'emocional' },
    ],
  },
  {
    pergunta: 'Quando seus gastos aumentam em um mês, você normalmente...',
    opcoes: [
      { texto: 'Tenta compensar depois e segue normalmente.', tipo: 'impulsividade' },
      { texto: 'Revisa o orçamento para entender o que aconteceu.', tipo: 'planejamento' },
      { texto: 'Identifica quais gastos realmente valeram a pena.', tipo: 'consciencia' },
      { texto: 'Fica preocupada ou culpada com o resultado.', tipo: 'emocional' },
    ],
  },
  {
    pergunta: 'Pensando no futuro financeiro, o que mais combina com você?',
    opcoes: [
      { texto: 'Prefiro aproveitar o presente e resolver depois.', tipo: 'impulsividade' },
      { texto: 'Gosto de estabelecer metas e acompanhar meu progresso.', tipo: 'planejamento' },
      { texto: 'Quero fazer escolhas alinhadas ao que é importante para mim.', tipo: 'consciencia' },
      { texto: 'O futuro financeiro às vezes me deixa bastante preocupada.', tipo: 'emocional' },
    ],
  },
]

const perfilInfo = {
  impulsividade: {
    titulo: 'Você tende a buscar recompensas no presente',
    descricao:
      'Suas respostas indicam uma maior tendência a decisões rápidas e à valorização do benefício imediato. Criar pequenas pausas antes de comprar pode ajudar a transformar impulso em escolha consciente.',
    dica: 'Experimente esperar 24 horas antes de realizar compras não essenciais.',
  },
  planejamento: {
    titulo: 'Você demonstra uma forte orientação para o futuro',
    descricao:
      'Suas respostas mostram uma tendência a pensar em metas, consequências e organização. Seu próximo passo pode ser equilibrar planejamento com flexibilidade para não transformar o orçamento em uma fonte de pressão.',
    dica: 'Revise suas metas regularmente e permita espaço para pequenos gastos de prazer.',
  },
  consciencia: {
    titulo: 'Você tende a refletir antes de decidir',
    descricao:
      'Suas respostas indicam uma boa disposição para relacionar o dinheiro às suas prioridades. Esse comportamento pode ser fortalecido observando também as emoções que aparecem antes de cada decisão.',
    dica: 'Antes de uma compra, pergunte: isso aproxima ou afasta a minha vida do que considero importante?',
  },
  emocional: {
    titulo: 'Suas emoções parecem ter um papel importante nas decisões',
    descricao:
      'Suas respostas indicam que sentimentos como ansiedade, medo ou preocupação podem aparecer com força quando o assunto é dinheiro. Reconhecer a emoção antes de agir é um primeiro passo importante.',
    dica: 'Quando sentir ansiedade financeira, faça uma pausa e escreva o que está sentindo antes de tomar uma decisão.',
  },
}

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
  const [temaSelecionado, setTemaSelecionado] = useState<Tema | null>(null)
  const [mapaAberto, setMapaAberto] = useState(false)
  const [resultadoAberto, setResultadoAberto] = useState(false)
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  const [respostas, setRespostas] = useState<string[]>([])

  const resultado = useMemo(() => {
    if (respostas.length === 0) return null

    const contagem = {
      impulsividade: 0,
      planejamento: 0,
      consciencia: 0,
      emocional: 0,
    }

    respostas.forEach((tipo) => {
      contagem[tipo as keyof typeof contagem] += 1
    })

    const total = respostas.length
    const porcentagens = Object.fromEntries(
      Object.entries(contagem).map(([key, value]) => [
        key,
        Math.round((value / total) * 100),
      ]),
    ) as typeof contagem

    const principal = Object.entries(porcentagens).sort((a, b) => b[1] - a[1])[0][0] as keyof typeof perfilInfo

    return {
      porcentagens,
      principal,
      info: perfilInfo[principal],
    }
  }, [respostas])

  function selecionarResposta(tipo: string) {
    const novasRespostas = [...respostas, tipo]
    setRespostas(novasRespostas)

    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(perguntaAtual + 1)
    } else {
      setMapaAberto(false)
      setResultadoAberto(true)
    }
  }

  function iniciarMapa() {
    setPerguntaAtual(0)
    setRespostas([])
    setResultadoAberto(false)
    setMapaAberto(true)
  }

  function fecharMapa() {
    setMapaAberto(false)
  }

  return (
    <div className="bg-[#F8F7F5] min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">Educação Financeira</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#8B35C4]">Psicologia</span>
            <br />
            <span className="text-[#1C1C2E]">Financeira</span>
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-md mb-6">
            Entender dinheiro não é apenas aprender a fazer contas. Nossas emoções,
            crenças, hábitos e expectativas sobre o futuro também participam de
            cada decisão financeira.
          </p>

          <button
            onClick={iniciarMapa}
            className="bg-[#8B35C4] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#7B25B4] transition-colors"
          >
            Descobrir meu comportamento →
          </button>

          <blockquote className="border-l-4 border-[#8B35C4] pl-4 py-2 mt-6 italic text-gray-500 text-sm font-display leading-relaxed">
            “Não somos tão racionais quanto pensamos — reconhecer isso é um
            primeiro passo para fazer escolhas mais conscientes.”
          </blockquote>
        </div>

        <div className="flex justify-end">
          <div className="relative w-full max-w-sm">
            <div className="rounded-3xl bg-gradient-to-br from-[#8B35C4]/10 to-[#2A9D8F]/10 border border-[#8B35C4]/20 h-80 flex items-center justify-center">
              <div className="text-center space-y-3 px-8 w-full">
                {['Pensamentos', 'Emoções', 'Decisões', 'Comportamentos'].map((item, i) => (
                  <div
                    key={item}
                    className="bg-white rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-100 text-left flex items-center gap-2"
                    style={{ marginLeft: i % 2 === 1 ? '1.5rem' : 0 }}
                  >
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

      {/* O QUE É PSICOLOGIA FINANCEIRA */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#8B35C4] font-semibold mb-2">Entenda antes de transformar</p>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-4">
              O que é Psicologia Financeira?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              É o estudo de como pensamentos, emoções, hábitos e padrões de comportamento
              influenciam a forma como lidamos com o dinheiro. Conhecer esses mecanismos
              ajuda a perceber que nem toda decisão financeira é puramente racional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🧠',
                title: 'Pensamentos',
                text: 'Crenças, expectativas e interpretações que construímos sobre dinheiro.',
              },
              {
                icon: '❤️',
                title: 'Emoções',
                text: 'Medo, ansiedade, prazer, culpa e segurança podem aparecer antes de uma decisão.',
              },
              {
                icon: '🔄',
                title: 'Comportamentos',
                text: 'Hábitos de consumo, planejamento, poupança e tomada de decisão.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-[#F8F7F5] p-6"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display font-semibold text-lg text-[#1C1C2E] mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
            {['Pensamento', 'Emoção', 'Decisão', 'Comportamento', 'Resultado'].map(
              (item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-[#8B35C4]/10 text-[#8B35C4]">
                    {item}
                  </span>
                  {index < 4 && <span className="text-gray-300">→</span>}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* MAPA DE COMPORTAMENTO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-[#1C1C2E] p-8 md:p-12 text-white grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#C9951A] font-semibold mb-2">Autoconhecimento financeiro</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Descubra o seu mapa de comportamento
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl mb-6">
              Responda algumas situações do dia a dia e veja quais padrões aparecem
              com mais força nas suas decisões financeiras. O resultado é educativo
              e serve como ponto de partida para refletir sobre seus hábitos.
            </p>

            <button
              onClick={iniciarMapa}
              className="bg-[#8B35C4] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#7B25B4] transition-colors"
            >
              Fazer meu mapa financeiro →
            </button>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">
              Exemplo de resultado
            </p>

            {[
              ['Impulsividade', 70],
              ['Planejamento', 90],
              ['Controle emocional', 50],
              ['Consumo consciente', 80],
            ].map(([nome, valor]) => (
              <div key={nome as string} className="mb-4 last:mb-0">
                <div className="flex justify-between text-xs mb-2">
                  <span>{nome}</span>
                  <span className="text-gray-400">{valor}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#8B35C4]"
                    style={{ width: `${valor}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRANDES TEMAS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B35C4] font-semibold mb-2">Finanças Comportamentais</p>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">
              Os Grandes Temas
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
              Clique em um tema para entender o conceito, ver um exemplo e descobrir
              como ele pode aparecer no cotidiano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {temas.map((tema) => (
              <button
                key={tema.title}
                onClick={() => setTemaSelecionado(tema)}
                className="card hover:shadow-md transition-all cursor-pointer group text-left hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{tema.icon}</span>
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ backgroundColor: tema.color }}
                  />
                </div>

                <h3 className="font-display font-semibold text-lg text-[#1C1C2E] mb-2 group-hover:text-[#8B35C4] transition-colors">
                  {tema.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {tema.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {tema.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 text-xs font-semibold text-[#8B35C4]">
                  Explorar tema →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TEORIA → PRÁTICA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-[#8B35C4]/5 to-[#2A9D8F]/5 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-2xl h-72 flex items-center justify-center border border-gray-100 overflow-hidden">
            <Image
              src="/fotos/escala.png"
              alt="Preview do app Compras Conscientes"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="section-label-teal">Da teoria para a prática</p>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-4">
              Compras Conscientes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Antes de comprar, pare e reflita. O Compras Conscientes utiliza uma
              escala comportamental para ajudar você a identificar quando uma compra
              é realmente necessária.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Use a ferramenta para transformar o conhecimento sobre comportamento
              financeiro em uma pausa prática antes da próxima compra.
            </p>

            <Link
              href="https://emanoelluiz01.github.io/Compra-Consciente/"
              target="_blank"
              className="bg-[#8B35C4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl inline-flex items-center gap-2 hover:bg-[#7B25B4] transition-colors"
            >
              Acessar Compras Conscientes
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ARTIGOS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[#8B35C4] font-semibold text-sm mb-2">Aprofunde seu conhecimento</p>
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">
              Continue aprendendo
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Conteúdos para entender melhor sua relação com o dinheiro.
            </p>
          </div>

          <button className="text-sm text-[#8B35C4] font-medium hover:underline whitespace-nowrap ml-4">
            Ver todos →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {artigos.map((artigo) => (
            <div
              key={artigo.titulo}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between gap-4 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-1 h-12 rounded-full shrink-0 mt-1"
                  style={{ backgroundColor: artigo.cor }}
                />

                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: artigo.cor }}
                  >
                    {artigo.categoria}
                  </p>

                  <h4 className="font-semibold text-[#1C1C2E] text-sm leading-snug group-hover:text-[#8B35C4] transition-colors">
                    {artigo.titulo}
                  </h4>

                  <p className="text-gray-400 text-xs mt-1">{artigo.tempo} de leitura</p>
                </div>
              </div>

              <svg
                className="w-5 h-5 text-gray-300 group-hover:text-[#8B35C4] transition-colors shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-[#8B35C4] to-[#6B1EA0] rounded-3xl p-12 text-center text-white">
          <h2 className="font-display font-bold text-3xl mb-3">Mantenha-se Atualizada</h2>
          <p className="text-white/80 text-sm max-w-md mx-auto mb-8">
            Receba novos artigos, estudos de caso e convites para workshops sobre
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
      </section> */}

      {/* MODAL DOS TEMAS */}
      {temaSelecionado && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setTemaSelecionado(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-7 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{temaSelecionado.icon}</span>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: temaSelecionado.color }}
                    >
                      Finanças comportamentais
                    </p>
                    <h2 className="font-display font-bold text-2xl text-[#1C1C2E]">
                      {temaSelecionado.title}
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setTemaSelecionado(null)}
                  aria-label="Fechar"
                  className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[#1C1C2E] mb-2">O que é?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {temaSelecionado.oQueE}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F8F7F5] p-5">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: temaSelecionado.color }}
                  >
                    💡 Exemplo do cotidiano
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {temaSelecionado.exemplo}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#1C1C2E] mb-3">
                    Como identificar?
                  </h3>

                  <ul className="space-y-2">
                    {temaSelecionado.comoIdentificar.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <span className="text-[#8B35C4] mt-0.5">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {temaSelecionado.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-500 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setTemaSelecionado(null)}
                className="mt-8 w-full bg-[#1C1C2E] text-white font-semibold py-3 rounded-xl hover:bg-[#2a2a42] transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DO MAPA */}
      {mapaAberto && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-7 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#8B35C4] mb-1">
                    Mapa de comportamento
                  </p>
                  <p className="text-gray-400 text-sm">
                    Pergunta {perguntaAtual + 1} de {perguntas.length}
                  </p>
                </div>

                <button
                  onClick={fecharMapa}
                  aria-label="Fechar"
                  className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-[#8B35C4] rounded-full transition-all"
                  style={{
                    width: `${((perguntaAtual + 1) / perguntas.length) * 100}%`,
                  }}
                />
              </div>

              <h2 className="font-display font-bold text-2xl text-[#1C1C2E] leading-snug mb-6">
                {perguntas[perguntaAtual].pergunta}
              </h2>

              <div className="space-y-3">
                {perguntas[perguntaAtual].opcoes.map((opcao) => (
                  <button
                    key={opcao.texto}
                    onClick={() => selecionarResposta(opcao.tipo)}
                    className="w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-[#8B35C4] hover:bg-[#8B35C4]/5 transition-all text-sm text-gray-700"
                  >
                    {opcao.texto}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-6 text-center">
                Não existe resposta certa ou errada. Escolha a opção que mais se
                aproxima de você.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DO RESULTADO */}
      {resultadoAberto && resultado && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setResultadoAberto(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-7 md:p-8">
              <div className="flex justify-between items-start mb-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#8B35C4] mb-1">
                    Seu resultado
                  </p>
                  <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">
                    Seu mapa financeiro
                  </h2>
                </div>

                <button
                  onClick={() => setResultadoAberto(false)}
                  aria-label="Fechar"
                  className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  ['Impulsividade', resultado.porcentagens.impulsividade],
                  ['Planejamento', resultado.porcentagens.planejamento],
                  ['Consumo consciente', resultado.porcentagens.consciencia],
                  ['Sensibilidade emocional', resultado.porcentagens.emocional],
                ].map(([nome, valor]) => (
                  <div key={nome as string} className="bg-[#F8F7F5] rounded-2xl p-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-700">{nome}</span>
                      <span className="text-gray-400">{valor}%</span>
                    </div>

                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#8B35C4] rounded-full"
                        style={{ width: `${valor}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#8B35C4]/5 border border-[#8B35C4]/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#8B35C4] mb-2">
                  Seu principal ponto de atenção
                </p>

                <h3 className="font-display font-bold text-xl text-[#1C1C2E] mb-3">
                  {resultado.info.titulo}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {resultado.info.descricao}
                </p>

                <div className="bg-white rounded-xl p-4">
                  <p className="text-xs font-semibold text-[#2A9D8F] mb-1">
                    🌱 Experimente
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {resultado.info.dica}
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                Este mapa é uma ferramenta educativa de reflexão e não representa
                diagnóstico psicológico ou avaliação financeira profissional.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <button
                  onClick={() => {
                    setResultadoAberto(false)
                    iniciarMapa()
                  }}
                  className="flex-1 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Refazer mapa
                </button>

                <Link
                  href="https://emanoelluiz01.github.io/Compra-Consciente/"
                  target="_blank"
                  className="flex-1 bg-[#8B35C4] text-white text-center font-semibold py-3 rounded-xl hover:bg-[#7B25B4] transition-colors"
                >
                  Experimentar Compras Conscientes
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
