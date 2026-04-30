<div align="center">

<br/>

# 🌸 Reginas Igarassu

### *Cultivando Prosperidade e Autonomia.*

Plataforma institucional de empoderamento feminino em Igarassu, Pernambuco.  
Educação financeira, curadoria comunitária e ferramentas práticas para mulheres do campo e das águas.

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

<br/>

</div>

---

## ✨ Sobre o Projeto

O **Reginas Igarassu** é um site institucional desenvolvido para o Projeto Reginas — uma iniciativa que conecta mulheres de comunidades litorâneas e rurais de Igarassu (PE) a ferramentas de educação financeira, curadoria cultural e desenvolvimento sustentável.

> *"Quando uma mulher cresce, toda a comunidade floresce."*  
> — Maria do Carmo, Líder Comunitária

---

## 🗂️ Páginas

| Rota | Descrição |
|------|-----------|
| `/` | **Início** — Hero, missão, kit de ferramentas e estatísticas de impacto |
| `/sobre` | **Sobre** — História do projeto, valores e manifesto |
| `/nosso-time` | **Nosso Time** — Equipe e protagonistas do projeto |
| `/impacto` | **Impacto** — Relatório de impacto, abrangência territorial e timeline |
| `/recursos` | **Recursos** — Cartilhas, finanças comportamentais e newsletter |
| `/ferramentas` | **Ferramentas** — Simulador de investimentos interativo e planilha de orçamento |
| `/parceiros` | **Parceiros** — Editais aprovados, parceiros institucionais e transparência |

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/reginas-igarassu.git

# Acesse a pasta
cd reginas-igarassu

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador. 🎉

### Build para produção

```bash
npm run build
npm run start
```

---

## 🛠️ Tecnologias

- **[Next.js 14](https://nextjs.org/)** — Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária
- **[Google Fonts](https://fonts.google.com/)** — Playfair Display + DM Sans

---

## 📁 Estrutura do Projeto

```
reginas-igarassu/
├── app/
│   ├── layout.tsx          # Layout raiz (Navbar + Footer)
│   ├── globals.css         # Estilos globais e variáveis CSS
│   ├── page.tsx            # Página Início
│   ├── sobre/
│   ├── nosso-time/
│   ├── impacto/
│   ├── recursos/
│   ├── ferramentas/
│   └── parceiros/
├── components/
│   ├── Navbar.tsx          # Navegação responsiva
│   └── Footer.tsx          # Rodapé com links e redes sociais
├── public/                 # Imagens e assets estáticos
├── tailwind.config.ts
└── next.config.js
```

---

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--purple` | `#8B35C4` | Cor principal, CTAs |
| `--teal` | `#2A9D8F` | Destaques secundários |
| `--gold` | `#C9951A` | Acentos e badges |
| `--dark` | `#1C1C2E` | Textos principais |
| `--bg` | `#F8F7F5` | Background geral |
| Display font | `Playfair Display` | Títulos e headings |
| Body font | `DM Sans` | Textos e UI |

---

## 📸 Como Adicionar Imagens

Os placeholders no projeto podem ser substituídos por imagens reais. Adicione seus arquivos na pasta `/public` e use o componente `<Image>` do Next.js:

```tsx
import Image from 'next/image'

<Image
  src="/sua-imagem.jpg"
  alt="Descrição da imagem"
  width={600}
  height={400}
  className="rounded-3xl object-cover"
/>
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: adiciona minha feature'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com 💜 para o **Projeto Reginas Igarassu**  
*Empoderando a curadora de amanhã por meio da educação e da comunidade hoje.*

</div>
