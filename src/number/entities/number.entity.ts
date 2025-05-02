import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NumberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;
}
