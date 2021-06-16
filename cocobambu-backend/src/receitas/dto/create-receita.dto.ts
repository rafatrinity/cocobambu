export class CreateReceitaDto {
    name: string;
    desc: string;
    Ingredientes: Array<string>;
    preparo: {
        tempo: string;
        passos: Array<string>;
    }
}

