import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from '../cars/interface/createCar.interface';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}
  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
  @Post('/create')
  async create(@Body() createCatDto: Car) {
    const obj: Car = {
      name: 'lakshmaiha',
      model: 2345,
      year: 12345,
    };
    console.log();
    return this.carsService.create(createCatDto);
  }
}
