import { Controller, Get, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()
    findAll(): string {
        return 'all properties';
    }

    @Post()
    create(): string {
        return 'create property';
    }

    
}


