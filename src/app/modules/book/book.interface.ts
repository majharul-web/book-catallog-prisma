export type IBookFilterRequest = {
  search?: string | undefined;
  title?: string | undefined;
  category?: string | undefined;
  maxPrice?: number | undefined;
  minPrice?: number | undefined;
};
