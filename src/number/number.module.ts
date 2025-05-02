import { Module } from '@nestjs/common';
import { NumberService } from './number.service';
import { NumberController } from './number.controller';

@Module({
  controllers: [NumberController],
  providers: [NumberService],
})
export class NumberModule {}
