import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumberModule } from './number/number.module';
import { NumberEntity } from './number/entities/number.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'yourpassword',
      database: 'testdb',
      entities: [NumberEntity],
      synchronize: true, // auto-create table (dev only)
    }),
    TypeOrmModule.forFeature([NumberEntity]),
    NumberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
