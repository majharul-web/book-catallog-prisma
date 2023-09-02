import { NextFunction, Request, Response } from 'express';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import prisma from '../../shared/prisma';
import { ENUM_USER_ROLE } from '../../enums/user';

const checkOrderAuthorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderId = req.params.id;
    const { role, userId } = req.user || {};

    if (role === ENUM_USER_ROLE.ADMIN) {
      next();
    } else if (role === ENUM_USER_ROLE.CUSTOMER) {
      if (orderId) {
        const order = await prisma.order.findUnique({
          where: {
            id: orderId,
            userId: userId,
          },
        });

        if (order) {
          next();
        } else {
          throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
        }
      }
    }
  } catch (error) {
    next(error);
  }
};

export default checkOrderAuthorization;
