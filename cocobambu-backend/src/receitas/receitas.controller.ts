import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';

@Controller('receitas')
export class ReceitasController {
  constructor(private readonly receitasService: ReceitasService) {}

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitasService.create(createReceitaDto);
  }

  @Get()
  findAll() {
    return this.receitasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.receitasService.update(+id, updateReceitaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitasService.remove(+id);
  }
}
