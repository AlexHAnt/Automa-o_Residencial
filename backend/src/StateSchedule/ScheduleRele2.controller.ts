import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele2Service } from './ScheduleRele2.service';[]
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele2')
export class ScheduleRele2Controller {
  constructor(
    private scheduleRele2Service: ScheduleRele2Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele2Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele2Service.update(id, data)
  }

}


