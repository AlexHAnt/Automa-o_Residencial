import { Controller, Get, Param, Body, Put } from '@nestjs/common';

import { ScheduleRele3Service } from './ScheduleRele3.service';[]
import { ScheduleRele } from './ScheduleRele.interface';


@Controller('stateSchedulRele3')
export class ScheduleRele3Controller {
  constructor(
    private scheduleRele3Service: ScheduleRele3Service
  ) { }

  @Get()
  findAll(): Promise<ScheduleRele[]> {
    return this.scheduleRele3Service.findAll();
  }

  @Put(':id')
  async update(@Param('id') id, @Body() data: ScheduleRele): Promise<ScheduleRele> {
    return this.scheduleRele3Service.update(id, data)
  }

}


