import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Api } from 'src/shared/const';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Owners')
@Controller(`${Api.apiPrefix}owners`)
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) { }

}
