import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';

@Module({
  controllers: [ReceitasController],
  providers: [ReceitasService]
})
export class ReceitasModule {}
