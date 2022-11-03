import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { RatingModule } from './rating/rating.module';
import { Rating } from './rating/entities/rating.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest_test',
    entities: [Product, Rating],
    autoLoadEntities: true,
    synchronize: true,
  }), ProductModule, RatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
