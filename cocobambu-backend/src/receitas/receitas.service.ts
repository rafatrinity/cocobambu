import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita, ReceitaDocument } from './entities/receita.entity';

@Injectable()
export class ReceitasService {
  constructor(@InjectModel(Receita.name) private receitaModel: Model<ReceitaDocument>){}
  
  create(createReceitaDto: CreateReceitaDto) {
    const receita = new this.receitaModel(createReceitaDto);
    return receita.save();
  }

  findAll(): Promise<Receita[]> {    
    return this.receitaModel.find().exec();
  }

  findOne(id: string) {
    return `This action returns a #${id} receita`;
  }

  update(id: string, updateReceitaDto: UpdateReceitaDto) {
    return `This action updates a #${id} receita`;
  }

  remove(id: string) {
    return `This action removes a #${id} receita`;
  }
}
