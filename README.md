# Fitnest

E-commerce for fitness and sports equipment.

## References

- https://topscore.id
- https://decathlon.co.id

## Links

### Frontend

Production:

- https://fifa-fitnest.agnuramdan.com
- https://fifa-fitnest.mohammadfarizan.com
- https://fifa-fitnest.fikrialwan.com
- https://fifa-fitnest.nurikhwan.com

Local:

- http://localhost:5173

### Backend

Production:

- `https://api.kontenbase.com/query/api/v1/19877131-8b2f-4e7a-91fc-db45066dea23`

### Design

- Figma Mockup: https://www.figma.com/file/Xm2NJzDAYjBLvUPuK8II77/Fitnest?node-id=0%3A1

## Main Features

- [x] Products showcase
- [x] Detail product
- [x] Show products by brand
- [x] Filter products by category
- [x] Search products
- [x] See cart page
- [x] Add to cart
- [x] Checkout cart
- [x] Authorization user

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
    - React Router DOM
- Data Fetching
  - REST API: `swr` & `axios`
- State Management
  - Recoil
- Misc
  - Prettier
  - ESLint

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

This project is deployed on Netlify, you can check the website in the about section or [visit fifa-fitnest.netlify.app](https://fifa-fitnest.netlify.app).

## REST API Endpoints

| HTTP   | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| GET    | `/brands?$lookup=*`       | Get all brands       |
| POST   | `/brands/`                | Create brand         |
| PATCH  | `/brands/:id`             | Patch brand          |
| DELETE | `/brands/:id`             | Delete brand         |
| GET    | `/products?$lookup=*`     | Get all products     |
| POST   | `/products/`              | Create product       |
| PATCH  | `/products/:id`           | Patch product        |
| DELETE | `/products/:id`           | Delete product       |
| GET    | `/categories?$lookup=*`   | Get all categories   |
| POST   | `/categories/`            | Create category      |
| PATCH  | `/categories/:id`         | Patch category       |
| DELETE | `/categories/:id`         | Delete category      |
| GET    | `/sizeCategory?$lookup=*` | Get all sizeCategory |
| POST   | `/sizeCategory/`          | Create sizeCategory  |
| PATCH  | `/sizeCategory/:id`       | Patch sizeCategory   |
| DELETE | `/sizeCategory/:id`       | Delete sizeCategory  |

## Data Model

### Product

```json
{
  "_id": "abc123",
  "brandId": "nike123",
  "name": "Nike Tiempo",
  "descripton": "Some details about\nthe product",
  "imageUrl": "https://fitnest/imags/filename.jpeg",
  "price": 1500000,
  "createdAt": "",
  "updatedAt": ""
}
```

### Cart

Simple:

```json
{
  "_id": "abc123",
  "products": ["abc123", "abc123"],
  "isCheckout": false,
  "userId": "user123",
  "createdAt": "",
  "updatedAt": ""
}
```

Complete:

```json
{
  "_id": "abc123",
  "cartProducts": [
    {
      "_id": "cartproduct123",
      "productId": "product123",
      "cartId": "cart123",
      "quantity": 3
    }
  ],
  "userId": "user123",
  "isCheckout": false,
  "createdAt": "",
  "updatedAt": ""
}
```

### CartProduct

```json
{
  "_id": "cartproduct123",
  "productId": "product123",
  "cartId": "cart123",
  "quantity": 3
}
```

### Brand

```json
{
  "_id": "abc123",
  "name": "Adidas",
  "description": "Some details about\nthe brand",
  "imageUrl": "https://fitnest/images/filename.jpeg",
  "createdAt": "",
  "updatedAt": ""
}
```

### Category

```json
{
  "_id": "abc123",
  "productId": "nike123",
  "sizeQuantityId": "l123",
  "userId": "user123",
  "isCheckout": false,
  "createdAt": "",
  "updatedAt": ""
}
```

### SizeQuantity

```json
{
  "_id": "abc123",
  "productId": "nike123",
  "size": "40",
  "quantity": 50,
  "createdAt": "",
  "updatedAt": ""
}
```

### User

```json
{
  "_id": "abc123",
  "name": "First Last",
  "email": "firstlast@user.com",
  "password": "sadw1231ceasdav4qwq",
  "createdAt": "",
  "updatedAt": ""
}
```
