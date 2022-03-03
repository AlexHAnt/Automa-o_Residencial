import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AutomationModule } from './automation/automation.module';
import { StateScheduleModule } from './StateSchedule/ScheduleRele.module';

import { SchedulesRele1 } from './StateSchedule/ScheduleRele.entity';
import { SchedulesRele2 } from './StateSchedule/ScheduleRele.entity';
import { SchedulesRele3 } from './StateSchedule/ScheduleRele.entity';
import { SchedulesRele4 } from './StateSchedule/ScheduleRele.entity';
import { SchedulesRele5 } from './StateSchedule/ScheduleRele.entity';
import { SchedulesRele6 } from './StateSchedule/ScheduleRele.entity';
import { SchedulesRele7 } from './StateSchedule/ScheduleRele.entity';
import { SchedulesRele8 } from './StateSchedule/ScheduleRele.entity';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'lcdepadm',
      database: 'AUTOMACAO_RESIDENCIAL',
      entities: [
        SchedulesRele1,
        SchedulesRele2,
        SchedulesRele3,
        SchedulesRele4,
        SchedulesRele5,
        SchedulesRele6,
        SchedulesRele7,
        SchedulesRele8,
      ],
      synchronize: true
    }),
    AutomationModule,
    StateScheduleModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }



