import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ValidationException from 'src/shared/validations/validationError';
import { Repository } from 'typeorm';
import { ApartmentDomain } from './domain/apartment';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { Apartment } from './entities/apartment.entity';

@Injectable()
export class ApartmentsService {

  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) { }

  async create(apartmentDomain: ApartmentDomain): Promise<Apartment> {
    const RApartment = this.apartmentRepository;

    const apartmentFount = await this.findOne(apartmentDomain.id.toString());
    if (apartmentFount) {
      throw new ValidationException('El id del apartamento ya está registrado.');
    }

    const apartmentCreated = await RApartment.save({
      id: apartmentDomain.id.toString(),
      area: apartmentDomain.area.value,
      address: apartmentDomain.address.toString(),
      city: apartmentDomain.city.toString(),
      location: apartmentDomain.location.toString(),
      number_rooms: apartmentDomain.number_rooms.value,
      price: apartmentDomain.price.value,
      id_owner: apartmentDomain.id_owner.toString()
    });

    return apartmentCreated;
  }

  findAll() {
    return `This action returns all apartments`;
  }

  async findOne(id: string) {
    return await this.apartmentRepository.findOne(id);
  }

}
