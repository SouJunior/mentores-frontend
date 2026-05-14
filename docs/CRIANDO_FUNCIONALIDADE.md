# Criando uma Nova Funcionalidade

Este guia ajuda a organizar o desenvolvimento de uma feature no frontend do Portal de Mentorias.

## 1. Entenda a tarefa

- Leia a issue com atencao antes de codar.
- Identifique qual fluxo sera alterado.
- Veja quais paginas, componentes, servicos e estilos ja existem para o mesmo tipo de comportamento.
- Confirme se a alteracao depende de alguma resposta especifica da API.
- Evite mudar contratos, rotas ou estrutura visual sem necessidade clara.

## 2. Siga a estrutura do projeto

- Paginas ficam em `src/pages`.
- Componentes reutilizaveis ficam em `src/components`.
- Estilos de paginas ficam em `src/styles/pages`.
- Chamadas de API e hooks de servico ficam em `src/services`.
- Tipos compartilhados de servico ficam em `src/services/interfaces`.
- Contextos globais ou de fluxo ficam em `src/context`.

Antes de criar algo novo, procure se ja existe um componente, hook, contexto, estilo ou service parecido.

## 3. Desenvolva com escopo pequeno

- Resolva uma responsabilidade por vez.
- Evite misturar feature, refatoracao, ajuste visual e limpeza de codigo no mesmo trabalho.
- Mantenha os nomes no padrao do projeto.
- Preserve o comportamento atual quando ele nao fizer parte da tarefa.
- Se precisar refatorar, explique o motivo no PR.

## 4. Teste a alteracao

Use os comandos existentes no projeto:

```bash
npm run lint
npm run build
```

Tambem valide manualmente o fluxo principal no navegador.

## 5. Commits

- Faca commits pequenos e com responsabilidade unica.
- Evite um commit grande com varias alteracoes diferentes.
- Use mensagens claras e objetivas.
- Prefira prefixos como `feat:`, `fix:`, `docs:`, `refactor:`, `style:` e `test:`.

Exemplos:

```bash
git commit -m "feat: adiciona filtro de mentores por especialidade"
git commit -m "fix: corrige exibicao do modal de onboarding"
git commit -m "docs: adiciona guia de boas praticas de PR"
```

## 6. Pull Request

O PR deve ser pequeno, revisavel e direto.

Inclua:

- O que foi alterado.
- Por que foi alterado.
- Como testar.
- Prints ou videos quando houver mudanca visual.
- Issue relacionada, quando existir.

Evite:

- PR com muitas responsabilidades.
- Arquivos alterados sem relacao com a tarefa.
- Comentarios vagos como "ajustes gerais".
- Codigo comentado ou logs temporarios.

## 7. Uso responsavel de agentes

Ferramentas como Codex, Copilot e outros agentes podem ajudar no desenvolvimento, mas nao substituem estudo, revisao e entendimento tecnico.

Caso use algum agente:

- Mantenha `AGENTS.md` e qualquer arquivo local de configuracao de agente no `.gitignore`.
- Nao envie para o repositorio arquivos pessoais de agente, prompts, logs ou configuracoes individuais.
- Revise todo codigo gerado antes de commitar.
- Entenda a solucao, os impactos e os riscos antes de abrir PR.
- Estude continuamente as linguagens, frameworks e bibliotecas usadas no projeto.
- Oriente o agente com base na arquitetura do projeto, nao aceite sugestoes que quebrem padroes existentes.
- Garanta que a estrutura, a seguranca e a integridade do projeto continuem preservadas.

O objetivo e usar essas ferramentas como apoio, mantendo responsabilidade tecnica sobre cada linha entregue.

## 8. Checklist antes do PR

- [ ] A tarefa foi entendida e o escopo esta claro.
- [ ] A solucao segue os padroes do projeto.
- [ ] Os commits tem responsabilidade unica.
- [ ] Nao ha arquivos pessoais, temporarios ou de agente no commit.
- [ ] O fluxo foi testado manualmente.
- [ ] `npm run lint` foi executado quando aplicavel.
- [ ] `npm run build` foi executado quando aplicavel.
- [ ] A descricao do PR explica o que mudou e como validar.
