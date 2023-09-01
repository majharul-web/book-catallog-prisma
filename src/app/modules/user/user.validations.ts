import { z } from 'zod';

const updateUserZodSchema = z.object({
  body: z.object({
    userNumber: z.string().optional(),
    floor: z.string().optional(),
    buildingId: z.string().optional(),
  }),
});

export const UserValidation = {
  updateUserZodSchema,
};
