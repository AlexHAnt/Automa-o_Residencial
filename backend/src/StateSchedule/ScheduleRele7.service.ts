import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele7 } from './ScheduleRele.entity';

@Injectable()
export class ScheduleRele7Service {
  constructor(
    @InjectRepository(SchedulesRele7)
    private readonly scheduleRele7Repository: Repository<SchedulesRele7>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele7Repository.find();
  }

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    const Id = await this.scheduleRele7Repository.findOne(id)
    return await this.scheduleRele7Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))

  }
}