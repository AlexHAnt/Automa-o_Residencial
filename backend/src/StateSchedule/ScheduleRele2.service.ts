import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele2 } from './ScheduleRele.entity';

@Injectable()
export class ScheduleRele2Service {
  constructor(
    @InjectRepository(SchedulesRele2)
    private readonly scheduleRele2Repository: Repository<SchedulesRele2>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele2Repository.find();
  }

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    const Id = await this.scheduleRele2Repository.findOne(id)
    return await this.scheduleRele2Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))

  }
}