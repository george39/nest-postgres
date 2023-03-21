import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class CreatePartnerDto {
  @IsString()
  title: string;

//   @IsDate()
//   @Type(() => Date)
//   createdAt: Date;
}
