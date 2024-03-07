import { Controller, Post, Body  } from '@nestjs/common';
import { GamasService } from './gamas.service';
import { CreateGamaDto } from './dto/create-gama.dto';

@Controller('Gama')
export class GamasController {
  constructor(private readonly gamasService: GamasService) {}

  @Post()
  async createGama(@Body() createGamaDto: CreateGamaDto) {
    return this.gamasService.createGama(createGamaDto)
  }
}
