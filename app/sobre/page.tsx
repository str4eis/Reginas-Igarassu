import Link from 'next/link'
import Image from 'next/image'

const letras = [
  { letra: 'R', significado: 'Resiliência, Resistência e Renovação', desc: 'essenciais à jornada feminina' },
  { letra: 'E', significado: 'Empreendedorismo, Empoderamento, Educação e Extensão', desc: 'como ferramentas de transformação socioeconômica' },
  { letra: 'G', significado: 'Gênero, Grupo e Garra', desc: 'no avanço da caminhada coletiva' },
  { letra: 'I', significado: 'Inclusão e Independência', desc: 'como objetivos inegociáveis' },
  { letra: 'N', significado: 'Mulheres Negras', desc: 'como núcleo prioritário da ação' },
  { letra: 'A', significado: 'Autonomia', desc: 'acadêmica e pessoal' },
  { letra: 'S', significado: 'Sociedade e Sustentabilidade', desc: 'e a representatividade do plural' },
]

export default function SobrePage() {
  return (
    <div className="bg-[#F8F7F5]">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">Nossa História</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1C1C2E] leading-tight mb-6">
            Da UFPE para{' '}
            <em className="italic text-[#8B35C4]">Igarassu.</em>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md mb-6">
            O Reginas nasceu na Universidade Federal de Pernambuco (UFPE), dentro do grupo de
            pesquisa Caleidoscópio: Perspectivas em Finanças e Contabilidade, coordenado pela
            professora Kécia Galvão. Em 2025, formalizou-se a parceria com o Instituto Federal de
            Pernambuco (IFPE) — Campus Igarassu, dando origem à frente Reginas Igarassu. Hoje as
            duas frentes caminham como uma rede única: o Reginas.
          </p>
          <blockquote className="border-l-4 border-[#8B35C4] pl-4 py-2 bg-white rounded-r-xl">
            <p className="font-display italic text-[#1C1C2E] text-sm leading-relaxed">
              "Fortalecendo as finanças da casa e do negócio."
            </p>
          </blockquote>
        </div>

        {/* Foto da Equipe */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-[500px] md:h-[400px] rounded-3xl bg-[#8B35C4] overflow-hidden shadow-2xl relative">
            <Image
              src="/time/equipe.png"
              alt="Equipe Reginas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── O INÍCIO DE TUDO ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#8B35C4] font-semibold text-lg mb-2">O Início de Tudo</p>
            <div className="w-10 h-0.5 bg-[#8B35C4] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12 text-sm text-gray-600 leading-relaxed">
            <p>
              O Reginas começou na UFPE, a partir de pesquisas sobre educação financeira e
              autonomia feminina lideradas pela professora Kécia Galvão, com atuação inicial junto
              a mulheres do bairro de Joana Bezerra, no Recife. A ideia sempre foi simples e
              exigente ao mesmo tempo: tratar o letramento financeiro como um direito social e uma
              ferramenta de emancipação, sobretudo em contextos marcados por desigualdade de
              gênero e vulnerabilidade socioeconômica.
            </p>
            <p>
              Em outubro de 2025, esse trabalho ganhou um novo braço. Por meio do edital Pibex do
              IFPE, formalizou-se a parceria com o Campus Igarassu, sob orientação do professor
              Luiz Henrique e coordenação de Roberta Aragão, com Marydyana Mota, Ester Reis e
              Nayara Lima como extensionistas. Nascia o Reginas Igarassu, inspirado e baseado na
              metodologia consolidada do projeto da UFPE — e, no site, as duas frentes se
              apresentam como uma só rede: o Reginas.
            </p>
          </div>

          {/* Foto grupo */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 h-72 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Foto reunião de fundação</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── O NOME REGINAS ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="section-label">O Significado do Nome</p>
        <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-3">Por que "Reginas"</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-10">
          Além de evocar rainhas, REGINAS é um acrônimo que reúne os pilares que orientam o
          projeto e toda a rede de pessoas e instituições a ele ligadas.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {letras.map((item) => (
            <div key={item.letra} className="card flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#8B35C4]/10 flex items-center justify-center font-display font-bold text-[#8B35C4]">
                {item.letra}
              </div>
              <div>
                <h3 className="font-semibold text-[#1C1C2E] mb-1 text-sm">{item.significado}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label">Nossa Metodologia</p>
          <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-10">Os Cinco Is da Extensão</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-[#8B35C4] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#8B35C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#8B35C4] mb-1">Interação Dialógica</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A construção do conhecimento é horizontal, inspirada na pedagogia dialógica de
                  Paulo Freire — ouvimos antes de propor.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#2A9D8F] to-[#1F7A6E] text-white p-6 flex gap-4">
              <div>
                <h3 className="font-semibold text-white mb-1">Interdisciplinaridade</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Unimos saberes de Administração, Psicologia e Educação para tratar finanças de
                  forma crítica e comportamental.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-[#2A9D8F] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#2A9D8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#2A9D8F] mb-1">Indissociabilidade</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ensino, pesquisa e extensão caminham juntos: cada oficina alimenta artigos e
                  relatórios que voltam para a prática.
                </p>
              </div>
            </div>

            <div className="card flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-[#C9951A] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#C9951A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#C9951A] mb-1">Impacto & Inovação</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Impacto real na formação das extensionistas e inovação de base, nascida no e
                  para o território, do Recife a Igarassu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO QUOTE ─── */}
      <section className="bg-[#1C1C2E] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-display text-6xl text-[#8B35C4] mb-6 opacity-60">"</p>
          <blockquote className="font-display italic text-2xl md:text-3xl leading-relaxed mb-6">
            O domínio sobre o próprio dinheiro permite que as mulheres tomem decisões de vida
            mais seguras e livres de relações de dependência.
          </blockquote>
          <p className="text-sm text-gray-400 uppercase tracking-widest">O Manifesto Reginas</p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#8B35C4] font-semibold mb-2">Pronta para fazer parte dessa história?</p>
          <p className="text-gray-500 text-sm mb-8">
            O futuro da rede Reginas está sendo escrito agora, entre Recife e Igarassu. Junte-se a
            nós e comece a deixar seu legado hoje mesmo.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/parceiros" className="btn-primary">Começar Minha Jornada</Link>
            <Link href="/recursos" className="btn-outline">Ver Recursos Gratuitos</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
