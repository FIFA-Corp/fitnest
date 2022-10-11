# Group Project Title

Project description with clear goal.

![Screenshot 1]()

![Screenshot 2]()

## Links

### Production

- https://project.vercel.app
- https://project.netlify.app
- https://project.example.com

### Local

- http://localhost:3000
- http://localhost:5173

### Design

- Figma Mockup: https://figma.com
- Figma Prototype: https://figma.com
- Whimsical Flowchart: https://whimsical.com

## Main Features

- First feature
- Second feature
- Third feature
- Fourth feature
- Fifth feature

## Team Members

| Name      | Role              | GitHub URL                                 |
| --------- | ----------------- | ------------------------------------------ |
| Albatross | Lead, Frontend    | [@albatross](https://github.com/albatross) |
| Bandicoot | Design, Docs      | [@bandicoot](https://github.com/bandicoot) |
| Chipmunk  | Frontend, Design  | [@chipmunk](https://github.com/chipmunk)   |
| Dolphin   | Frontend, Backend | [@dolphin](https://github.com/dolphin)     |

## Tech Stack

### Commerce

- HTML
- CSS
  - Tailwind CSS
- JavaScript
  - TypeScript
- Node.js & npm
- React
  - Vite v3
    - React Router v6
  - Next.js v12
    - next/router
    - next/image
  - Remix v1.7.2
    - Remix Router
- Data Fetching
  - REST API: `axios` / `swr`
  - GraphQL: `urql` / `graphql-request`
- UI Components
  - Ariakit
  - Headless UI
  - Radix UI
- Misc
  - Prettier
  - ESLint
  - `concurrently`

## Development

Install dependencies:

```sh
npm install
```

Run server in development mode:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Start in production mode:

```sh
npm start
```

## Deployment

Details on deployment using Vercel or Netlify here.

## Data Model

### Resources

```json
{
  "id": "abc123",
  "title": "Resource name",
  "description": "Some details about\nthe resource",
  "isAvailable": true,
  "quantity": 100,
  "createdAt": "",
  "updatedAt": ""
}
```

```graphql
type Resource {
  id: String!
  title: String!
  description: String
  isAvailable: Boolean!
  quantity: Number!
  tags: [Tag!]!
  createdAt: String!
  updatedAt: String!
}
```

### Tags

```json
{
  "id": "abc123",
  "name": "Tag name"
}
```

```graphql
type Tag {
  id: String!
  name: String!
}
```

### User

```json
{
  "id": "abc123",
  "name": "First Last",
  "email": "firstlast@user.com"
}
```

```graphql
type User {
  id: String!
  name: String!
  email: String!
}
```

## REST API Documentation

Base URL: `https://api.example.com`

### Resources

| Endpoint         | Method   | Description               |
| ---------------- | -------- | ------------------------- |
| `/resources`     | `GET`    | Get all resources         |
| `/resources/:id` | `GET`    | Get one resource by id    |
| `/resources`     | `POST`   | Create new resource       |
| `/resources/:id` | `PUT`    | Update one resource by id |
| `/resources/:id` | `PATCH`  | Patch one resource by id  |
| `/resources`     | `DELETE` | Remove all resources      |
| `/resources/:id` | `DELETE` | Remove one resource by id |

### Auth

| Endpoint        | Method | Description                    |
| --------------- | ------ | ------------------------------ |
| `/auth/signup`  | `POST` | Sign up new account            |
| `/auth/signin`  | `POST` | Sign in to existing account    |
| `/auth/signout` | `POST` | Sign out authenticated account |

## GraphQL API Documentation

Base URL: `https://api.example.com/graphql`

```graphql
query getAllResources {
  resources {
    id
    title
  }
}
```

```graphql
query getOneResourceById {
  resource(id: "abc123") {
    id
    title
  }
}
```

```graphql
mutation createNewResource {
  createResource(
    title: "New resource name"
    description: "More details about\nthe new resource."
  ) {
    id
    title
  }
}
```
