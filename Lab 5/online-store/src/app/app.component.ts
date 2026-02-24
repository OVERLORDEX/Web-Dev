import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = productService.categories.map(cat => ({
      ...cat,
      gradient: this.getCategoryGradient(cat.name)
    }));
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.products = this.productService.getProductsByCategory(id);
  }

  goHome() {
    this.selectedCategoryId = null;
    this.products = [];
  }

  get filteredProducts(): Product[] {
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  private getCategoryGradient(name: string): string {
    switch(name) {
      case 'Coolers': return 'linear-gradient(90deg, #4facfe, #00f2fe)';
      case 'TV': return 'linear-gradient(90deg, #ff416c, #962410)';
      case 'Washing Machines': return 'linear-gradient(90deg, #43e97b, #38f9d7)';
      case 'Laptops': return 'linear-gradient(90deg, #f7971e, #ffd200)';
      default: return '#e60023';
    }
  }
}