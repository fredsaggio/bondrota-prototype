# BondRota - Sistema de Gestão de Transporte Escolar

Protótipo de alta fidelidade desenvolvido como simulação do aplicativo BondRota, originalmente projetado em Java com JavaFX. Esta versão web foi construída com React, TypeScript e Tailwind CSS para fins de apresentação acadêmica.

---

## 📋 Visão Geral das Telas

### 1. Tela de Login (`/login`)

Tela inicial do sistema onde o usuário informa suas credenciais para acessar a plataforma.

- **Campos**: E-mail e Senha
- **Comportamento**: Ao clicar em "Entrar Agora", o sistema exibe um feedback visual de carregamento e, após 1,5 segundo, redireciona o usuário para a tela inicial (Home)
- **Validação**: Caso algum campo esteja vazio, um alerta é exibido solicitando o preenchimento
- **Requisito atendido**: Simulação de autenticação com feedback visual de sucesso

---

### 2. Tela Home (`/home`)

Painel principal do sistema com uma visão geral das funcionalidades disponíveis.

- **Saudação dinâmica**: Exibe "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" de acordo com o horário atual
- **Data atual**: Mostra a data completa no formato brasileiro (ex: "quinta-feira, 3 de abril de 2026")
- **Banner visual**: Imagem de destaque com mensagem de boas-vindas
- **Cards de navegação**: 6 cards representando as funcionalidades do sistema:
  - ✅ Cadastrar Aluno — navegável
  - ✅ Cadastrar Motorista — navegável
  - ❌ Cadastrar Ônibus — desabilitado (sem tela implementada)
  - ❌ Cadastrar Ponto — desabilitado (sem tela implementada)
  - ❌ Acessar Dados — desabilitado (sem tela implementada)
  - ✅ Transmissão — navegável
- **Requisito atendido**: Navegação funcional apenas para as telas com protótipo disponível; demais aparecem desabilitadas

---

### 3. Menu Lateral (Sidebar)

Presente em todas as telas internas (Home, Cadastros e Transmissão).

- **Logo e nome**: Exibe o ícone e o nome "BondRota"
- **Seções**:
  - **Home** — link para a tela inicial
  - **Cadastro** — links para Aluno, Motorista, Ônibus (desabilitado) e Ponto (desabilitado)
  - **Dados no Sistema** — links para Acessar Dados (desabilitado) e Transmissão
- **Destaque visual**: O item ativo na navegação é destacado com fundo diferenciado
- **Requisito atendido**: Apenas as telas com protótipo são clicáveis; as demais ficam esmaecidas e sem interação

---

### 4. Tela de Cadastro de Aluno (`/cadastro/aluno`)

Formulário para registro de novos alunos no sistema de transporte.

- **Campos disponíveis**:
  - Nome Completo
  - CPF
  - Instituição de Ensino
  - Curso
  - Data de Nascimento
  - Turno
  - Rota
- **Botão "Cadastrar Aluno"**: Exibe um toast (notificação) confirmando que o aluno foi cadastrado com sucesso, incluindo o nome informado
- **Botão "Limpar Formulário"**: Reseta todos os campos do formulário
- **Validação**: Exige pelo menos o nome do aluno preenchido
- **Requisito atendido**: Feedback visual de cadastro realizado sem necessidade de banco de dados

---

### 5. Tela de Cadastro de Motorista (`/cadastro/motorista`)

Formulário para registro de novos motoristas.

- **Campos disponíveis**:
  - Nome Completo
  - CPF
  - Telefone
  - Data de Nascimento
  - Turno
- **Botão "Cadastrar Motorista"**: Exibe um toast confirmando o cadastro do motorista
- **Botão "Limpar Formulário"**: Reseta todos os campos
- **Validação**: Exige pelo menos o nome do motorista preenchido
- **Requisito atendido**: Feedback visual de cadastro realizado sem necessidade de banco de dados

---

### 6. Tela de Transmissão (`/transmissao`)

Tela de monitoramento em tempo real dos veículos.

- **Mapa interativo**: Renderizado com a biblioteca Leaflet utilizando tiles do OpenStreetMap, centralizado na região de São Paulo
- **Painel lateral**: Exibe o título "Motoristas" e um nome de motorista de exemplo ("João Ferreira Silva")
- **Requisito atendido**: Exibição do mapa funcional com seção de motoristas visível; não inclui rastreamento GPS real pois seria necessário integração com hardware

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| React 18 | Biblioteca de interface |
| TypeScript | Tipagem estática |
| Tailwind CSS | Estilização |
| React Router | Navegação entre telas |
| Leaflet | Mapa interativo na tela de Transmissão |
| Lucide React | Ícones |
| Vite | Build e desenvolvimento |

---

## 🚀 Como Executar

```bash
npm install
npm run dev
```

O projeto será iniciado em `http://localhost:5173`.

---

## 📝 Observações

- Este protótipo é uma **simulação sem backend**. Nenhum dado é persistido em banco de dados.
- Os feedbacks de sucesso (cadastro, login) são exibidos através de notificações visuais (toasts).
- As telas de Cadastro de Ônibus, Cadastro de Ponto e Acessar Dados não foram implementadas pois não faziam parte do escopo solicitado.
