# React Native Sample App - Mentoria

Este é um projeto desenvolvido durante uma mentoria em React Native, utilizando as melhores práticas e bibliotecas modernas para criar uma aplicação móvel robusta e escalável.

## Tecnologias Utilizadas

- **React Native com Expo**: Framework para desenvolvimento de aplicações móveis cross-platform
- **TypeScript**: Linguagem tipada que melhora a manutenção e prevenção de erros
- **Expo Router**: Sistema de roteamento baseado em arquivos para navegação
- **Redux Toolkit**: Gerenciamento de estado global da aplicação
- **React Query**: Gerenciamento de estado do servidor e requisições HTTP
- **Axios**: Cliente HTTP para comunicação com APIs
- **Async Storage**: Armazenamento local persistente
- **Reanimated**: Biblioteca para animações performáticas
- **Reactotron**: Ferramenta de debugging para React Native

## Estrutura do Projeto

O projeto está organizado seguindo uma arquitetura modular e escalável:

```
app/                    # Rotas e navegação (Expo Router)
  _layout.tsx           # Layout principal da aplicação
  (tabs)/               # Organização de tabs
    _layout.tsx         # Layout das tabs
    form.tsx            # Rota para o formulário
    index.tsx           # Rota principal (home)
components/             # Componentes reutilizáveis
features/               # Funcionalidades específicas
hooks/                  # Custom hooks
screens/                # Telas da aplicação
services/               # Serviços de API e gerenciamento de dados
store/                  # Configuração do Redux e slices
types/                  # Definições de tipos
utils/                  # Utilitários
```

## Conceitos Abordados na Mentoria

### 1. Gerenciamento de Estado

- **Redux Toolkit**: Configuração de store, slices e reducers para gerenciar estados globais
  - Criação de slices para diferentes domínios (arcs e forms)
  - Tipagem do store com TypeScript
  - Integração com Reactotron para debugging

### 2. Custom Hooks

- **useStore**: Hook para acessar o store Redux com tipagem correta
- **useForm**: Gerenciamento de formulários com validação
- **useFavoriteArc**: Lógica de gerenciamento de arcos favoritos
- **usePromise**: Abstração para lidar com operações assíncronas

### 3. Consulta de Dados e Gerenciamento de Estado do Servidor

- **React Query**: Utilizado para buscar e cachear dados da API
- Estrutura de serviços em camadas:
  - API: Configuração do cliente HTTP (axios)
  - Repository: Funções para acesso direto à API
  - Manager: Lógica de negócio e transformação de dados
  - Storage: Persistência local com AsyncStorage

### 4. Componentes Reutilizáveis e Patterns

- **FallbackWrapper**: Pattern para tratar estados de loading, erro e sucesso
- **ArcItem**: Componente de apresentação com animações
- Uso de `forwardRef` e criação de componentes animados

### 5. Animações e UI

- **Reanimated**: Implementação de animações performáticas (FadeIn, FadeOut, Flip)
- Estilização de componentes e uso de temas
- Uso de ícones e elementos visuais da biblioteca Expo

### 6. Navegação e Roteamento

- **Expo Router**: Sistema de navegação baseado em arquivos
- Organização de rotas com tabs e stacks

### 7. Boas Práticas de Typescript

- Tipagem de componentes, props e estados
- Uso de tipos genéricos para reutilização de código
- Definição de interfaces para dados da API

### 8. Debugging e Performance

- **Reactotron**: Configuração para monitoramento de estados e ações Redux
- Uso de `useMemo` para otimização de renderização
- Tratamento de erros e estados de loading

## Caso de Uso Principal: One Piece Arcs

A aplicação demonstra o consumo de uma API do One Piece, exibindo arcos da história e permitindo:

- Listar todos os arcos
- Filtrar arcos por título
- Marcar arcos como favoritos
- Visualizar detalhes dos arcos
- Persistir o estado de favoritos

## Começando

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o aplicativo:

   ```bash
   npx expo start
   ```

## Aprendizados Adicionais

- Separação de responsabilidades com arquitetura em camadas
- Gerenciamento de estado local vs global
- Estratégias de fetching e caching de dados
- Componentização para reusabilidade
- Tipagem forte com TypeScript para melhor manutenibilidade

---

## English Version

# React Native Sample App - Mentorship

This project was developed during a React Native mentorship, using modern libraries and best practices to build a scalable and maintainable mobile application.

## Technologies Used

- **React Native with Expo**: Cross-platform mobile development framework
- **TypeScript**: Strongly typed language to improve maintainability and reduce runtime errors
- **Expo Router**: File-based routing system for navigation
- **Redux Toolkit**: Global state management
- **React Query**: Server state and data fetching management
- **Axios**: HTTP client for API requests
- **Async Storage**: Persistent local storage
- **Reanimated**: High-performance animations
- **Reactotron**: Debugging tool for React Native

## Project Structure

The project follows a modular and scalable organization:

```
app/                    # Routes and navigation (Expo Router)
  _layout.tsx           # Main application layout
  (tabs)/               # Tabs organization
    _layout.tsx         # Tabs layout
    form.tsx            # Route for the form
    index.tsx           # Main route (home)
components/             # Reusable components
features/               # Feature-specific modules
hooks/                  # Custom hooks
screens/                # App screens
services/               # API services and data managers
store/                  # Redux configuration and slices
types/                  # Type definitions
utils/                  # Utilities
```

## Topics Covered in the Mentorship

### 1. State Management

- **Redux Toolkit**: Store configuration, slices and reducers to handle global state
  - Slices for different domains (arcs and forms)
  - Type-safe store with TypeScript
  - Reactotron integration for debugging

### 2. Custom Hooks

- **useStore**: Typed access to the Redux store
- **useForm**: Form handling with basic validation
- **useFavoriteArc**: Favorite arc management logic
- **usePromise**: Abstraction for handling async operations

### 3. Data Fetching and Server State

- **React Query**: Used for fetching, caching and synchronizing server data
- Layered services architecture:
  - API: HTTP client setup (axios)
  - Repository: Direct API access functions
  - Manager: Business logic and data transformation
  - Storage: Local persistence using AsyncStorage

### 4. Reusable Components and Patterns

- **FallbackWrapper**: Pattern to handle loading, error and success states
- **ArcItem**: Presentational component with animations
- Use of `forwardRef` and creation of animated components

### 5. Animations and UI

- **Reanimated**: Implementing performant animations (FadeIn, FadeOut, Flip)
- Component styling and simple theming
- Use of icons and visual assets from Expo

### 6. Navigation and Routing

- **Expo Router**: File-based navigation system
- Tabs and stacks organization for routes

### 7. TypeScript Best Practices

- Typing components, props and state
- Generic types for reusable code
- Interfaces/types for API responses

### 8. Debugging and Performance

- **Reactotron**: Monitor Redux actions and app state
- Use of `useMemo` for render optimization
- Handling errors and loading states

## Main Use Case: One Piece Arcs

The app demonstrates consuming a One Piece API to display story arcs and allows:

- Listing all arcs
- Filtering arcs by title
- Marking arcs as favorites
- Viewing arc details
- Persisting favorite state locally

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npx expo start
```

## Additional Learnings

- Separation of concerns with layered architecture
- Local vs global state strategies
- Data fetching and caching strategies
- Componentization for reusability
- Strong typing with TypeScript for maintainability
