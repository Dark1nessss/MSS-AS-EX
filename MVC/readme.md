# MVC Project

Este projeto implementa a arquitetura **Model-View-Controller (MVC)** em TypeScript, demonstrando a separação de responsabilidades entre modelo, controlador e visualização.

## Estrutura do Projeto

mvc-project/
├── src/
│   ├── models/
│   │   └── UserModel.ts       # Define a estrutura dos dados
│   ├── controllers/
│   │   └── UserController.ts  # Gerencia a lógica da aplicação
│   ├── views/
│   │   └── UserView.ts        # Renderiza os dados ao utilizador
│   ├── app.ts                 # Integração do MVC
│   └── index.ts               # Ponto de entrada do programa
├── package.json
├── tsconfig.json
└── README.md

## Como Rodar
```bash
1. Certifique-se de que as dependências estejam instaladas:

   npm install

2. Execute o programa principal:

   npx ts-node src/index.ts
```
## Resultado Esperado

O terminal exibirá a lista de utilizadores, adicionará um novo utilizador e mostrará a lista atualizada:

Lista de Utilizadores:
ID: 1, Nome: Dmytro  
ID: 2, Nome: Ana  

A adicionar novo utilizador...  
Novo utilizador adicionado: ID: 3, Nome: João  

Lista atualizada de Utilizadores:  
ID: 1, Nome: Dmytro  
ID: 2, Nome: Ana  
ID: 3, Nome: João  

## Observações

- Certifique-se de que a estrutura de pastas corresponda à descrita acima.
- Verifique se o TypeScript e o ts-node estão configurados corretamente no projeto.
- As alterações nos modelos, controladores ou visualizações podem ser refletidas diretamente ao reexecutar o programa.