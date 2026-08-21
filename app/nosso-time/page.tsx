import Link from 'next/link'
import Image from 'next/image'

const team = [
  {
    name: 'Marydyana Mota',
    role: 'Fundadora & CEO',
    color: '#C9951A',
    photo: '/time/mary.jpeg',
    bio: 'Marydyana Mota é graduanda em Administração pelo Instituto Federal de Pernambuco (IFPE), mãe e empreendedora. Atua com educação financeira, gestão de pequenos negócios e autonomia feminina, desenvolvendo pesquisas, projetos e formações voltadas ao fortalecimento econômico de mulheres em contextos de vulnerabilidade social. Também é extensionista e articuladora da parceria entre as frentes Reginas UFPE e Reginas Igarassu (IFPE).',
  },
  {
    name: 'Ester Reis',
    role: 'Desenvolvedora',
    color: '#8B35C4',
    photo: '/time/ester.jpg',
    bio: 'Graduanda em Sistemas para Internet (IFPE), com formação técnica em Redes de Computadores (ETE). Atuou como bolsista no projeto de desenvolvimento de um MVP para gestão da merenda escolar em Itapissuma. Também atuou como voluntária no projeto “Produção de uma Escala e um Aplicativo para Redução de Compras Impulsivas” do IFPE, contribuindo para iniciativas de educação financeira, tecnologia social e promoção da saúde financeira e sustentabilidade.',
  },
  {
    name: 'Nayara Lima',
    role: 'Voluntária',
    color: '#2A9D8F',
    photo: '/time/nayara.jpg',
    bio: 'Graduanda em Administração, Nayara é entusiasta de projetos sociais e possui experiência em gestão de eventos, comunicação e ações comunitárias. Atua como estagiária na área administrativa do Instituto Federal de Pernambuco – Campus Igarassu, contribuindo para atividades de gestão e organização institucional. Também participou do projeto de pesquisa voltado ao desenvolvimento de uma escala para redução de compras impulsivas, iniciativa que deu origem ao aplicativo de compras conscientes.',
  },
  {
    name: 'Kécia Galvão',
    role: 'Professora Doutora — Fundadora do Reginas (UFPE)',
    color: '#C9951A',
    photo: '/time/kecia.jpeg',
    bio: 'Possui graduação em Ciências Contábeis pela Universidade Federal de Pernambuco (2006), Doutora em Administração (UFPE) e Mestra em Ciências Contábeis pela mesma instituição, com sólida expertise em Finanças Corporativas e Contabilidade Gerencial. Professora Adjunta da UFPE, lidera o grupo de pesquisa "Caleidoscópio: Perspectivas em Finanças e Contabilidade", berço do projeto Reginas, e coordena hoje a parceria de extensão com o IFPE que deu origem à frente Reginas Igarassu.',
  },
  {
    name: 'Roberta Aragão',
    role: 'Coordenadora de Projetos',
    color: '#8B35C4',
    photo: '/time/roberta.jpeg',
    bio: 'Doutoranda em Administração pela Universidade Federal de Pernambuco (UFPE), com pesquisa em Inteligência Artificial e otimização de estoques industriais. Mestre em Administração pela UFPE e graduada pela Universidade de Pernambuco (UPE). Docente do Instituto Federal de Pernambuco (IFPE), atua em ensino, pesquisa e extensão nas áreas de tomada de decisão, gestão e melhoria de processos.',
  },
  {
    name: 'Luiz Henrique',
    role: 'Orientador do Projeto',
    color: '#2A9D8F',
    photo: '/time/luiz.jpeg',
    bio: 'Professor efetivo do Instituto Federal de Pernambuco - IFPE nas áreas de Administração e Logística. Graduando em Medicina pela Universidade Federal de Pernambuco - UFPE e Mestrando em Políticas Públicas pela UFPE. Formação em Administração com Especialização de Gestão de Pessoas.',
  },
]

function MemberCard({ member }: { member: typeof team[0] }) {
  const initials = member.name.split(' ').map(n => n[0]).join('')
  return (
    <div className="flex flex-col">
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 w-1 h-full rounded-full" style={{ backgroundColor: member.color }} />
        <div className="ml-4 rounded-2xl overflow-hidden h-56 relative">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold font-display"
                style={{ backgroundColor: member.color }}>
                {initials}
              </div>
            </div>
          )}
        </div>
      </div>
      <h3 className="font-display font-semibold text-lg text-[#1C1C2E]">{member.name}</h3>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: member.color }}>
        {member.role}
      </p>
      <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
    </div>
  )
}

export default function NossoTimePage() {
  return (
    <div className="bg-[#F8F7F5]">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label">Nossa Equipe</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1C1C2E] leading-tight mb-6">
            Uma Rede,{' '}
            <span className="text-[#8B35C4]">Duas Instituições.</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Somos pesquisadoras, docentes e extensionistas da UFPE e do IFPE unidas por um mesmo
            propósito: fortalecer as finanças da casa e do negócio de mulheres em Pernambuco,
            do Recife a Igarassu.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-[500px] md:h-80 rounded-3xl bg-[#8B35C4] overflow-hidden shadow-2xl relative">
            <Image
              src="/time/equipe2.png"
              alt="Equipe Reginas"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── TIME ─── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display font-bold text-3xl text-[#1C1C2E]">As Protagonistas</h2>
            <p className="text-sm text-gray-400 italic">Liderança & Inspiração</p>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
            {team.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
          <h2 className="font-display font-bold text-3xl text-[#1C1C2E] mb-3">
            Quer fazer parte da nossa rede?
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
            Estamos sempre em busca de novas perspectivas e talentos que compartilhem nossa visão de
            autonomia financeira feminina.
          </p>
          <Link href="/parceiros" className="btn-primary inline-flex items-center gap-2">
            Ver Oportunidades →
          </Link>
        </div>
      </section>

    </div>
  )
}
