import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NumberEntity } from './entities/number.entity';


@Injectable()
export class NumberService {
  constructor(
    @InjectRepository(NumberEntity)
    private readonly numberRepo: Repository<NumberEntity>,
  ) {}

  async add(value: number) {
    const entry = this.numberRepo.create({ value });
    return this.numberRepo.save(entry);
  }

  async findAll() {
    return this.numberRepo.find();
  }
}
