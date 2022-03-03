import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SchedulesRele1 } from './ScheduleRele.entity';
import { ScheduleRele } from './ScheduleRele.interface';

@Injectable()
export class ScheduleRele1Service {
  constructor(
    @InjectRepository(SchedulesRele1)
    private readonly scheduleRele1Repository: Repository<SchedulesRele1>
  ) { }

  async findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele1Repository.find();
  }        

  async update(id: number, data: ScheduleRele): Promise<ScheduleRele> {
    console.log(id, data)
    const Id = await this.scheduleRele1Repository.findOne(id)
    return await this.scheduleRele1Repository.save(Object.assign(Id, { hourInitial: data.hourInitial, hourFinal: data.hourFinal }))
  }
}