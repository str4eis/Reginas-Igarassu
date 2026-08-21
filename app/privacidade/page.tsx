import Link from 'next/link'

const secoes = [
  {
    title: '1. Quem somos',
    body: 'O Reginas é uma rede de extensão que reúne o projeto Reginas da Universidade Federal de Pernambuco (UFPE) e a frente Reginas Igarassu do Instituto Federal de Pernambuco (IFPE) — Campus Igarassu. Esta política explica como tratamos os dados pessoais de quem visita este site, se inscreve na newsletter, preenche formulários de contato ou de parceria, ou participa de nossas oficinas.',
  },
  {
    title: '2. Quais dados coletamos',
    body: null,
    list: [
      'Dados de contato: nome e e-mail, quando você se inscreve na newsletter ou envia uma mensagem pelos formulários do site.',
      'Dados de participação: nome, e-mail e informações fornecidas voluntariamente por participantes das oficinas, minicursos e pré/pós-testes de letramento financeiro.',
      'Dados de navegação: informações técnicas básicas (como localização aproximada, obtida por IP) usadas para exibir o mapa de Igarassu incorporado do Google Maps.',
    ],
  },
  {
    title: '3. Para que usamos seus dados',
    body: null,
    list: [
      'Enviar novidades, artigos e convites para workshops, quando você se inscreve na newsletter.',
      'Responder a mensagens de contato, parceria institucional ou dúvidas sobre o projeto.',
      'Organizar e acompanhar a participação de mulheres nas oficinas e ações de extensão em Recife, Igarassu e cidades vizinhas.',
      'Produzir relatórios de impacto agregados e anônimos, usados em prestação de contas para o IFPE, UFPE e instituições de fomento.',
    ],
  },
  {
    title: '4. Com quem compartilhamos',
    body: 'Os dados podem ser compartilhados entre as equipes da UFPE e do IFPE responsáveis pelo projeto, exclusivamente para fins de execução das atividades de extensão. Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais. Ferramentas de terceiros usadas no site, como o Google Maps, podem coletar dados de navegação conforme suas próprias políticas de privacidade.',
  },
  {
    title: '5. Por quanto tempo guardamos',
    body: 'Dados de contato e newsletter são mantidos enquanto você não solicitar a exclusão. Dados de participantes das oficinas são mantidos pelo período de execução do projeto e de sua prestação de contas junto às instituições de fomento, conforme exigido pelas normas de extensão do IFPE e da UFPE.',
  },
  {
    title: '6. Seus direitos (LGPD)',
    body: 'Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a qualquer momento: confirmação de que tratamos seus dados, acesso aos dados que temos sobre você, correção de dados incompletos ou desatualizados, exclusão de dados tratados com seu consentimento, e revogação do consentimento para envio de comunicações.',
  },
  {
    title: '7. Cookies',
    body: 'Este site utiliza recursos de terceiros, como o Google Maps, que podem definir cookies próprios para seu funcionamento. Não utilizamos cookies de rastreamento publicitário.',
  },
  {
    title: '8. Como falar conosco',
    body: 'Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail contato@projetoreginas.org.',
  },
]

export default function PrivacidadePage() {
  return (
    <div className="bg-[#F8F7F5]">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="section-label">Jurídico</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-[#1C1C2E] leading-tight mb-4">
          Política de Privacidade
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Última atualização: agosto de 2026. Esta política se aplica ao site do Reginas,
          rede de extensão UFPE + IFPE.
        </p>

        <div className="space-y-8">
          {secoes.map((secao) => (
            <div key={secao.title} className="card">
              <h2 className="font-display font-semibold text-lg text-[#1C1C2E] mb-3">{secao.title}</h2>
              {secao.body && (
                <p className="text-gray-600 text-sm leading-relaxed">{secao.body}</p>
              )}
              {secao.list && (
                <ul className="space-y-2">
                  {secao.list.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-600 text-sm leading-relaxed">
                      <span className="text-[#8B35C4] shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Quer saber como usamos o conteúdo do site? Veja também nossos{' '}
            <Link href="/termos" className="text-[#8B35C4] font-medium hover:underline">Termos de Uso</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
