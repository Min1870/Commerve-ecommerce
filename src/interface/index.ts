export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  shipping: boolean;
}

interface FeaturedProducts {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  company: string;
  description: string;
  category: string;
  featured: true;
  shipping: boolean;
}

export type SingleProduct = {
  id: string;
  name: string;
  price: number;
  featured: boolean;
  colors: string[];
  description: string;
  stock: number;
  shipping: boolean;
  stars: number;
  reviews: number;
  sku: any;
  company: string;
  images: any;
};

export interface ProductsState {
  productsLoading: boolean;
  productsError: any;
  products: Product[];
  featuredProducts: FeaturedProducts[];
  singleProductLoading: boolean;
  singleProductError: boolean;
  singleProduct: SingleProduct;
}

export interface ProductImage  {
  id: string;
  width: number;
  height: number;
  filename: string;
  url: string;
  size: number;
  type: string;
  thumbnails: any[];
};
