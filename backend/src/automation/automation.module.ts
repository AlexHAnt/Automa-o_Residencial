import { Module } from '@nestjs/common';
import { AutomationGateway } from './automation.gateway';
import { ExecComand } from './execComand.service';
import { Schedule } from './schedule.service';
import { StateScheduleModule } from 'src/StateSchedule/ScheduleRele.module';
import { AudioService } from './Audio.service';
import { audioController } from './Audio.controller';

@Module({
    providers: [ AutomationGateway, ExecComand, Schedule, AudioService, audioController ],
    controllers:[audioController],
    imports :[
         StateScheduleModule]
})
export class AutomationModule {}



