import { IsIn, IsNumber } from 'class-validator';

export class BetenlaceCpaDto {
  @IsNumber()
  cpaCount: number;

  // @IsNumber()
  // registeredCount: number;
}
