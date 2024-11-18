import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ropa } from './schemas/ropa.schema';

@Injectable()
export class RopaService {
  constructor(@InjectModel(Ropa.name) private usuarioModel: Model<Ropa>) {}


  async create(ropa: any){
    const newRopa = new this.usuarioModel(ropa);
    return await newRopa.save();
  }


}
