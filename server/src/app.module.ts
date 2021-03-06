import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ShopsModule } from './shops/shops.module';
import { ServiceCentersModule } from './service-centers/service-centers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductsModule,
    ShopsModule,
    ServiceCentersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
