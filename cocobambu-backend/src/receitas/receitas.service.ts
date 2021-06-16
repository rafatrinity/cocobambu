import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Injectable()
export class ReceitasService {
  create(createReceitaDto: CreateReceitaDto) {
    return 'This action adds a new receita';
  }

  findAll() {
    return `This action returns all receitas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receita`;
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return `This action updates a #${id} receita`;
  }

  remove(id: number) {
    return `This action removes a #${id} receita`;
  }
}
