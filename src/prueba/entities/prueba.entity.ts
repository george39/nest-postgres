import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'prueba' })
export class Prueba {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  idLink: number;

  @Column('int')
  cpaPartner: number;

  @Column('int')
  cpaBetenlace: number;

  @Column('int')
  registeredCount: number;

  @Column('float')
  deposit: number;

  @Column('float')
  stake: number;

  @Column('float')
  revenueShare: number;

  @Column('int')
  firstDeposit: number;

  @Column('int')
  wagerineCount: number;

  @Column('float')
  netRevenue: number;

  @Column('float')
  depostPartner: number;

  @Column('int')
  registeredCountPartner: number;

  @Column('int')
  firstDepostiCountPartner: number;

  @Column('int')
  wageringCountPartner: number;
}
