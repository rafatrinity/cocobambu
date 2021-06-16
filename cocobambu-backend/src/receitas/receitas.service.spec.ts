import { Test, TestingModule } from '@nestjs/testing';
import { ReceitasService } from './receitas.service';

describe('ReceitasService', () => {
  let service: ReceitasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceitasService],
    }).compile();

    service = module.get<ReceitasService>(ReceitasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
