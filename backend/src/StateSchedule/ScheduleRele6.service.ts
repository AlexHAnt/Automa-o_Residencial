import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele6 } from './ScheduleRele.entity';

@Injectable()
export class ScheduleRele6Service {
  constructor(
    @InjectRepository(SchedulesRele6)
    private readonly scheduleRele6Repository: Repository<SchedulesRele6>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele6Repository.find();
  }

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    const Id = await this.scheduleRele6Repository.findOne(id)
    return await this.scheduleRele6Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))

  }
}