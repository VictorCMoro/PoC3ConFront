# PoC3Con - Frontend

Este é o **frontend** da aplicação **PoC3Con**, um sistema web desenvolvido com **Angular** que permite a criação, edição, visualização e listagem de usuários e seus pedidos. A aplicação está integrada a uma API backend construída em .NET com arquitetura limpa (Clean Architecture) e Domain-Driven Design (DDD).

---

## Como configurar e executar o projeto

### Requisitos

- Node.js (versão 18.x ou superior)
- Angular CLI (`npm install -g @angular/cli`)
- Navegador moderno (Chrome, Edge, Firefox)

### Passos para execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/poc3con-frontend.git
cd poc3con-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
ng serve
```

O projeto será iniciado em `http://localhost:4200`.

---

## Decisões de Design e Arquitetura

### Organização por funcionalidades

A aplicação foi organizada seguindo o padrão de pastas baseado em funcionalidades (feature-based structure), promovendo modularidade e escalabilidade. A pasta `features/usuarios/pages` contém subpastas para cada tipo de ação do usuário, como criação, edição, listagem e detalhes.

### Separação de responsabilidades

Cada componente possui seu próprio HTML, SCSS e TypeScript, promovendo encapsulamento e fácil manutenção. Serviços específicos foram criados para tratar regras de negócio e comunicação com o backend de forma isolada.

### Reactive Forms

Formulários utilizam o `ReactiveFormsModule` para oferecer maior controle sobre validações e reatividade dos dados, seguindo boas práticas de desenvolvimento Angular.

### Serviços e Observables

A comunicação com a API é realizada por meio de serviços organizados por entidade (`ClienteService` e `PedidoService`), com uso de `HttpClient` e `Observables`.

### Validações reutilizáveis

Foram criados validadores reutilizáveis na pasta `shared/validators`, incluindo validações específicas como CPF e telefone.

### Estilo e responsividade

A interface foi construída com **Bootstrap 5**, o estilo está separado por componente em arquivos `.scss`.


## Banco de Dados

### Banco utilizado: SQL Server

A escolha do SQL Server foi feita com base nos seguintes fatores:

- Integração direta com o .NET e o Entity Framework Core
- Suporte robusto a constraints, validações e integridade transacional
- Amplo suporte em ambiente corporativo e facilidade de escalonamento em nuvem (Azure SQL)
- Ferramentas de gerenciamento e documentação bem estabelecidas

---

## Estrutura de Pastas

```
src/
└── app/
    ├── features/
    │   └── usuarios/
    │       └── pages/
    │           ├── criacao-cliente/
    │           ├── edicao-cliente/
    │           ├── detalhes-usuario/
    │           └── lista-de-usuarios/
    ├── services/
    │   ├── clientes/
    │   └── pedidos/
    ├── models/
    └── shared/
        └── validators/
```
