import { z } from 'zod';

const createOrderZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Order title is required',
    }),
    author: z.string({
      required_error: 'Order author is required',
    }),
    price: z.number({
      required_error: 'Order price is required',
    }),
    genre: z.string({
      required_error: 'Order genre is required',
    }),
    publicationDate: z.string({
      required_error: 'Order publicationDate is required',
    }),
    categoryId: z.string({
      required_error: 'Order categoryId is required',
    }),
  }),
});

const updateOrderZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    price: z.number().optional(),
    genre: z.string().optional(),
    publicationDate: z.string().optional(),
    categoryId: z.string().optional(),
  }),
});

export const OrderValidation = {
  createOrderZodSchema,
  updateOrderZodSchema,
};
