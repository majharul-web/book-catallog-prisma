export const userSearchableFields: string[] = [
  'name',
  'email',
  'contactNo',
  'role',
];

export const userFilterableFields: string[] = [
  'searchTerm',
  ...userSearchableFields,
];
