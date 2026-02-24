import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product = input.required<Product>();
  delete = output<number>();

  selectedImage!: string;

  ngOnInit() {
    this.selectedImage = this.product().images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  nextImage() {
    const images = this.product().images;
    const index = images.indexOf(this.selectedImage);
    const nextIndex = (index + 1) % images.length;
    this.selectedImage = images[nextIndex];
  }

  prevImage() {
    const images = this.product().images;
    const index = images.indexOf(this.selectedImage);
    const prevIndex = (index - 1 + images.length) % images.length;
    this.selectedImage = images[prevIndex];
  }

  onLike() {
    this.product().likes++;
  }

  onDelete() {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product().link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product().link
    )}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}