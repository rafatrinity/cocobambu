import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasModule } from './receitas/receitas.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot(), 
    ReceitasModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7z8ht.mongodb.net/test`, { useNewUrlParser: true, dbName: 'cocobambu' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}