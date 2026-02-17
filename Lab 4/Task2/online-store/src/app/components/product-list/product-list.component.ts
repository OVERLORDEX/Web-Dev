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
      price: 600000,
      rating: 4.8,
      image: 'images/iphone14.jpg',
      images: ['images/iphone14.jpg','images/iphone14-2.jpg','images/iphone14-3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-chernyi-106363245/?srsltid=AfmBOoo4LG6635WxrKhkPBXAGe2TkKemP2iu_XdvyHCxKVYANAUcLX7x'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Флагманский смартфон Samsung с мощной камерой и AMOLED экраном.',
      price: 309890,
      rating: 4.7,
      image: 'images/galaxy-s23.jpg',
      images: ['images/galaxy-s23.jpg','images/galaxy-s23-2.jpg','images/galaxy-s23-3.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?srsltid=AfmBOoqXchtcfuG9AZeKQCNPm8AqKvu4bzW42cABQ06VsTFcvvCTH3Io&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gbraid=0AAAAAC7-v7h5yWFJXGUY6ka8r5N0xPQvb&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1FmfW5g1iS9QrGCYcxsekcRQS9QEhNrNUv1r5N2eM-aclJmrGY3vaRoCnPAQAvD_BwE'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12 Pro',
      description: 'Популярный смартфон Xiaomi с отличным соотношением цена/качество.',
      price: 125828,
      rating: 4.5,
      image: 'images/redmi-note12.jpg',
      images: ['images/redmi-note12.jpg','images/redmi-note12-2.jpg','images/redmi-note12-3.jpg'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?srsltid=AfmBOor2g6DuU3lWgDChfzCo6qaiAVfSsqCFek5un1CnOUgA8yRG9flL&utm_campaign=mktem_micom_ru_kz_opensale_0122-0301_rn15&utm_channel=search&utm_source=google&utm_medium=paid-search&utm_content=traffic-search&utm_term=interest&gbraid=0AAAAAC5Z33UTKGa03GV5JsyrLfXuz1bby&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1F5Et5dweOGw7pBLaEcqtaN2HYcJ_iXN039fpb5OgmdxsRHjkbPvoRoCi-4QAvD_BwE'
    },
    {
      id: 4,
      name: 'Apple MacBook Air M2 13"',
      description: 'Лёгкий ноутбук Apple с мощным процессором M2 и Retina дисплеем.',
      price: 528672,
      rating: 4.9,
      image: 'images/macbook-air.jpg',
      images: ['images/macbook-air.jpg','images/macbook-air-2.jpg','images/macbook-air-3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-13-6-16-gb-ssd-256-gb-macos-mw0w3-138452161/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7i_FVlM53Y-ibpwVSAgLaIO6&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CPYIdO3izONQ1z11V6t6jn-zd93lWyndvUYPIkOR-reMcb_QeArTRoCfCUQAvD_BwE'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5',
      description: 'Игровая консоль нового поколения с высокой производительностью и эксклюзивными играми.',
      price: 300000,
      rating: 4.9,
      image: 'images/ps5.jpg',
      images: ['images/ps5.jpg','images/ps5-2.jpg','images/ps5-3.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7i_FVlM53Y-ibpwVSAgLaIO6&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CPYIdO3izONQ1z11V6t6jn-zd93lWyndvUYPIkOR-reMcb_QeArTRoCfCUQAvD_BwE'
    },
    {
      id: 6,
      name: 'Apple Watch Series 9',
      description: 'Умные часы Apple с большим количеством функций для здоровья и спорта.',
      price: 179924,
      rating: 4.8,
      image: 'images/apple-watch.jpg',
      images: ['images/apple-watch.jpg','images/apple-watch-2.jpg','images/apple-watch-3.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7i_FVlM53Y-ibpwVSAgLaIO6&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CPYIdO3izONQ1z11V6t6jn-zd93lWyndvUYPIkOR-reMcb_QeArTRoCfCUQAvD_BwE'
    },
    {
      id: 7,
      name: 'Samsung Galaxy Buds 2 Pro',
      description: 'Беспроводные наушники Samsung с активным шумоподавлением и отличным звуком.',
      price: 182990,
      rating: 4.7,
      image: 'images/galaxy-buds.jpg',
      images: ['images/galaxy-buds.jpg','images/galaxy-buds-2.jpg','images/galaxy-buds-3.jpg'],
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?srsltid=AfmBOoolmTquZAaNd4ZUbMyb3H6bRergr6f0xZfzUEYWH5qkxjCsFSde&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7i_FVlM53Y-ibpwVSAgLaIO6&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CPYIdO3izONQ1z11V6t6jn-zd93lWyndvUYPIkOR-reMcb_QeArTRoCfCUQAvD_BwE'
    },
    {
      id: 8,
      name: 'Dell XPS 15',
      description: 'Мощный ноутбук Dell с ярким экраном и производительным процессором Intel.',
      price: 2833737,
      rating: 4.6,
      image: 'images/dell-xps15.jpg',
      images: ['images/dell-xps15.jpg','images/dell-xps15-2.jpg','images/dell-xps15-3.jpg'],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-32-gb-ssd-1024-gb-win-11-210-bdvf-12-108374616/?srsltid=AfmBOoo9_p9zPRtPw5SCUuy5YoiAuFP-wOw-DfGs-OVuFVh7WIqylGnh&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7i_FVlM53Y-ibpwVSAgLaIO6&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CPYIdO3izONQ1z11V6t6jn-zd93lWyndvUYPIkOR-reMcb_QeArTRoCfCUQAvD_BwE'
    },
    {
      id: 9,
      name: 'Nintendo Switch OLED',
      description: 'Игровая консоль Nintendo с ярким OLED экраном и портативным режимом.',
      price: 169549,
      rating: 4.9,
      image: 'images/nintendo-switch.jpg',
      images: ['images/nintendo-switch.jpg','images/nintendo-switch-2.jpg','images/nintendo-switch-3.jpg'],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?srsltid=AfmBOor9fgnK3uEJuLMrD6ypeu8AZu4q2_AAoX1AzIBhKS7BxbmRvk2P&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7i_FVlM53Y-ibpwVSAgLaIO6&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CPYIdO3izONQ1z11V6t6jn-zd93lWyndvUYPIkOR-reMcb_QeArTRoCfCUQAvD_BwE'
    },
    {
      id: 10,
      name: 'GoPro HERO11 Black',
      description: 'Экшн-камера GoPro с 5.3K видео и стабилизацией для экстремальных съемок.',
      price: 249990,
      rating: 4.8,
      image: 'images/gopro-hero11.jpg',
      images: ['images/gopro-hero11.jpg','images/gopro-hero11-2.jpg','images/gopro-hero11-3.jpg'],
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-gopro-hero-11-black-edition-chdhx-112-rw-115723801/?srsltid=AfmBOoo23Cm5KQeIawGzRSsZFpUbgeufFt0u3Qh9XMtkS8aouyWk0fBF&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_notebook_old_desktop&gbraid=0AAAAAC7-v7i_FVlM53Y-ibpwVSAgLaIO6&gclid=CjwKCAiAwNDMBhBfEiwAd7ti1CPYIdO3izONQ1z11V6t6jn-zd93lWyndvUYPIkOR-reMcb_QeArTRoCfCUQAvD_BwE'
    }
  ];
}