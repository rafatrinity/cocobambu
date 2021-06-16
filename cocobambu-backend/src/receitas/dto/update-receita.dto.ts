import { PartialType } from '@nestjs/mapped-types';
import { CreateReceitaDto } from './create-receita.dto';

export class UpdateReceitaDto extends PartialType(CreateReceitaDto) {}
