import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele6Service } from './ScheduleRele6.service';[]
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele6')
export class ScheduleRele6Controller {
  constructor(
    private scheduleRele6Service: ScheduleRele6Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele6Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele6Service.update(id, data)
  }

}


