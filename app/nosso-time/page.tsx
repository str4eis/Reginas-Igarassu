import Link from 'next/link'

const team = [
  {
    name: 'Beatriz Regina',
    role: 'Fundadora & Curadora-Chefe',
    color: '#C9951A',
    bio: 'Mestra em Políticas Públicas com foco em inclusão digital. Beatriz fundou o Reginas para traduzir a complexidade institucional em ferramentas práticas para mulheres de todo o país.',
  },
  {
    name: 'Mariana Souza',
    role: 'Diretora de Operações',
    color: '#8B35C4',
    bio: 'Especialista em gestão de projetos com 12 anos de experiência em ONGs internacionais. Mariana coordena nossa logística de impacto e parcerias estratégicas.',
  },
  {
    name: 'Helena Costa',
    role: 'Líder de Design & UX',
    color: '#2A9D8F',
    bio: 'Acredita que a estética é uma forma de cuidado. Helena é a mente por trás da identidade visual do Reginas, garantindo que o conhecimento seja acessível e belo.',
  },
  {
    name: 'Clara Mendes',
    role: 'Especialista em Impacto Social',
    color: '#C9951A',
    bio: 'Cientista Social com foco em estudos de gênero. Clara mensura o alcance real de nossas ações e mantém nosso propósito alinhado às necessidades da comunidade.',
  },
  {
    name: 'Aline Ferreira',
    role: 'Desenvolvedora Sênior',
    color: '#8B35C4',
    bio: 'Especialista em tecnologias de código aberto. Aline garante que nossa plataforma seja robusta, segura e escalável para suportar nossa crescente rede de usuárias.',
  },
  {
    name: 'Luísa Rocha',
    role: 'Gestora de Comunidade',
    color: '#2A9D8F',
    bio: 'Jornalista e entusiasta de conexões humanas. Luísa é o ponto de contato principal de nossa rede, facilitando trocas e mentorias entre nossas integrantes.',
  },
]

function MemberCard({ member }: { member: typeof team[0] }) {
  const initials = member.name.split(' ').map(n => n[0]).join('')
  return (
    <div className="flex flex-col">
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 w-1 h-full rounded-full" style={{ backgroundColor: member.color }} />
        <div className="ml-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 h-56 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold font-display"
            style={{ backgroundColor: member.color }}>
            {initials}
          </div>
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
            A Força da Nossa{' '}
            <span className="text-[#8B35C4]">Diversidade.</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Somos um coletivo de curadoras, educadoras e especialistas unidas por um propósito:
            democratizar o conhecimento institucional através de um olhar empático e sofisticado.
          </p>
        </div>

        {/* Hero image placeholder */}
        <div className="relative flex justify-end">
          <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 h-80 flex items-center justify-center">
            <div className="text-center text-white/40">
              <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <p className="text-sm">Foto tecnologia</p>
            </div>
          </div>
          {/* Gold accent */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#C9951A] rounded-2xl -z-10" />
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
            um mundo mais curado e consciente.
          </p>
          <Link href="/parceiros" className="btn-primary inline-flex items-center gap-2">
            Ver Oportunidades →
          </Link>
        </div>
      </section>

    </div>
  )
}
