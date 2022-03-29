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

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createOwnerDto: CreateOwnerDto): Promise<CreateOwnerDto> {
    return await this.ownersService.create(createOwnerDto);
  }

  @Get()
  findAll() {
    return this.ownersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownersService.update(+id, updateOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownersService.remove(+id);
  }
}
