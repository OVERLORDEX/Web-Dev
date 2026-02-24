import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'TV' },
    { id: 2, name: 'Washing Machines' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Coolers' }
  ];

  products: Product[] = [

    // TELEVISIONS
    {
      id: 1,
      name: 'Samsung 55" 4K Smart TV',
      description: 'Ultra HD Smart TV with HDR',
      price: 699990,
      rating: 5,
      image: 'images/tv1.jpg',
      images: ['images/tv1.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-qe55qn90dauxce-140-sm-seryi-119903939/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_tvs_desktop&gbraid=0AAAAAC7-v7jVePFPFprAivtLcXCvur7K6&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3ArlqtYYXCBCbBxOtA4UHP1QL4P401UI9aNNyljXSFOz1ririjJesEaAjhlEALw_wcB',
      categoryId: 1,
      likes: 9512
    },
    {
      id: 2,
      name: 'LG 50" UHD TV',
      description: '4K UHD Smart TV',
      price: 299990,
      rating: 5,
      image: 'images/tv2.jpg',
      images: ['images/tv2.jpg','images/tv2_2.jpg','images/tv2_3.jpg'],
      link: 'https://kaspi.kz/shop/p/lg-50nano80a6b-127-sm-chernyi-138972079/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_tvs_desktop&gbraid=0AAAAAC7-v7jVePFPFprAivtLcXCvur7K6&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3ArlqtYYXCBCbBxOtA4UHP1QL4P401UI9aNNyljXSFOz1ririjJesEaAjhlEALw_wcB',
      categoryId: 1,
      likes: 5847
    },
    {
      id: 3,
      name: 'Sony Bravia 55"',
      description: 'High quality display TV',
      price: 611316,
      rating: 5,
      image: 'images/tv3.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-kd55x81jr-140-sm-chernyi-101768309/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_tvs_desktop&gbraid=0AAAAAC7-v7jVePFPFprAivtLcXCvur7K6&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3ArlqtYYXCBCbBxOtA4UHP1QL4P401UI9aNNyljXSFOz1ririjJesEaAjhlEALw_wcB',
      categoryId: 1,
      likes: 7276
    },
    {
      id: 4,
      name: 'Xiaomi Smart TV 43"',
      description: 'Affordable smart TV',
      price: 200000,
      rating: 4,
      image: 'assets/images/tv4.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 1,
      likes: 3761
    },
    {
      id: 5,
      name: 'Philips 50" LED TV',
      description: 'LED TV with Ambilight',
      price: 280000,
      rating: 4,
      image: 'assets/images/tv5.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 1,
      likes: 2443
    },

    // WASHING MACHINES
    {
      id: 6,
      name: 'Samsung Washing Machine',
      description: 'EcoBubble technology',
      price: 220000,
      rating: 5,
      image: 'assets/images/wash1.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 2,
      likes: 9991
    },
    {
      id: 7,
      name: 'LG Front Load Washer',
      description: 'Silent washing system',
      price: 210000,
      rating: 5,
      image: 'assets/images/wash2.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 2,
      likes: 7211
    },
    {
      id: 8,
      name: 'Bosch Washing Machine',
      description: 'Energy efficient',
      price: 250000,
      rating: 5,
      image: 'assets/images/wash3.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 2,
      likes: 4333
    },
    {
      id: 9,
      name: 'Indesit Washer',
      description: 'Affordable washer',
      price: 180000,
      rating: 4,
      image: 'assets/images/wash4.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 2,
      likes: 1114
    },
    {
      id: 10,
      name: 'Haier Washing Machine',
      description: 'Modern washing system',
      price: 200000,
      rating: 4,
      image: 'assets/images/wash5.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 2,
      likes: 2555
    },

    // LAPTOPS
    {
      id: 11,
      name: 'MacBook Air M2',
      description: 'Apple laptop',
      price: 650000,
      rating: 5,
      image: 'assets/images/laptop1.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 3,
      likes: 1857
    },
    {
      id: 12,
      name: 'ASUS ROG Gaming Laptop',
      description: 'High performance gaming',
      price: 720000,
      rating: 5,
      image: 'assets/images/laptop2.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 3,
      likes: 2467
    },
    {
      id: 13,
      name: 'Lenovo IdeaPad',
      description: 'Student laptop',
      price: 350000,
      rating: 4,
      image: 'assets/images/laptop3.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 3,
      likes: 2434
    },
    {
      id: 14,
      name: 'HP Pavilion',
      description: 'Work laptop',
      price: 400000,
      rating: 4,
      image: 'assets/images/laptop4.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 3,
      likes: 1198
    },
    {
      id: 15,
      name: 'Acer Aspire',
      description: 'Affordable laptop',
      price: 300000,
      rating: 4,
      image: 'assets/images/laptop5.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 3,
      likes: 997
    },

    // REFRIGERATORS
    {
      id: 16,
      name: 'Samsung Refrigerator',
      description: 'No Frost system',
      price: 500000,
      rating: 5,
      image: 'assets/images/fridge1.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 4,
      likes: 4888
    },
    {
      id: 17,
      name: 'LG Smart Fridge',
      description: 'Energy efficient fridge',
      price: 480000,
      rating: 5,
      image: 'assets/images/fridge2.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 4,
      likes: 1657
    },
    {
      id: 18,
      name: 'Bosch Refrigerator',
      description: 'Premium quality',
      price: 550000,
      rating: 5,
      image: 'assets/images/fridge3.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 4,
      likes: 1987
    },
    {
      id: 19,
      name: 'Indesit Fridge',
      description: 'Affordable fridge',
      price: 350000,
      rating: 4,
      image: 'assets/images/fridge4.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 4,
      likes: 9993
    },
    {
      id: 20,
      name: 'Haier Refrigerator',
      description: 'Modern design',
      price: 420000,
      rating: 4,
      image: 'assets/images/fridge5.jpg',
      images: [],
      link: 'https://kaspi.kz/shop/',
      categoryId: 4,
      likes: 4432
    }

  ];

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }

}