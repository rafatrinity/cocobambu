import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateReceitaDto } from "./dto/create-receita.dto";
import { UpdateReceitaDto } from "./dto/update-receita.dto";
import { Receita, ReceitaDocument } from "./entities/receita.entity";

@Injectable()
export class ReceitasService {
  constructor(
    @InjectModel(Receita.name) private receitaModel: Model<ReceitaDocument>
  ) {}

  create(createReceitaDto: CreateReceitaDto) {
    const receita = new this.receitaModel(createReceitaDto);
    return receita.save();
  }

  findAll(): Promise<Receita[]> {
    return this.receitaModel.find().exec();
  }

  findOne(id: string) {
    return this.receitaModel.findById(id);
  }
  
  update(id: string, updateReceitaDto: UpdateReceitaDto) {
    return this.receitaModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateReceitaDto },
      { new: true }
    );
  }

  remove(id: string) {
    return this.receitaModel.deleteOne({_id:id})
  }
}
