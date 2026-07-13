# Blog Pessoal

Aplicação front-end do Blog Pessoal, construída em **React + TypeScript + Vite**, com autenticação de usuário e CRUD completo de **Temas** e **Postagens**, consumindo uma API REST.

## ✨ Funcionalidades

- Cadastro e login de usuário (com token de autenticação)
- Listagem, criação, edição e exclusão de **Temas**
- Listagem, criação (via modal), edição e exclusão de **Postagens**
- Página de Perfil com os dados do usuário logado
- Alertas visuais (toasts) de sucesso, erro e informação
- Indicadores de carregamento (loading) durante as chamadas à API
- Rotas protegidas: usuário não autenticado é redirecionado para o login

## 🎨 Identidade visual

Paleta em tons de **verde-azulado (teal)**, com ilustrações originais em SVG nas telas de Login, Cadastro, Home e Perfil.

## 🗂️ Estrutura de pastas

```
src/
├── assets/         # ilustrações e imagens
├── components/     # componentes reutilizáveis (navbar, footer, tema, postagem)
├── contexts/        # contexto de autenticação (AuthContext)
├── models/          # interfaces TypeScript (Usuario, Tema, Postagem...)
├── pages/           # páginas (login, cadastro, home, perfil)
├── services/         # comunicação com a API (axios)
└── utils/            # utilitários (ToastAlerta)
```

## 🚀 Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Copie o arquivo de variáveis de ambiente e configure a URL da API:
   ```bash
   cp .env.example .env
   ```
   Edite o `.env` com o endereço do seu backend, por exemplo:
   ```
   VITE_API_URL=http://localhost:8080
   ```
3. Rode o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para gerar a build de produção:
   ```bash
   npm run build
   ```

## 🔌 Backend

Este front-end espera uma API REST com os endpoints `/usuarios/cadastrar`, `/usuarios/logar`, `/temas` e `/postagens` (padrão do projeto Blog Pessoal da Generation Brasil).
