import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele8Service } from './ScheduleRele8.service';[]
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele8')
export class ScheduleRele8Controller {
  constructor(
    private scheduleRele8Service: ScheduleRele8Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele8Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele8Service.update(id, data)
  }

}


