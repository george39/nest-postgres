import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { Partner } from './entities/partner.entity';

import * as moment from 'moment-timezone';
import { format, subDays, startOfDay } from 'date-fns';

@Injectable()
export class PartnerService {
  private readonly partner = new Logger('PartnerService');
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
  ) {}
  async create(createParnerDto: CreatePartnerDto) {
    try {
      const { ...partnerDetails } = createParnerDto;

      const partner = this.partnerRepository.create({
        ...partnerDetails,
      });
      await this.partnerRepository.save(partner);

      return { ...partner };
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    const today = subDays(
      startOfDay(moment.tz(moment(), 'America/Bogota').toDate()),
      1,
    );
    const fxCreatedAt = startOfDay(
      moment.tz(moment(), 'America/Bogota').subtract(1, 'days').toDate(),
    );
    console.log('fx', fxCreatedAt)

    // const fxCreatedAt = subDays(startOfDay(new Date()), 1);
    const filters = {
      where: {
        created_at: Between(fxCreatedAt, new Date()),
      },
    };
    const partners = await this.partnerRepository.find({});
    return partners;
  }

  findOne(id: number) {
    return `This action returns a #${id} partner`;
  }

  update(id: number, updatePartnerDto: UpdatePartnerDto) {
    return `This action updates a #${id} partner`;
  }

  remove(id: number) {
    return `This action removes a #${id} partner`;
  }
}
