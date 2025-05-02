import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumberService } from './number.service';
import { NumberController } from './number.controller';
import { NumberEntity } from './entities/number.entity';


@Module({
  imports: [TypeOrmModule.forFeature([NumberEntity])],
  controllers: [NumberController],
  providers: [NumberService],
})
export class NumberModule {}
