import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'betenlaze' })
export class Betenlace {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cpCount: number;

  @Column()
  registeredCount: number;
}
