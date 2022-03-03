import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele4 } from './ScheduleRele.entity';

@Injectable()
export class ScheduleRele4Service {
  constructor(
    @InjectRepository(SchedulesRele4)
    private readonly scheduleRele4Repository: Repository<SchedulesRele4>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele4Repository.find();
  }

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    const Id = await this.scheduleRele4Repository.findOne(id)
    return await this.scheduleRele4Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))

  }
}