import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumberService } from './number.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

@Controller('number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}
  @Post()
  addNumber(@Body('value') value: number) {
    return this.numberService.add(value);
  }

  @Get()
  getNumbers() {
    return this.numberService.findAll();
  }

}
