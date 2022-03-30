import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {

  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) { }

  async create(createOwnerDto: CreateOwnerDto): Promise<CreateOwnerDto> {
    const ROwner = this.ownerRepository;

    const ownerCreated = await ROwner.save({
      id: createOwnerDto.id,
      name: createOwnerDto.name,
      email: createOwnerDto.email,
      phone: createOwnerDto.phone
    });

    return ownerCreated;
  }

  findAll() {
    return `This action returns all owners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

}
