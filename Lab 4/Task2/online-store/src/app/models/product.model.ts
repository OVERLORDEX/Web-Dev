export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // в KZT
  rating: number; // 1-5
  image: string; // ссылка на главное изображение
  images: string[]; // массив изображений для галереи
  link: string; // URL продукта на kaspi.kz
}