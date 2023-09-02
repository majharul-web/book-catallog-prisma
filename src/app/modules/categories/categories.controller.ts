import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categoriesFilterableFields } from './categories.constants';
import { CategoriesService } from './categories.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoriesService.createCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});
const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, categoriesFilterableFields);
  const options = pick(req.query, ['size', 'page', 'sortBy', 'sortOrder']);
  const result = await CategoriesService.getAllCategories(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculties fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleCategories = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoriesService.getSingleCategories(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fetched successfully',
    data: result,
  });
});

const updateCategories = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await CategoriesService.updateCategories(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories updated successfully',
    data: result,
  });
});
const deleteCategories = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoriesService.deleteCategories(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories deleted successfully',
    data: result,
  });
});

export const CategoriesController = {
  getAllCategories,
  getSingleCategories,
  updateCategories,
  deleteCategories,
  createCategory,
};
