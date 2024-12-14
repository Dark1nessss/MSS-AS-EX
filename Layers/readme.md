# Layers Project

Este projeto implementa a arquitetura de camadas (**Layers**) em TypeScript. Ele separa responsabilidades em três camadas principais: **Dados**, **Negócio** e **Apresentação**.

## Estrutura do Projeto
```plaintext
layers-project/
├── camada/
│   ├── dados.ts          # Camada de Dados
│   ├── negocio.ts        # Camada de Negócio
│   └── apresentacao.ts   # Camada de Apresentação
├── package.json
├── tsconfig.json
└── README.md
```

## Como Rodar
```bash
1. Certifique-se de que as dependências estejam instaladas:

   npm install

2. Execute o programa diretamente pela camada de apresentação:

   npx ts-node camada/apresentacao.ts
```
## Resultado Esperado

A lista de utilizadores será exibida no terminal:

Lista de utilizadores:
ID: 1, Nome: Dmytro
ID: 2, Nome: Ana
