import { Controller, Get, Param, Post, Body, HttpCode } from '@nestjs/common';

@Controller('property')
export class PropertyController {

    @Get()
    findAll(): string {
        return 'all properties';
    }

    @Get(':id/:slug')
    findOne(@Param('id') id, @Param('slug') slug) {
        return `id = ${id}, slug = ${slug}`;
    }

    @Post()
    @HttpCode(202)
    create(@Body("name") name) {
        return name ;
    }


}


