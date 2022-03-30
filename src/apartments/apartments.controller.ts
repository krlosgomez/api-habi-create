import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/* Domains */
import { ApartmentDomain } from './domain/apartment';
import { OwnerDomain } from './domain/owner/owner';
/* Const */
import { Api } from 'src/shared/const';
/* Validations */
import { FlexibleLocation } from './../shared/validations/valueObject/flexibleLocation';
import ValidationException from 'src/shared/validations/validationError';
import { UniqueId } from 'src/shared/validations/uniqueId';
import { FlexibleName } from 'src/shared/validations/valueObject/flexibleName';
import { Email } from 'src/shared/validations/valueObject/email';
import { Phone } from 'src/shared/validations/valueObject/phone';
/* Services */
import { ApartmentsService } from './apartments.service';
import { OwnersService } from './infrastructure/owner/owners.service';
/* Dtos */
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { CountryCode } from 'src/shared/validations/valueObject/countryCode';
import { PositiveNumber } from 'src/shared/validations/valueObject/positiveNumber';
import { City } from 'src/shared/validations/valueObject/city';
import { Price } from 'src/shared/validations/valueObject/price';
import { PlainAddress } from 'src/shared/validations/valueObject/plainAddress';
import { CreateApartmentsDto } from './dto/create-apartments.dto';
import { Apartment } from './entities/apartment.entity';

@ApiTags('Apartments')
@Controller(`${Api.apiPrefix}apartments`)
export class ApartmentsController {
  constructor(
    private readonly apartmentsService: ApartmentsService,
    private readonly ownersService: OwnersService
  ) { }

  @Post()
  async create(@Body() createApartmentDto: CreateApartmentDto) {

    const apartmentFound = await this.apartmentsService.findOne(createApartmentDto.id);
    if (apartmentFound) {
      throw new ValidationException('El id del apartamento ya está registrado.');
    }

    const ownerToCreate: OwnerDomain = {
      id: new UniqueId(createApartmentDto.owner.id),
      name: new FlexibleName(createApartmentDto.owner.name),
      phone: new Phone(createApartmentDto.owner.phone, new CountryCode(createApartmentDto.owner.countryCode)),
      email: new Email(createApartmentDto.owner.email),
    };
    const ownerCreated = await this.ownersService.create(ownerToCreate);

    if (ownerCreated) {
      const apartmentToCreate: ApartmentDomain = {
        id: new UniqueId(createApartmentDto.id),
        area: new PositiveNumber(createApartmentDto.area),
        address: new PlainAddress(createApartmentDto.address),
        city: new City(createApartmentDto.city),
        location: new FlexibleLocation(createApartmentDto.location),
        number_rooms: new PositiveNumber(createApartmentDto.number_rooms),
        price: new Price(createApartmentDto.price),
        id_owner: new UniqueId(ownerCreated.id),
      };
      return this.apartmentsService.create(apartmentToCreate);
    } else {
      throw new ValidationException('No fue posible registrar el dueño del apartamento.');
    }

  }

  @Post('array')
  async createArray(@Body() createApartmentsDto: CreateApartmentsDto) {

    const apartmentsCreated: Apartment[] = [];
    for (const createApartmentDto of createApartmentsDto.apartmentsDto) {

      const apartmentFound = await this.apartmentsService.findOne(createApartmentDto.id);
      if (apartmentFound) {
        throw new ValidationException('El id del apartamento ya está registrado.');
      }

      let ownerFound = await this.ownersService.findOne(new UniqueId(createApartmentDto.owner.id));
      if (!ownerFound) {
        const ownerToCreate: OwnerDomain = {
          id: new UniqueId(createApartmentDto.owner.id),
          name: new FlexibleName(createApartmentDto.owner.name),
          phone: new Phone(createApartmentDto.owner.phone, new CountryCode(createApartmentDto.owner.countryCode)),
          email: new Email(createApartmentDto.owner.email),
        };
        ownerFound = await this.ownersService.create(ownerToCreate);
      }

      if (ownerFound) {
        const apartmentToCreate: ApartmentDomain = {
          id: new UniqueId(createApartmentDto.id),
          area: new PositiveNumber(createApartmentDto.area),
          address: new PlainAddress(createApartmentDto.address),
          city: new City(createApartmentDto.city),
          location: new FlexibleLocation(createApartmentDto.location),
          number_rooms: new PositiveNumber(createApartmentDto.number_rooms),
          price: new Price(createApartmentDto.price),
          id_owner: new UniqueId(ownerFound.id),
        };
        apartmentsCreated.push(await this.apartmentsService.create(apartmentToCreate));
      } else {
        throw new ValidationException('No fue posible registrar el dueño del apartamento.');
      }
    }
    return apartmentsCreated;

  }

}
