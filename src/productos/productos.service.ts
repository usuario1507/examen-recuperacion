import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {
  create(createProductoDto: CreateProductoDto) {
    return 'This action adds a new producto';
  }

  findAll() {
    return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
