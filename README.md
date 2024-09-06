# Acompanhamento de produção em uma indústria de manufatura de produtos

## Getting Started

Para rodar o projeto, você precisa ter o Node.js instalado na sua máquina. Você pode baixar o
Node.js [aqui](https://nodejs.org/).

Depois de instalar o Node.js, você pode clonar o repositório e instalar as dependências do projeto com o seguinte
comando:

```bash
git clone https://github.com/HigorGrigorio/manufatura.git
cd manufatura

# Instalando dependências
npm install
# ou
yarn # para quem usa yarn
# ou
pnpm install # para quem usa pnpm
# ou
bun install # para quem usa bun
```

Após instalar as dependências, você pode rodar o projeto com o seguinte comando:

```bash
npm run dev
# ou
yarn dev # para quem usa yarn
# ou
pnpm dev # para quem usa pnpm
# ou
bun dev # para quem usa bun
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura de pastas

- `components`: Componentes React que são utilizados em mais de uma página.
- `app`: Páginas da aplicação.
- `context`: Contextos da aplicação.
- `hooks`: Hooks customizados.
- `lib`: Funções utilitárias.
- `layouts`: Layouts da aplicação.

## Banco de dados

Para este projeto foi utilizado um json como banco de dados. O arquivo `database.json` contém os dados utilizados na aplicação.
