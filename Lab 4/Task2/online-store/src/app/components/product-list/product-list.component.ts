import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 14 Pro 128GB',
      description: 'Смартфон Apple с отличной камерой и мощным процессором.',
      price: 899000,
      rating: 4.8,
      image: 'assets/images/iphone14.jpg',
      images: ['assets/images/iphone14.jpg','assets/images/iphone14-2.jpg','assets/images/iphone14-3.jpg'],
      link: 'https://kaspi.kz/shop/p/iphone-14-pro-128gb-105145780/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Флагманский смартфон Samsung с мощной камерой и AMOLED экраном.',
      price: 899990,
      rating: 4.7,
      image: 'assets/images/galaxy-s23.jpg',
      images: ['assets/images/galaxy-s23.jpg','assets/images/galaxy-s23-2.jpg','assets/images/galaxy-s23-3.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-512gb-108579451/'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12 Pro',
      description: 'Популярный смартфон Xiaomi с отличным соотношением цена/качество.',
      price: 179990,
      rating: 4.5,
      image: 'assets/images/redmi-note12.jpg',
      images: ['assets/images/redmi-note12.jpg','assets/images/redmi-note12-2.jpg','assets/images/redmi-note12-3.jpg'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-128gb-107843210/'
    },
    {
      id: 4,
      name: 'Apple MacBook Air M2 13"',
      description: 'Лёгкий ноутбук Apple с мощным процессором M2 и Retina дисплеем.',
      price: 599990,
      rating: 4.9,
      image: 'assets/images/macbook-air.jpg',
      images: ['assets/images/macbook-air.jpg','assets/images/macbook-air-2.jpg','assets/images/macbook-air-3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-13-256gb-107743210/'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5',
      description: 'Игровая консоль нового поколения с высокой производительностью и эксклюзивными играми.',
      price: 249990,
      rating: 4.9,
      image: 'assets/images/ps5.jpg',
      images: ['assets/images/ps5.jpg','assets/images/ps5-2.jpg','assets/images/ps5-3.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-104857310/'
    },
    {
      id: 6,
      name: 'Apple Watch Series 9',
      description: 'Умные часы Apple с большим количеством функций для здоровья и спорта.',
      price: 229990,
      rating: 4.8,
      image: 'assets/images/apple-watch.jpg',
      images: ['assets/images/apple-watch.jpg','assets/images/apple-watch-2.jpg','assets/images/apple-watch-3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45mm-108765432/'
    },
    {
      id: 7,
      name: 'Samsung Galaxy Buds 2 Pro',
      description: 'Беспроводные наушники Samsung с активным шумоподавлением и отличным звуком.',
      price: 79990,
      rating: 4.7,
      image: 'assets/images/galaxy-buds.jpg',
      images: ['assets/images/galaxy-buds.jpg','assets/images/galaxy-buds-2.jpg','assets/images/galaxy-buds-3.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-2-pro-107654321/'
    },
    {
      id: 8,
      name: 'Dell XPS 15',
      description: 'Мощный ноутбук Dell с ярким экраном и производительным процессором Intel.',
      price: 749990,
      rating: 4.6,
      image: 'assets/images/dell-xps15.jpg',
      images: ['assets/images/dell-xps15.jpg','assets/images/dell-xps15-2.jpg','assets/images/dell-xps15-3.jpg'],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-108876543/'
    },
    {
      id: 9,
      name: 'Nintendo Switch OLED',
      description: 'Игровая консоль Nintendo с ярким OLED экраном и портативным режимом.',
      price: 229990,
      rating: 4.9,
      image: 'assets/images/nintendo-switch.jpg',
      images: ['assets/images/nintendo-switch.jpg','assets/images/nintendo-switch-2.jpg','assets/images/nintendo-switch-3.jpg'],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-107987654/'
    },
    {
      id: 10,
      name: 'GoPro HERO11 Black',
      description: 'Экшн-камера GoPro с 5.3K видео и стабилизацией для экстремальных съемок.',
      price: 189990,
      rating: 4.8,
      image: 'assets/images/gopro-hero11.jpg',
      images: ['assets/images/gopro-hero11.jpg','assets/images/gopro-hero11-2.jpg','assets/images/gopro-hero11-3.jpg'],
      link: 'https://kaspi.kz/shop/p/gopro-hero11-black-108123456/'
    }
  ];
}
