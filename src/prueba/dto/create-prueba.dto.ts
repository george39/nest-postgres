import { IsArray, IsNumber, IsPositive, IsString } from 'class-validator';

export class DataDto {
  @IsArray()
  data: CreatePruebaDto[];
}

export class CreatePruebaDto {
  @IsString()
  idLink: number;

  @IsNumber()
  @IsPositive()
  cpaPartner: number;

  @IsNumber()
  @IsPositive()
  cpaBetenlace: number;

  @IsNumber()
  @IsPositive()
  registeredCount: number;

  @IsNumber()
  deposit: number;

  @IsNumber()
  stake: number;

  @IsNumber()
  revenueShare: number;

  @IsNumber()
  firstDeposit: number;

  @IsNumber()
  @IsPositive()
  wagerineCount: number;

  @IsNumber()
  netRevenue: number;

  @IsNumber()
  depostPartner: number;

  @IsNumber()
  @IsPositive()
  registeredCountPartner: number;

  @IsNumber()
  @IsPositive()
  firstDepostiCountPartner: number;

  @IsNumber()
  @IsPositive()
  wageringCountPartner: number;
}
