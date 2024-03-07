import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGamaDto } from './dto/create-gama.dto';
import { Gama } from './gama.entity';

@Injectable()
export class GamasService {
  constructor(
    @InjectRepository(Gama)
    private readonly gamaRepository: Repository<Gama>,  
  ){}

  async createGama(CreateGamaDto: CreateGamaDto): Promise<Gama> {
    const Gama = this.gamaRepository.create(CreateGamaDto);
    return this.gamaRepository.save(Gama)
  }
}