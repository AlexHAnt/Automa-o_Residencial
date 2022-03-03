import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele5Service } from './ScheduleRele5.service';[]
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele5')
export class ScheduleRele5Controller {
  constructor(
    private scheduleRele5Service: ScheduleRele5Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele5Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele5Service.update(id, data)
  }

}


