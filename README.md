# Book Catallog Backend Assignment

<hr>

### Project Name: Book Catallog Backend

The main focus of this assignment is to implement CRUD operations, pagination and filtering using Prisma, Postgres and Express.

### Technology Stack:

- Use TypeScript as the Programming Language.
- Use Express.js as the web framework.
- Use Prisma as the Object Realtion Model (ORM).
- Use postgreSQL as the database.

## Installation Steps

### Follow these steps to clone and set up starter project:

1. `Clone the project:` Open your terminal or command prompt and run the following command to clone the project repository:

2. `Navigate into the project directory:` Use the cd command to navigate into the project directory:

```bash
cd express-sql-starter
```

3. `Install project dependencies:` Next, install the project dependencies by running the following command:

```bash
yarn install
```

### Application Routes:

#### User

- https://a8-book-catalog.vercel.app/api/v1/auth/signup (POST)
- https://a8-book-catalog.vercel.app/api/v1/users (GET)
- https://a8-book-catalog.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET)
- https://a8-book-catalog.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- https://a8-book-catalog.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE)
- https://a8-book-catalog.vercel.app/api/v1/profile (GET)

### Category

- https://a8-book-catalog.vercel.app/api/v1/categories/create-category (POST)
- https://a8-book-catalog.vercel.app/api/v1/categories (GET)
- https://a8-book-catalog.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET)
- https://a8-book-catalog.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- https://a8-book-catalog.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE)

### Books

- https://a8-book-catalog.vercel.app/api/v1/books/create-book (POST)
- https://a8-book-catalog.vercel.app/api/v1/books (GET)
- https://a8-book-catalog.vercel.app/api/v1/books/:categoryId/category (GET)
- https://a8-book-catalog.vercel.app/api/v1/books/:id (GET)
- https://a8-book-catalog.vercel.app/api/v1/books/:id (PATCH)
- https://a8-book-catalog.vercel.app/api/v1/books/:id (DELETE)

### Orders

- https://a8-book-catalog.vercel.app/api/v1/orders/create-order (POST)
- https://a8-book-catalog.vercel.app/api/v1/orders (GET)
- https://a8-book-catalog.vercel.app/api/v1/orders/:orderId (GET)
