import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
/* Config */
import config from 'src/shared/config';

/* Services */
import { ApartmentsService } from './apartments.service';
import { OwnersService } from './infrastructure/owner/owners.service';
/* Controllers */
import { ApartmentsController } from './apartments.controller';
/* Entities */
import { Apartment } from './entities/apartment.entity';
import { Owner } from './infrastructure/owner/owner.entity';

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService, OwnersService],
  imports: [
    TypeOrmModule.forFeature([Apartment, Owner]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: config().database.habiDataBase.port,
      username: config().database.habiDataBase.username,
      password: config().database.habiDataBase.password,
      database: config().database.habiDataBase.database,
      synchronize: config().isDev ? true : false,
      autoLoadEntities: true,
      entities: [__dirname + "/entities/*.ts"]
    })
  ],
})
export class ApartmentsModule { }
