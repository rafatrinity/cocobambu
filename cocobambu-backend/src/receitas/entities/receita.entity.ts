import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReceitaDocument = Receita & Document;

class Preparo {
  tempo: string;
  passos: Array<string>;
}
@Schema()
export class Receita {
  @Prop()
  nome: string;
  @Prop()
  desc: string;
  @Prop()
  Ingredientes: Array<string>;
  @Prop()
  preparo: Preparo;
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);
