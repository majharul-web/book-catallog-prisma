import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import bcrypt from 'bcrypt';
import config from '../../../config';

const signUp = async (userData: User): Promise<Partial<User> | null> => {
  const hashedPassword = await bcrypt.hash(
    userData.password,
    Number(config.bycrypt_salt_rounds)
  );

  userData.password = hashedPassword;

  const result = await prisma.user.create({
    data: userData,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });

  return result;
};

export const AuthService = {
  signUp,
};
