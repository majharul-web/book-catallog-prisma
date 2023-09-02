export const bookFilterableFields: string[] = [
  'search',
  'title',
  'minPrice',
  'maxPrice',
  'category',
];

export const bookSearchableFields: string[] = ['title', 'author', 'genre'];

export const bookRelationalFields: string[] = ['categoryId'];
export const bookRelationalFieldsMapper: {
  [key: string]: string;
} = {
  categoryId: 'category',
};
