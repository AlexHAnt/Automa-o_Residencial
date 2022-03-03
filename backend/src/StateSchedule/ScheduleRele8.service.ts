import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele8 } from './ScheduleRele.entity';

@Injectable()
export class ScheduleRele8Service {
  constructor(
    @InjectRepository(SchedulesRele8)
    private readonly scheduleRele8Repository: Repository<SchedulesRele8>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele8Repository.find();
  }

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    const Id = await this.scheduleRele8Repository.findOne(id)
    return await this.scheduleRele8Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))

  }
}