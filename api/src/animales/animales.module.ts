import { Module } from '@nestjs/common';
import { AnimalesService } from './animales.service';
import { AnimalesController } from './animales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities';

@Module({
  providers: [AnimalesService],
  controllers: [AnimalesController],
  imports: [TypeOrmModule.forFeature([Animal])]
})
export class AnimalesModule {}
