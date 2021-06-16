import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ReceitaDocument = Receita & Document;

@Schema()
export class Receita {
  @Prop()
  name: string;
  @Prop()
  desc: string;
  @Prop()
  Ingredientes: Array<string>;
  // @Prop()
  // preparo: {
  //   tempo: string;
  //   passos: Array<string>;
  // };
}

export const ReceitaSchema = SchemaFactory.createForClass(Receita);
