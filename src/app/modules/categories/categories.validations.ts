import { z } from 'zod';

const createCategoriesZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Category title is required',
    }),
  }),
});
const updateCategoriesZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const CategoriesValidation = {
  updateCategoriesZodSchema,
  createCategoriesZodSchema,
};
