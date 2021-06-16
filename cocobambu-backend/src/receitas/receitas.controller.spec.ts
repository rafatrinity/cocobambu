import { Test, TestingModule } from '@nestjs/testing';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';

describe('ReceitasController', () => {
  let controller: ReceitasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceitasController],
      providers: [ReceitasService],
    }).compile();

    controller = module.get<ReceitasController>(ReceitasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
