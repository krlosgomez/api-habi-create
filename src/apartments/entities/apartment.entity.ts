import { Owner } from 'src/owners/entities/owner.entity';
import { Entity, Column, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Apartment {
  @Column({
    primary: true,
    type: 'varchar'
  })
  id: string;

  @Column({
    type: 'float4'
  })
  area: number;

  @Column({
    type: 'int4'
  })
  number_rooms: number;

  @Column({
    type: 'float4'
  })
  price: number;

  @Column({
    type: 'varchar'
  })
  address: string;

  @Column({
    type: 'varchar'
  })
  location: string;

  @Column({
    type: 'varchar'
  })
  city: string;

  @CreateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_at: string;

  @ManyToOne(type => Owner, owner => owner.id)
  id_owner: string;
}
