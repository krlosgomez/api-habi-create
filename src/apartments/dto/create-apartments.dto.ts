import { CreateApartmentDto } from './create-apartment.dto';
import { ApiProperty } from "@nestjs/swagger";

export class CreateApartmentsDto {
  @ApiProperty({ type: new Array(CreateApartmentDto) })
  apartmentsDto: CreateApartmentDto[];
}
