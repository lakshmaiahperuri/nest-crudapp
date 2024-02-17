import { Injectable } from '@nestjs/common';
import { Car } from '../cars/interface/createCar.interface';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [];

  create(car: Car) {
    this.cars.push(car);
  }

  findAll(): Car[] {
    return this.cars;
  }
}
