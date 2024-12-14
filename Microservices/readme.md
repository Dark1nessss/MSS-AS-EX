# Microservices Project

Este projeto implementa uma arquitetura baseada em **Microsserviços**, onde diferentes serviços independentes (User Service, Product Service e Gateway Service) comunicam-se via HTTP. Cada serviço é executado separadamente.

## Estrutura do Projeto
```plaintext
microservices-project/
├── services/
│   ├── user/
│   │   ├── src/
│   │   │   ├── app.ts          # Lógica do User Service
│   │   │   └── index.ts        # Inicializador do User Service
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── product/
│   │   ├── src/
│   │   │   ├── app.ts          # Lógica do Product Service
│   │   │   └── index.ts        # Inicializador do Product Service
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── gateway/
│       ├── src/
│       │   ├── app.ts          # Gateway para comunicação entre serviços
│       │   └── index.ts        # Inicializador do Gateway Service
│       ├── package.json
│       └── tsconfig.json
├── README.md
```
## Como Rodar

1. **User Service**:
```bash
   - Acesse a pasta do User Service:
     
     cd services/user
   - Instale as dependências:
     
     npm install
   - Inicie o serviço:
     
     npm start

2. **Product Service**:
   - Acesse a pasta do Product Service:
     
     cd ../product
   - Instale as dependências:

     npm install
   - Inicie o serviço:

     npm start

3. **Gateway Service**:
   - Acesse a pasta do Gateway Service:
     
     cd ../gateway
   - Instale as dependências:
     
     npm install
   - Inicie o serviço:
     
     npm start
```
## Teste as Rotas

- **User Service**:
  - Acesse no navegador ou via curl:
    http://localhost:3001/users

- **Product Service**:
  - Acesse no navegador ou via curl:
    http://localhost:3002/products

- **Gateway Service**:
  - Acesse no navegador ou via curl para os dados agregados:
    - http://localhost:3000/users
    - http://localhost:3000/products

## Observações

- Certifique-se de que as portas 3000, 3001 e 3002 estejam disponíveis.
- O **Gateway Service** age como um ponto central de acesso, consumindo dados do User Service e do Product Service.
- Caso necessário, ajuste as portas nos arquivos `index.ts` de cada serviço.
