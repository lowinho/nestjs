import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  FindAll(): string {
    return 'FindAll funcionando';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      message: `Find One ${id}`,
    };
  }

  @Post()
  create(@Body() data: any) {
    return {
      message: `Find One`,
      data: data,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return `Create funcionando ${data} e ${id}`;
  }
}
