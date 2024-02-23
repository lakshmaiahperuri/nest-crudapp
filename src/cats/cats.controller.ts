import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
// import { CreateCatDto } from '../cats/dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
@UseGuards(RoleGuard)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post('/create')
  async create(@Body() createCatDto: Cat) {
    this.catsService.create(createCatDto);
  }
  @Get()
  @Roles('admin')
  async findAll(@Req() req): Promise<Cat[]> {
    console.log('get request<<<', req.query);
    return this.catsService.findAll();
  }
}
