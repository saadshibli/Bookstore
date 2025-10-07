This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.







## **Backend Development: Phase 1 Kickoff**

The goal for this initial phase is to build the foundational services and the first set of critical API endpoints.

### **1. Initial Setup (Anurag & Saad)**

* **Task:** Create the project's folder structure (`/lib`, `/models`, etc.) and the `develop` branch in your Git repository.
    * **Lead:** **Saad**
* **Task:** Set up the initial AWS infrastructure: a PostgreSQL database on **RDS**, an **S3** bucket for storage, and an initial **Elastic Beanstalk** environment for the backend application.
    * **Lead:** **Anurag**

### **2. Implement Core Database Models (Anurag, Saad, Himanshu)**

* **Task:** Based on the agreed-upon data shapes, create the initial code files for the core Mongoose/Prisma schemas.
    * `src/models/user.model.ts`
    * `src/models/product.model.ts`
    * `src/models/order.model.ts`
* **Lead:** **Anurag** will own the final schema implementation, with input from **Saad** and **Himanshu**.

### **3. Develop Initial API Endpoints (Parallel Work)**

This is where the team will work on different parts of the API simultaneously. Everyone should create their own feature branches from `develop` (e.g., `feature/auth-api`).

* **Task: Build the Authentication API (Priority #1)**
    * **Description:** Implement the complete user login and registration flow. Create the API endpoints to handle Firebase token verification and user creation in the database.
    * **Endpoints:**
        * `POST /api/auth/login` (Verifies Firebase token, finds or creates a user, returns a session token)
        * `GET /api/users/me` (A protected route to fetch the currently logged-in user's profile)
    * **Lead:** **Anurag**

* **Task: Build the Admin Product Management API**
    * **Description:** Create the secure, admin-only endpoints for managing products. This is the core of your responsibilities.
    * **Endpoints:**
        * `POST /api/admin/products` (Create a new product)
        * `PUT /api/admin/products/:id` (Update an existing product)
        * `DELETE /api/admin/products/:id` (Delete a product)
        * `GET /api/admin/products` (Get a list of all products for the admin view)
    * **Lead:** **Saad**

* **Task: Build the Public Product Catalog API**
    * **Description:** Create the public-facing endpoints that will be used to display products to all users on the website.
    * **Endpoints:**
        * `GET /api/products` (Fetch a list of products, including logic for filtering, sorting, and pagination to support infinite scroll)
        * `GET /api/products/:slug` (Fetch the details for a single product by its slug/ID)
    * **Lead:** **Himanshu**

### **4. API Testing and Documentation**

* **Task:** As you build your endpoints, use a tool like **Postman** or **Insomnia** to test them thoroughly.
* **Task:** Create a simple `API_DOCS.md` file in the project root. As you complete an endpoint, add a note about its URL, the expected request body, and what a successful response looks like. This will be critical for the frontend team.

---
### **Parallel Task: UI/UX Design**

* While the backend team works on the above, **Binita** will be focused on completing the high-fidelity Figma designs for all the core user flows.

Let's begin.