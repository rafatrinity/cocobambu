import { Module } from "@nestjs/common";
import { ReceitasService } from "./receitas.service";
import { ReceitasController } from "./receitas.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Receita, ReceitaSchema } from "./entities/receita.entity";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Receita.name, schema: ReceitaSchema }]),
  ],
  controllers: [ReceitasController],
  providers: [ReceitasService],
})
export class ReceitasModule { }
