import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()
    findAll(): string {
        return 'all properties';
    }

    @Get(':id/:slug')
    findOne(@Param('id') id: string, @Param('slug') slug: string) {
        return `id = ${id}, slug = ${slug}`;
    }

    @Post()
    create(): string {
        return 'create property';
    }


}


