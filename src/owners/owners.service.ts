import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UniqueId } from 'src/shared/validations/uniqueId';
import ValidationException from 'src/shared/validations/validationError';
import { Repository } from 'typeorm';
import { OwnerDomain } from './domain/owner';

import { CreateOwnerDto } from './dto/create-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {

  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) { }

  async create(ownerDomain: OwnerDomain): Promise<CreateOwnerDto> {
    const ROwner = this.ownerRepository;

    const itemFount = await this.findOne(ownerDomain.id);
    if (itemFount) {
      throw new ValidationException('El id del dueño del apartamento ya está registrado.');
    }

    const ownerCreated = await ROwner.save({
      id: ownerDomain.id.toString(),
      name: ownerDomain.name.toString(),
      email: ownerDomain.email.toString(),
      phone: ownerDomain.phone.toString()
    });

    return ownerCreated;
  }

  async findAll() {
    return await this.ownerRepository.find();
  }

  async findOne(id: UniqueId) {
    return await this.ownerRepository.findOne(id.toString());
  }

}
