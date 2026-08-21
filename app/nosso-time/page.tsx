'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const team = [
  {
    name: 'Marydyana Mota',
    role: 'Representante do Reginas Igarassu (IFPE)',
    color: '#C9951A',
    photo: '/time/mary.jpeg',
    bio: 'Marydyana Mota é graduanda em Administração pelo Instituto Federal de Pernambuco (IFPE), mãe e empreendedora. Atua com educação financeira, gestão de pequenos negócios e autonomia feminina, desenvolvendo pesquisas, projetos e formações voltadas ao fortalecimento econômico de mulheres em contextos de vulnerabilidade social. Também é extensionista e articuladora da parceria entre as frentes Reginas UFPE e Reginas Igarassu (IFPE).',
    lattes: '',
    instagram: '',
    linkedin: '',
  },
  {
    name: 'Ester Reis',
    role: 'Desenvolvedora',
    color: '#8B35C4',
    photo: '/time/ester.jpg',
    bio: 'Graduanda em Sistemas para Internet (IFPE), com formação técnica em Redes de Computadores (ETE). Atuou como bolsista no projeto de desenvolvimento de um MVP para gestão da merenda escolar em Itapissuma. Também atuou como voluntária no projeto “Produção de uma Escala e um Aplicativo para Redução de Compras Impulsivas” do IFPE, contribuindo para iniciativas de educação financeira, tecnologia social e promoção da saúde financeira e sustentabilidade.',
    lattes: 'http://lattes.cnpq.br/8688995861051767',
    instagram: 'https://www.instagram.com/_str4is/',
    linkedin: 'https://www.linkedin.com/in/estervitoriareis/',
  },
  {
    name: 'Nayara Lima',
    role: 'Voluntária',
    color: '#2A9D8F',
    photo: '/time/nayara.jpg',
    bio: 'Graduanda em Administração, Nayara é entusiasta de projetos sociais e possui experiência em gestão de eventos, comunicação e ações comunitárias. Atua como estagiária na área administrativa do Instituto Federal de Pernambuco – Campus Igarassu, contribuindo para atividades de gestão e organização institucional. Também participou do projeto de pesquisa voltado ao desenvolvimento de uma escala para redução de compras impulsivas, iniciativa que deu origem ao aplicativo de compras conscientes.',
    lattes: '',
    instagram: '',
    linkedin: '',
  },
  {
    name: 'Kécia Galvão',
    role: 'Professora Doutora — Fundadora do Reginas (UFPE)',
    color: '#C9951A',
    photo: '/time/kecia.jpeg',
    bio: 'Possui graduação em Ciências Contábeis pela Universidade Federal de Pernambuco (2006), Doutora em Administração (UFPE) e Mestra em Ciências Contábeis pela mesma instituição, com sólida expertise em Finanças Corporativas e Contabilidade Gerencial. Professora Adjunta da UFPE, lidera o grupo de pesquisa "Caleidoscópio: Perspectivas em Finanças e Contabilidade", berço do projeto Reginas, e coordena hoje a parceria de extensão com o IFPE que deu origem à frente Reginas Igarassu.',
    lattes: 'http://lattes.cnpq.br/',
    instagram: '',
    linkedin: '',
  },
  {
    name: 'Roberta Aragão',
    role: 'Coordenadora de Projetos',
    color: '#8B35C4',
    photo: '/time/roberta.jpeg',
    bio: 'Doutoranda em Administração pela Universidade Federal de Pernambuco (UFPE), com pesquisa em Inteligência Artificial e otimização de estoques industriais. Mestre em Administração pela UFPE e graduada pela Universidade de Pernambuco (UPE). Docente do Instituto Federal de Pernambuco (IFPE), atua em ensino, pesquisa e extensão nas áreas de tomada de decisão, gestão e melhoria de processos.',
    lattes: 'http://lattes.cnpq.br/',
    instagram: '',
    linkedin: '',
  },
  {
    name: 'Luiz Henrique',
    role: 'Orientador do Projeto',
    color: '#2A9D8F',
    photo: '/time/luiz.jpeg',
    bio: 'Professor efetivo do Instituto Federal de Pernambuco - IFPE nas áreas de Administração e Logística. Graduando em Medicina pela Universidade Federal de Pernambuco - UFPE e Mestrando em Políticas Públicas pela UFPE. Formação em Administração com Especialização de Gestão de Pessoas.',
    lattes: 'http://lattes.cnpq.br/',
    instagram: '',
    linkedin: '',
  },
]

type Member = typeof team[0]

function MemberCard({ member, onOpen }: { member: Member; onOpen: (m: Member) => void }) {
  const initials = member.name.split(' ').map(n => n[0]).join('')
  return (
    <button
      type="button"
      onClick={() => onOpen(member)}
      className="flex flex-col text-left group cursor-pointer"
    >
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 w-1 h-full rounded-full" style={{ backgroundColor: member.color }} />
        <div className="ml-4 rounded-2xl overflow-hidden h-56 relative">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold font-display"
                style={{ backgroundColor: member.color }}>
                {initials}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-[#1C1C2E]/0 group-hover:bg-[#1C1C2E]/10 transition-colors flex items-end justify-end p-3">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#1C1C2E] text-xs font-semibold px-3 py-1.5 rounded-full">
              Ver perfil
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-display font-semibold text-lg text-[#1C1C2E] group-hover:text-[#8B35C4] transition-colors">
        {member.name}
      </h3>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: member.color }}>
        {member.role}
      </p>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{member.bio}</p>
    </button>
  )
}

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const initials = member.name.split(' ').map(n => n[0]).join('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const links = [
    {
      key: 'lattes',
      href: member.lattes,
      label: 'Currículo Lattes',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      key: 'instagram',
      href: member.instagram,
      label: 'Instagram',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      key: 'linkedin',
      href: member.linkedin,
      label: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ].filter((l) => l.href)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1C1C2E]/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-gray-500 hover:text-[#1C1C2E] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-64 w-full">
          <div className="absolute left-0 top-0 w-1.5 h-full z-10" style={{ backgroundColor: member.color }} />
          {member.photo ? (
            <Image src={member.photo} alt={member.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold font-display"
                style={{ backgroundColor: member.color }}>
                {initials}
              </div>
            </div>
          )}
        </div>

        <div className="p-8">
          <h3 className="font-display font-bold text-2xl text-[#1C1C2E] mb-1">{member.name}</h3>
          <p className="text-xs font-semibold uppercase tracking-wider mb-5" style={{ color: member.color }}>
            {member.role}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

          {links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-5 border-t border-gray-100">
              {links.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#8B35C4] hover:text-white transition-colors"
                >
                  {l.icon}
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function NossoTimePage() {
  const [selected, setSelected] = useState<Member | null>(null)

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
            do Recife a Igarassu. Clique em um perfil para saber mais.
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
              <MemberCard key={member.name} member={member} onOpen={setSelected} />
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

      {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}

    </div>
  )
}