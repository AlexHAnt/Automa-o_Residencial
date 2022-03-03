import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele5 } from './ScheduleRele.entity';

@Injectable()
export class ScheduleRele5Service {
  constructor(
    @InjectRepository(SchedulesRele5)
    private readonly scheduleRele5Repository: Repository<SchedulesRele5>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele5Repository.find();
  }

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    const Id = await this.scheduleRele5Repository.findOne(id)
    return await this.scheduleRele5Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))

  }
}