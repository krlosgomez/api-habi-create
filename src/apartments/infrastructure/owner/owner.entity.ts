import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Owner {
  @Column({
    primary: true,
    type: 'varchar'
  })
  id: string;

  @Column({
    type: 'varchar'
  })
  name: string;

  @Column({
    type: 'varchar'
  })
  phone: string;

  @Column({
    type: 'varchar'
  })
  email: string;

  @CreateDateColumn({
    type: 'date',
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_at: string;
}
