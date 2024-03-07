import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { GamasModule } from './gamas/gamas.module';

@Module({
  imports: [ProductosModule, GamasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
