import { ApiProperty } from "@nestjs/swagger";
import { CreateOwnerDto } from "../infrastructure/owner/create-owner.dto";

export class CreateApartmentDto {
  @ApiProperty({ uniqueItems: true, description: 'Uuid v4' })
  id: string;
  @ApiProperty()
  area: number;
  @ApiProperty()
  number_rooms: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  address: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  city: string;
  @ApiProperty()
  owner?: CreateOwnerDto;
  id_owner: string;
}
