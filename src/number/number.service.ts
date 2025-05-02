import { Injectable } from '@nestjs/common';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';
import { NumberEntity } from './entities/number.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NumberService {
  constructor(
    @InjectRepository(NumberEntity)
    private repo: Repository<NumberEntity>,
  ) {}
  add(value: number) {
    const entry = this.repo.create({ value });
    return this.repo.save(entry);
  }

  findAll() {
    return this.repo.find();
  }
}
