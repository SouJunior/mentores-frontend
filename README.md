![Logo](./public/logos/LogoSouJunior.svg)

# mentores-frontend

Projeto Opensource que visa melhorar o match entre Mentores e Juniors.

## Observação:

> Antes de iniciar a instalação, lembre-se de fazer um fork do repositório oficial e realizar as alterações no repositório "forkado" enviando modificações através de Pull Requests. Nunca modifique diretamente o repositório oficial.

Clone o projeto:

```bash
  git clone https://github.com/{SEU USUARIO}/mentores-frontend.git
```

Entre no diretório do projeto:

```bash
  cd mentores-frontend/
```

Instale as dependências:

```bash
  npm install
```

## Rodando localmente

Inicie o servidor:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

## Tecnologias utilizadas

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="60" height="60" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="60" height="60"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60" height="60" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60" height="60" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" width="60" height="60"/>

## DevOps

```mermaid
sequenceDiagram
    actor Dev as Desenvolvedores
    participant Git as GitHub
    participant Ver as Vercel

    Note over Dev,Ver: Fluxo de Deploy com Preview

    Dev->>Git: Abre Pull Request (PR) para main
    Git->>Ver: Novo Evento: PR criada
    Ver-->>Git: Deploy Preview criado
    
    Note over Dev,Ver: Loop de desenvolvimento
    
    Dev->>Git: Aprova e mergeia PR para main
    Git->>Ver: Novo Evento: Branch main atualizada
    Ver-->>Git: Deploy de Produção atualizado
```
