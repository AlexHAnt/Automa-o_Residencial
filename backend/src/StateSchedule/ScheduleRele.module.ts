import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SchedulesRele1 } from './ScheduleRele.entity';
import { SchedulesRele2 } from './ScheduleRele.entity';
import { SchedulesRele3 } from './ScheduleRele.entity';
import { SchedulesRele4 } from './ScheduleRele.entity';
import { SchedulesRele5 } from './ScheduleRele.entity';
import { SchedulesRele6 } from './ScheduleRele.entity';
import { SchedulesRele7 } from './ScheduleRele.entity';
import { SchedulesRele8 } from './ScheduleRele.entity';

import { ScheduleRele1Controller } from './ScheduleRele1.controller';
import { ScheduleRele2Controller } from './ScheduleRele2.controller';
import { ScheduleRele3Controller } from './ScheduleRele3.controller';
import { ScheduleRele4Controller } from './ScheduleRele4.controller';
import { ScheduleRele5Controller } from './ScheduleRele5.controller';
import { ScheduleRele6Controller } from './ScheduleRele6.controller';
import { ScheduleRele7Controller } from './ScheduleRele7.controller';
import { ScheduleRele8Controller } from './ScheduleRele8.controller';

import { ScheduleRele1Service } from './ScheduleRele1.service';
import { ScheduleRele2Service } from './ScheduleRele2.service';
import { ScheduleRele3Service } from './ScheduleRele3.service';
import { ScheduleRele4Service } from './ScheduleRele4.service';
import { ScheduleRele5Service } from './ScheduleRele5.service';
import { ScheduleRele6Service } from './ScheduleRele6.service';
import { ScheduleRele7Service } from './ScheduleRele7.service';
import { ScheduleRele8Service } from './ScheduleRele8.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([SchedulesRele1]),
        TypeOrmModule.forFeature([SchedulesRele2]),
        TypeOrmModule.forFeature([SchedulesRele3]),
        TypeOrmModule.forFeature([SchedulesRele4]),
        TypeOrmModule.forFeature([SchedulesRele5]),
        TypeOrmModule.forFeature([SchedulesRele6]),
        TypeOrmModule.forFeature([SchedulesRele7]),
        TypeOrmModule.forFeature([SchedulesRele8]),
    ],
    controllers: [
        ScheduleRele1Controller,
        ScheduleRele2Controller,
        ScheduleRele3Controller,
        ScheduleRele4Controller,
        ScheduleRele5Controller,
        ScheduleRele6Controller,
        ScheduleRele7Controller,
        ScheduleRele8Controller,
    ],
    providers: [
        ScheduleRele1Service,
        ScheduleRele2Service,
        ScheduleRele3Service,
        ScheduleRele4Service,
        ScheduleRele5Service,
        ScheduleRele6Service,
        ScheduleRele7Service,
        ScheduleRele8Service,
    ],
    exports: [
        ScheduleRele1Service,
        ScheduleRele2Service,
        ScheduleRele3Service,
        ScheduleRele4Service,
        ScheduleRele5Service,
        ScheduleRele6Service,
        ScheduleRele7Service,
        ScheduleRele8Service,
    ],
})
export class StateScheduleModule { }
