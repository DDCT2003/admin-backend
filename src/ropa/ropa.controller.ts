import { Body, Controller, Post } from '@nestjs/common';
import { RopaService } from './ropa.service';

@Controller('ropa')
export class RopaController {
    constructor(private ropaService: RopaService) {}

    @Post()
    async create(@Body() createRopa: any) {
        return await this.ropaService.create(createRopa);
      }


}
