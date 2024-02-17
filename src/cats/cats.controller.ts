import { Controller, Get, Post, Body } from '@nestjs/common';
// import { CreateCatDto } from '../cats/dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService) {}

  @Post('/create')
  async create(@Body() createCatDto: Cat) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    console.log('get request<<<');
    return this.catsService.findAll();
  }
}
