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

    {
      id: 1,
      name: 'Samsung 55" 4K Smart TV',
      description: 'Ultra HD Smart TV with HDR support. Enjoy crisp colors, deep blacks, and smart features for streaming and entertainment',
      price: 699990,
      rating: 4.2,
      image: 'images/tv1.jpg',
      images: ['images/tv1.jpg','images/tv1.jpg','images/tv1.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-qe55qn90dauxce-140-sm-seryi-119903939/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_tvs_desktop&gbraid=0AAAAAC7-v7jVePFPFprAivtLcXCvur7K6&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3ArlqtYYXCBCbBxOtA4UHP1QL4P401UI9aNNyljXSFOz1ririjJesEaAjhlEALw_wcB',
      categoryId: 1,
      likes: 9512
    },
    {
      id: 2,
      name: 'LG 50" UHD TV',
      description: '4K UHD Smart TV with ThinQ AI and webOS platform. Perfect for movies, games, and online streaming with vibrant picture quality',
      price: 299990,
      rating: 4.6,
      image: 'images/tv2.jpg',
      images: ['images/tv2.jpg','images/tv2_2.jpg','images/tv2_3.jpg'],
      link: 'https://kaspi.kz/shop/p/lg-50nano80a6b-127-sm-chernyi-138972079/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_tvs_desktop&gbraid=0AAAAAC7-v7jVePFPFprAivtLcXCvur7K6&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3ArlqtYYXCBCbBxOtA4UHP1QL4P401UI9aNNyljXSFOz1ririjJesEaAjhlEALw_wcB',
      categoryId: 1,
      likes: 5847
    },
    {
      id: 3,
      name: 'Sony Bravia 55"',
      description: 'High quality display TV with advanced X1 processor. Supports HDR and Dolby Vision for cinematic experience at home',
      price: 611316,
      rating: 4.9,
      image: 'images/tv3.jpg',
      images: ['images/tv3.jpg','images/tv3_2.jpg','images/tv3_2.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-kd55x81jr-140-sm-chernyi-101768309/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_tvs_desktop&gbraid=0AAAAAC7-v7jVePFPFprAivtLcXCvur7K6&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3ArlqtYYXCBCbBxOtA4UHP1QL4P401UI9aNNyljXSFOz1ririjJesEaAjhlEALw_wcB',
      categoryId: 1,
      likes: 7276
    },
    {
      id: 4,
      name: 'Xiaomi Smart TV 43"',
      description: 'Affordable smart TV with Full HD resolution. Built-in apps and streaming services make it easy to watch your favorite content',
      price: 218758,
      rating: 4.5,
      image: 'images/tv4.jpg',
      images: ['images/tv4.jpg','images/tv4_2.jpg','images/tv4_2.jpg'],
      link: 'https://kaspi.kz/shop/p/xiaomi-a-2025-l43ma-auru-109-sm-chernyi-120935278/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_tvs_desktop&gbraid=0AAAAAC7-v7jVePFPFprAivtLcXCvur7K6&gclid=Cj0KCQiAtfXMBhDzARIsAJ0jp3ArlqtYYXCBCbBxOtA4UHP1QL4P401UI9aNNyljXSFOz1ririjJesEaAjhlEALw_wcB',
      categoryId: 1,
      likes: 3761
    },
    {
      id: 5,
      name: 'Philips 50" LED TV',
      description: 'LED TV with Ambilight technology. Immersive lighting effect enhances your viewing experience, making colors pop',
      price: 159990,
      rating: 3.9,
      image: 'images/tv5.jpg',
      images: ['images/tv5.jpg','images/tv5_2.jpg','images/tv5_2.jpg'],
      link: 'https://kaspi.kz/shop/p/philips-50pud7029-71-127-sm-chernyi-145190871/?c=750000000',
      categoryId: 1,
      likes: 2443
    },

    {
      id: 6,
      name: 'Стиральная машина Samsung стальной',
      description: 'EcoBubble washing machine with energy-saving features',
      price: 699990,
      rating: 4.8,
      image: 'images/wash1.jpg',
      images: ['images/wash1.jpg','images/wash1_2.jpg','images/wash1.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-wd80t554cbx-ld-stal-noi-118887243/?c=750000000',
      categoryId: 2,
      likes: 9991
    },
    {
      id: 7,
      name: 'Стиральная машина LG белый',
      description: 'Silent washing system with multiple programs for all types of laundry',
      price: 304546,
      rating: 4.7,
      image: 'images/wash2.jpg',
      images: ['images/wash2.jpg','images/wash2_2.jpg','images/wash2.jpg'],
      link: 'https://kaspi.kz/shop/p/lg-f4v5vs0w-belyi-100080031/?c=750000000',
      categoryId: 2,
      likes: 7211
    },
    {
      id: 8,
      name: 'Стиральная машина Bosch серый',
      description: 'High efficiency washing machine with low water and energy',
      price: 379990,
      rating: 5,
      image: 'images/wash3.jpg',
      images: ['images/wash3.jpg','images/wash3_2.jpg','images/wash3.jpg'],
      link: 'https://kaspi.kz/shop/p/bosch-wls2846sme-seryi-128380259/?c=750000000',
      categoryId: 2,
      likes: 4333
    },
    {
      id: 9,
      name: 'Стиральная машина Indesit белый',
      description: 'Affordable washer with basic programs for everyday use',
      price: 114990,
      rating: 4.1,
      image: 'images/wash4.jpg',
      images: ['images/wash4.jpg','images/wash4_2.jpg','images/wash4.jpg'],
      link: 'https://kaspi.kz/shop/p/indesit-ewsd-51031-bk-cis-belyi-3601479/?c=750000000',
      categoryId: 2,
      likes: 1114
    },
    {
      id: 10,
      name: 'Стиральная машина Midea серый',
      description: 'Modern washing system with digital display and quick wash option',
      price: 294848,
      rating: 4.3,
      image: 'images/wash5.jpg',
      images: ['images/wash5.jpg','images/wash5_2.jpg','images/wash5.jpg'],
      link: 'https://kaspi.kz/shop/p/midea-mfk03d105b-s-c-seryi-123621889/?c=750000000',
      categoryId: 2,
      likes: 2555
    },

    {
      id: 11,
      name: 'MacBook Air M2',
      description: 'MacBook Air M2 with ultra-fast performance, long battery life, and sleek design',
      price: 458990,
      rating: 4.9,
      image: 'images/laptop1.jpg',
      images: ['images/laptop1.jpg','images/laptop1_2.jpg','images/laptop1_3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000',
      categoryId: 3,
      likes: 1857
    },
    {
      id: 12,
      name: 'ASUS ROG Gaming Laptop',
      description: 'Gaming Laptop with high-end graphics and fast refresh rate for gaming',
      price: 1199400,
      rating: 4.8,
      image: 'images/laptop2.jpg',
      images: ['images/laptop2.jpg','images/laptop2_2.jpg','images/laptop2_2.jpg'],
      link: 'https://kaspi.kz/shop/p/asus-rog-strix-g18-18-32-gb-ssd-1000-gb-bez-os-90nr0le1-m00440-144923961/?c=750000000',
      categoryId: 3,
      likes: 2467
    },
    {
      id: 13,
      name: 'Lenovo Legion 7 pro',
      description: 'Lenovo Legion 7 Pro for students and gamers, powerful CPU and GPU combination',
      price: 1759990,
      rating: 5,
      image: 'images/laptop3.jpg',
      images: ['images/laptop3.jpg','images/laptop3_2.jpg','images/laptop3_3.jpg'],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-7-16-32-gb-ssd-1000-gb-bez-os-83f50026rk-140292710/?c=750000000',
      categoryId: 3,
      likes: 22434
    },
    {
      id: 14,
      name: 'HP Pavilion',
      description: 'Reliable work laptop with good performance and storage modern design',
      price: 449999,
      rating: 4.6,
      image: 'images/laptop4.jpg',
      images: ['images/laptop4.jpg','images/laptop4_2.jpg','images/laptop4.jpg'],
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ci-15-6-16-gb-ssd-1024-gb-dos-7p438ea-uuq-111968153/?c=750000000',
      categoryId: 3,
      likes: 1198
    },
    {
      id: 15,
      name: 'Acer Aspire',
      description: 'Affordable laptop suitable for daily tasks, study,office work and internet browsing',
      price: 349998,
      rating: 4.5,
      image: 'images/laptop5.jpg',
      images: ['images/laptop5.jpg','images/laptop5_2.jpg','images/laptop5_3.jpg'],
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-16-gb-ssd-512-gb-win-11-a315-58-nx-adder-01e-106485059/?c=750000000',
      categoryId: 3,
      likes: 997
    },

    {
      id: 16,
      name: 'Холодильник Samsung RB37A5200SA серебристый',
      description: 'No Frost fridge with modern design and energy efficiency',
      price: 330867,
      rating: 5,
      image: 'images/fridge1.jpg',
      images: ['images/fridge1.jpg','images/fridge1_2.jpg','images/fridge1_3.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-rb37a5200sa-serebristyi-100727008/?c=750000000',
      categoryId: 4,
      likes: 4888
    },
    {
      id: 17,
      name: 'Холодильник LG GC-B459MQWM белый',
      description: 'Energy-efficient fridge with spacious compartments',
      price: 297047,
      rating: 4.8,
      image: 'images/fridge2.jpg',
      images: ['images/fridge2.jpg','images/fridge2_2.jpg','images/fridge2_2.jpg'],
      link: 'https://kaspi.kz/shop/p/lg-gc-b459mqwm-belyi-116749935/?c=750000000',
      categoryId: 4,
      likes: 1657
    },
    {
      id: 18,
      name: 'Холодильник Bosch KGN39LB30U черный',
      description: 'Premium quality fridge with precise temperature control',
      price: 569990,
      rating: 4.9,
      image: 'images/fridge3.jpg',
      images: ['images/fridge3.jpg','images/fridge3_2.jpg','images/fridge3_2.jpg'],
      link: 'https://kaspi.kz/shop/p/bosch-kgn39lb30u-chernyi-118830582/?c=750000000',
      categoryId: 4,
      likes: 1987
    },
    {
      id: 19,
      name: 'Холодильник Indesit DS 4180 W белый',
      description: 'Affordable and compact fridge for everyday use',
      price: 174290,
      rating: 4.4,
      image: 'images/fridge4.jpg',
      images: ['images/fridge4.jpg','images/fridge4_2.jpg','images/fridge4_2.jpg'],
      link: 'https://kaspi.kz/shop/p/indesit-ds-4180-w-belyi-2701650/?c=750000000',
      categoryId: 4,
      likes: 9993
    },
    {
      id: 20,
      name: 'Холодильник Haier C2F636CFRGU1 серый',
      description: 'Modern design fridge with frost-free technology and energy saving',
      price: 309990,
      rating: 4.3,
      image: 'images/fridge5.jpg',
      images: ['images/fridge5.jpg','images/fridge5_2.jpg','images/fridge5_3.jpg'],
      link: 'https://kaspi.kz/shop/p/haier-c2f636cfrgu1-seryi-122003229/?c=750000000',
      categoryId: 4,
      likes: 4432
    }

  ];

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }

}