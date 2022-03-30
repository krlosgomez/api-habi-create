import { OwnerDomain } from './../../domain/owner/owner';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOwnerDto } from './create-owner.dto';
import { Owner } from './owner.entity';
import ValidationException from 'src/shared/validations/validationError';
import { UniqueId } from 'src/shared/validations/uniqueId';

@Injectable()
export class OwnersService {

  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) { }

  async create(ownerDomain: OwnerDomain): Promise<Owner> {
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
