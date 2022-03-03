import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ScheduleRele } from './ScheduleRele.interface';
import { SchedulesRele3 } from './ScheduleRele.entity';

@Injectable()
export class ScheduleRele3Service {
  constructor(
    @InjectRepository(SchedulesRele3)
    private readonly scheduleRele3Repository: Repository<SchedulesRele3>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele3Repository.find();
  }

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    const Id = await this.scheduleRele3Repository.findOne(id)
    return await this.scheduleRele3Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))

  }
}