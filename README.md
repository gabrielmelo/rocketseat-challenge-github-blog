## Github Blog

É um projeto desenvolvido para o desafio 3 da trilha de React da Rocketseat. 
A aplicação permite consultar perfis do GitHub, exibir informações do usuário e listar issues de um repositório público. O projeto foi construído utilizando tecnologias modernas como **Vite.js**, **TailwindCSS**, **React Query**, **React Router**, **Zod**, **Axios** e **Date.js**.

![Screenshot From 2025-03-02 22-12-19](https://github.com/user-attachments/assets/9f785714-fab4-445b-ab0e-0fce2528f34a)

## Funcionalidades
- **Consulta de Perfil do GitHub**: Insira o nome de usuário do GitHub para buscar informações do perfil, como nome, foto, biografia, número de seguidores, seguindo e mais.
- **Listagem de Repositórios**: Exibe uma lista dos repositórios públicos do usuário, com detalhes como nome, descrição, data de criação e linguagem principal.
- **Validação de Entrada**: Utiliza **Zod** para validar o campo de busca e garantir que apenas nomes de usuário válidos sejam consultados.
- **Cache de Dados**: Utiliza **React Query** para gerenciar o cache das consultas à API do GitHub, melhorando a performance e a experiência do usuário.

## Tecnologias Utilizadas
- [Vite.js](https://vitejs.dev/): Ferramenta de build rápida e moderna para aplicações web.
- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces de usuário.
- [TailwindCSS](https://tailwindcss.com/): Framework CSS utilitário para estilização rápida e responsiva.
- [React Query](https://tanstack.com/query/v4): Biblioteca para gerenciamento de estado e cache de dados.
- [React Router](https://reactrouter.com/): Biblioteca para roteamento e navegação em aplicações React.
- [Zod](https://zod.dev/): Biblioteca de validação de esquemas TypeScript-first.
- [Axios](https://axios-http.com/): Cliente HTTP para fazer requisições à API do GitHub.
- [Date.js](https://date-fns.org/): Biblioteca para manipulação e formatação de datas.

## Como Executar o Projeto
Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos
- Node.js (versão 16 ou superior)
