import { Module } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { PruebaController } from './prueba.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prueba } from './entities/prueba.entity';
import { BetenlaceService } from './betenlace.service';
import { Betenlace } from './entities/betenlace-cpa.entity';

@Module({
  controllers: [PruebaController],
  providers: [PruebaService, BetenlaceService],
  imports: [TypeOrmModule.forFeature([Prueba, Betenlace])],
})
export class PruebaModule {}
