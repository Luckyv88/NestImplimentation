import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'laptop', price: 100000 },
    { id: 2, name: 'Mac', price: 80000 },
    { id: 3, name: 'Phone', price: 18000 },
  ];

  getAllProduct() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
