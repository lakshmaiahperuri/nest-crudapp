import { Module } from '@nestjs/common';
import { CatModule } from './cats/cats.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CatModule, CarsModule],
  // controllers: [CarsController],
  // providers: [CarsService],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { CatsController } from './cats/cats.controller';
// import { CatsService } from './cats/cats.service';
// import { CarsController } from './cars/cars.controller';
// import { CarsService } from './cars/cars.service';
// import { CarsModule } from './cars/cars.module';

// @Module({
//   controllers: [CatsController],
//   providers: [CatsService],
// })
// export class AppModule {}
