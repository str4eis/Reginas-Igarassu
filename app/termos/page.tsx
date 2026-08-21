import Link from 'next/link'

const secoes = [
  {
    title: '1. Sobre este site',
    body: 'Este site é mantido pela rede Reginas, que reúne o projeto Reginas da Universidade Federal de Pernambuco (UFPE) e a frente Reginas Igarassu do Instituto Federal de Pernambuco (IFPE) — Campus Igarassu, com apoio de parceiros institucionais como o Hub Canoa Grande, o CTEN Igarassu, a ADEMIG e o CECINE/UFPE. Ao usar este site, você concorda com estes termos.',
  },
  {
    title: '2. Uso do conteúdo',
    body: 'Cartilhas, artigos e materiais educativos disponibilizados aqui são gratuitos e podem ser baixados e compartilhados para fins pessoais, educativos e não comerciais, sempre citando o Reginas (UFPE + IFPE) como fonte. Não é permitido alterar, revender ou atribuir a autoria desses materiais a terceiros.',
  },
  {
    title: '3. Simulador de investimento e ferramentas educativas',
    body: 'As ferramentas e simuladores disponíveis no site têm finalidade exclusivamente educativa. Eles não constituem recomendação de investimento, consultoria financeira ou aconselhamento profissional. Decisões financeiras devem considerar a orientação de um profissional qualificado.',
  },
  {
    title: '4. App Compras Conscientes',
    body: 'O aplicativo "Compras Conscientes", acessado a partir deste site, é um projeto desenvolvido de forma independente e hospedado fora do domínio do Reginas. O uso do aplicativo está sujeito aos termos definidos por seus desenvolvedores.',
  },
  {
    title: '5. Participação em oficinas e ações',
    body: 'A participação nas oficinas, minicursos e rodas de conversa do Reginas é gratuita e voluntária. Ao se inscrever, a participante concorda em fornecer informações verdadeiras e autoriza o uso de dados agregados e anônimos para fins de pesquisa, relatórios de impacto e prestação de contas às instituições de fomento.',
  },
  {
    title: '6. Propriedade intelectual',
    body: 'Textos, identidade visual, cartilhas e demais materiais originais produzidos pelo Reginas são de titularidade da UFPE e do IFPE, conforme a autoria de cada material, e protegidos pela legislação brasileira de direitos autorais.',
  },
  {
    title: '7. Limitação de responsabilidade',
    body: 'Fazemos o possível para manter as informações deste site atualizadas e corretas, mas não garantimos ausência total de erros. O Reginas não se responsabiliza por decisões tomadas exclusivamente com base no conteúdo do site, sem orientação profissional adequada quando necessária.',
  },
  {
    title: '8. Alterações nestes termos',
    body: 'Estes termos podem ser atualizados periodicamente para refletir mudanças no projeto ou na legislação aplicável. A versão vigente estará sempre disponível nesta página.',
  },
  {
    title: '9. Legislação aplicável',
    body: 'Estes termos são regidos pelas leis da República Federativa do Brasil, com foro eleito em Pernambuco para dirimir eventuais controvérsias.',
  },
]

export default function TermosPage() {
  return (
    <div className="bg-[#F8F7F5]">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label">Jurídico</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1C1C2E] leading-tight mb-4">
          Termos de Uso
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Última atualização: agosto de 2026. Ao acessar este site, você concorda com os
          termos descritos abaixo.
        </p>

        <div className="space-y-8">
          {secoes.map((secao) => (
            <div key={secao.title} className="card">
              <h2 className="font-display font-semibold text-lg text-[#1C1C2E] mb-3">{secao.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{secao.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Quer entender como tratamos seus dados? Veja nossa{' '}
            <Link href="/privacidade" className="text-[#8B35C4] font-medium hover:underline">Política de Privacidade</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
