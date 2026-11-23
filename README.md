# Lista — React básico: exibindo dados de uma API

Aplicação React (Vite) que consulta o endpoint público
`https://jsonplaceholder.typicode.com/users` e apresenta os usuários em uma lista.

Conceitos utilizados:

- Componentes e JSX (`App`, `ListaUsuarios`, `ItemUsuario`)
- Props (`ItemUsuario` recebe `nome`, `email` e `cidade`)
- Estado com `useState` (`itens`, `carregando`, `erro`)
- Consulta ao carregar a página com `useEffect`
- Requisição HTTP com `fetch`
- Listas com `map` e `key`
- Mensagens de carregamento, erro e lista vazia

## Formato da resposta

O endpoint retorna um array JSON (resumido):

```json
[
  { "id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz", "address": { "city": "Gwenborough" } },
  { "id": 2, "name": "Ervin Howell", "email": "Shanna@melissa.tv", "address": { "city": "Wisokyburgh" } }
]
```

## Execução

```bash
npm install
npm run dev
```

Acesse o endereço informado pelo Vite (normalmente http://localhost:5173).
