# Fitnest

E-commerce for fitness and sports equipment.

## Links

### Production

- https://fitnest.agnuramdan.com
- https://fitnest.mohammadfarizan.com
- https://fitnest.fikrialwan.com
- https://fitnest.nurikhwan.com

### Local

- http://localhost:3000
- http://localhost:5173

### Design

- Figma Mockup: https://figma.com
- Figma Prototype: https://figma.com
- Whimsical Flowchart: https://whimsical.com

## Main Features

- Products showcase
- Show products by brand
- Filter products by category
- Search products
- Detail product
- Add to cart
- Checkout cart
- Authorization user
- Review product

## Team Members

| Name                 | Role                   | GitHub URL                                             |
| -------------------- | ---------------------- | ------------------------------------------------------ |
| Fikri Alwan R.       | Lead, Frontend, Design | [@fikrialwan](https://github.com/fikrialwan)           |
| Nur Ikhwan           | Frontend, Design       | [@ikhwanmachmud](https://github.com/ikhwanmachmud)     |
| Muhamad Agung Nur R. | Frontend, Design       | [@agnuramdan](https://github.com/agnuramdan)           |
| Mohammad Farizan     | Frontend, Design       | [@mohammadfarizan](https://github.com/mohammadfarizan) |

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
- Data Fetching
  - GraphQL: `urql`
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

### Brand

```json
{
  "id": "abc123",
  "name": "Adidas",
  "description": "Some details about\nthe brand",
  "imageUrl": "https://fitnest/images/filename.jpeg",
  "createdAt": "",
  "updatedAt": ""
}
```

```graphql
type Brand {
  id: String!
  title: String!
  description: String
  imageUrl: String!
  product: [Product!]!
  createdAt: String!
  updatedAt: String!
}
```

### Product

```json
{
  "id": "abc123",
  "brandId": "nike123",
  "name": "Nike Tiempo",
  "descripton": "Some details about\nthe product",
  "imageUrl": "https://fitnest/imags/filename.jpeg",
  "price": 1500000,
  "createdAt": "",
  "updatedAt": "",

}
```

```graphql
type Product {
  id: String!
  brandId: String!
  name: String!
  description: String!
  imageUrl: String!
  price: Number!
  sizeQuantity: [sizeQuantity!]!
  review: [review!]!
  createdAt: String!
  updatedAt: String!
}
```

### SizeQuantity
```json
{
  "id": "abc123",
  "productId": "nike123",
  "size": "40",
  "quantity": 50,
  "createdAt": "",
  "updatedAt": "",

}
```

```graphql
type SizeQuantity {
  id: String!
  productId: String!
  size: String!
  quantity: Number!
  review: [review!]!
  createdAt: String!
  updatedAt: String!
}
```

### Review
```json
{
  "id": "abc123",
  "productId": "nike123",
  "userId": "user123",
  "rating": 4,
  "message": "Message about product",
  "createdAt": "",
  "updatedAt": "",

}
```

```graphql
type Review {
  id: String!
  productId: String!
  userId: String!
  rating: Number!
  message: String!
  createdAt: String!
  updatedAt: String!
}
```

### User

```json
{
  "id": "abc123",
  "name": "First Last",
  "email": "firstlast@user.com",
  "password": "sadw1231ceasdav4qwq",
  "createdAt": "",
  "updatedAt": "",
}
```

```graphql
type User {
  id: String!
  name: String!
  email: String!
  password: String!
  createdAt: String!
  updatedAt: String!
}
```

### Cart

```json
{
  "id": "abc123",
  "productId": "nike123",
  "sizeQuantityId": "l123",
  "userId": "user123",
  "isCheckout": false,
  "createdAt": "",
  "updatedAt": "",
}
```

```graphql
type User {
  id: String!
  productId: String!
  sizeQuantityId: String!
  userId: String!
  isCheckout: Boolean!
  createdAt: String!
  updatedAt: String!
}
```

