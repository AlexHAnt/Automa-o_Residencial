import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele1Service } from './ScheduleRele1.service';
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele1')
export class ScheduleRele1Controller {
  constructor(
    private scheduleRele1Service: ScheduleRele1Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele1Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele1Service.update(id, data)
  }

}