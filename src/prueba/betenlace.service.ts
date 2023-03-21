import { Injectable } from '@nestjs/common';
import { BetenlaceCpaDto } from './dto/betenlace-cpa.dto';
import { Repository } from 'typeorm';
import { Betenlace } from './entities/betenlace-cpa.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BetenlaceService {
  constructor(
    @InjectRepository(Betenlace)
    private readonly betenlaceRepository: Repository<Betenlace>
) {}
  async create(cpaCount, registeredCount) {
    const cpa = new Betenlace();
    cpa.cpCount = cpaCount;
    cpa.registeredCount = registeredCount;
    await this.betenlaceRepository.save(cpa);
    // const betenlace = betenlaceCpaDto;
    return cpa;
  }
}
