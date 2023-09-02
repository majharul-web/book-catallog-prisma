import express from 'express';
import { AuthRoutes } from './../modules/auth/auth.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { CategoriesRoutes } from '../modules/categories/categories.routes';
import { BookRoutes } from '../modules/book/book.routes';
import { ProfileRoutes } from '../modules/profile/profile.routes';
import { OrderRoutes } from '../modules/order/order.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/categories',
    route: CategoriesRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
