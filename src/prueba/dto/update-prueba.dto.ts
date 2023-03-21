import { PartialType } from '@nestjs/mapped-types';
import { DataDto } from './create-prueba.dto';

export class UpdatePruebaDto extends PartialType(DataDto) {}
