import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele4Service } from './ScheduleRele4.service';[]
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele4')
export class ScheduleRele4Controller {
  constructor(
    private scheduleRele4Service: ScheduleRele4Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele4Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele4Service.update(id, data)
  }

}


