import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  selectedImage!: string;

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  nextImage() {
    const index = this.product.images.indexOf(this.selectedImage);
    const nextIndex = (index + 1) % this.product.images.length;
    this.selectedImage = this.product.images[nextIndex];
  }

  prevImage() {
    const index = this.product.images.indexOf(this.selectedImage);
    const prevIndex =
      (index - 1 + this.product.images.length) % this.product.images.length;
    this.selectedImage = this.product.images[prevIndex];
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
