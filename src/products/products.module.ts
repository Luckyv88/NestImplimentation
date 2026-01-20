// import { Module } from '@nestjs/common';
// import { ProductsController } from './products.controller';
// import { ProductsService } from './products.service';

// @Module({
//   controllers: [ProductsController],
//   providers: [ProductsService]
// })
// export class ProductsModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
