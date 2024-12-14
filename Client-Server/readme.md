# Client-Server Project

Este projeto implementa a arquitetura cliente-servidor (**Client-Server**) em TypeScript. Ele consiste em um servidor que fornece uma API e um cliente que consome os dados dessa API.

## Estrutura do Projeto

client-server-project/
├── src/
│   ├── server.ts          # Servidor
│   └── client.ts          # Cliente
├── package.json
├── tsconfig.json
└── README.md

## Como Rodar
```bash
1. Certifique-se de que as dependências estejam instaladas:

   npm install

2. Inicie o servidor:

   npx ts-node src/server.ts

3. Em outro terminal, execute o cliente:

   npx ts-node src/client.ts
```
## Resultado Esperado

- **Terminal do Servidor**:

  Server is running on http://localhost:3000

- **Terminal do Cliente**:

  Response: 
  [
    { id: 1, name: "Dmytro" },
    { id: 2, name: "Ana" }
  ]

## Observações

- Certifique-se de que o servidor esteja em execução antes de rodar o cliente.
- O cliente faz uma requisição GET para o servidor em `http://localhost:3000/users`.
- Ajuste as portas caso necessário, para evitar conflitos com outros serviços em execução.
