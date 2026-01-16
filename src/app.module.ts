import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { TestApiMethodModule } from './test-api-method/test-api-method.module';
import { TestPipeController } from './test-pipe/test-pipe.controller';
import { TestroleguardController } from './testroleguard/testroleguard.controller';

@Module({
  imports: [EmployeeModule, TestApiMethodModule],
  controllers: [
    AppController,
    UserController,
    ProductController,
    TestPipeController,
    TestroleguardController,
  ],
  providers: [AppService, ProductService],
})
export class AppModule {}
