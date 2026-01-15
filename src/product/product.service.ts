import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'laptop', price: 100000 },
    { id: 2, name: 'Mac', price: 80000 },
    { id: 3, name: 'Phone', price: 18000 },
  ];

  @Get()
  getAllProduct() {
    return this.products;
  }

  @Get()
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
