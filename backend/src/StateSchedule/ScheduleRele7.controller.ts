import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele7Service } from './ScheduleRele7.service';[]
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele7')
export class ScheduleRele7Controller {
  constructor(
    private scheduleRele7Service: ScheduleRele7Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele7Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele7Service.update(id, data)
  }

}


