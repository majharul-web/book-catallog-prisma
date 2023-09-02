export const categoriesSearchableFields: string[] = ['title'];

export const categoriesFilterableFields: string[] = [
  'searchTerm',
  ...categoriesSearchableFields,
];
