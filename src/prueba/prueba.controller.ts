import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { CreatePruebaDto, DataDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
import { BetenlaceCpaDto } from './dto/betenlace-cpa.dto';
import { BetenlaceService } from './betenlace.service';

@Controller('prueba')
export class PruebaController {
  constructor(
    private readonly pruebaService: PruebaService,
    private readonly betenlaceService: BetenlaceService,
  ) {}

  @Put()
  put(@Body() dataDto: DataDto) {
    return this.pruebaService.put(dataDto);
  }

  @Post()
  create(cpaCount, registeredCount) {
    return this.betenlaceService.create(cpaCount, registeredCount);
  }

  @Get()
  findAll() {
    return this.pruebaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pruebaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePruebaDto: UpdatePruebaDto) {
    return this.pruebaService.update(+id, updatePruebaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pruebaService.remove(+id);
  }
}
