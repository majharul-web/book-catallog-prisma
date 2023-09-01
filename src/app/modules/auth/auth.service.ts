import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const signUp = async (userData: User): Promise<User | null> => {
  if (userData) {
    userData.role = 'customer';
  }
  const result = await prisma.user.create({
    data: userData,
  });

  return result;
};

export const AuthService = {
  signUp,
};
