import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoriesController } from './categories.controller';
import { CategoriesValidation } from './categories.validations';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoriesValidation.createCategoriesZodSchema),
  CategoriesController.createCategory
);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoriesValidation.updateCategoriesZodSchema),
  CategoriesController.updateCategories
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoriesController.deleteCategories
);
router.get('/', CategoriesController.getAllCategories);

router.get('/:id', CategoriesController.getSingleCategories);

export const CategoriesRoutes = router;
