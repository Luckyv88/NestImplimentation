import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { TestApiMethodModule } from './test-api-method/test-api-method.module';
import { TestPipeController } from './test-pipe/test-pipe.controller';
import { TestroleguardController } from './testroleguard/testroleguard.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { LifeCyclyMethodController } from './life-cycly-method/life-cycly-method.controller';
import { LifeCyclyMethodService } from './life-cycly-method/life-cycly-method.service';

@Module({
  imports: [EmployeeModule, TestApiMethodModule],
  controllers: [
    AppController,
    UserController,
    ProductController,
    TestPipeController,
    TestroleguardController,
    ExceptionController,
    LifeCyclyMethodController,
  ],
  providers: [AppService, ProductService, LifeCyclyMethodService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
