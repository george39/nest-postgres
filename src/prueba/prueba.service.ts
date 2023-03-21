import { Injectable } from '@nestjs/common';
import { DataDto, CreatePruebaDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
import { map } from 'rxjs';
import { BetenlaceCpaDto } from './dto/betenlace-cpa.dto';
import { BetenlaceService } from './betenlace.service';
import { Betenlace } from './entities/betenlace-cpa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PruebaService {
  constructor(
    @InjectRepository(Betenlace)
    private readonly betenlaceRepository: Repository<Betenlace>,
    private readonly betenlaceService: BetenlaceService,
  ) {}

  async put(dataDto: DataDto) {
    const data = dataDto.data.map(async (datos) => {
      const bet = await this.betenlaceService.create(
        datos.cpaBetenlace,
        datos.registeredCount,
      );
      // await this.betenlaceRepository.save(bet);
      // return datos;
    });
    return data;
  }

  // async create(cpaCount, registeredCount) {
  //   const cpa = new Betenlace();
  //   // const cp = { cpCount: cpaCount, registeredCount: registeredCount };
  //   cpa.cpCount = cpaCount;
  //   cpa.registeredCount = registeredCount;
  //   console.log('CPA', cpa);
  //   // await this.betenlaceRepository.create(cpa);
  //   await this.betenlaceRepository.save(cpa);
  //   // const betenlace = betenlaceCpaDto;
  //   // return;
  // }

  findAll() {
    return `This action returns all prueba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prueba`;
  }

  update(id: number, updatePruebaDto: UpdatePruebaDto) {
    return `This action updates a #${id} prueba`;
  }

  remove(id: number) {
    return `This action removes a #${id} prueba`;
  }
}
