import { z } from 'zod';

const createOrderZodSchema = z.object({
  body: z.object({
    orderedBooks: z
      .array(
        z.object({
          bookId: z.string({ required_error: 'Book id is required' }),
          quantity: z.number({ required_error: 'Book quantity is required' }),
        })
      )
      .refine(orderedBooks => orderedBooks.length > 0, {
        message: 'Ordered book list must not be empty',
      }),
  }),
});

export const OrderValidation = {
  createOrderZodSchema,
};
