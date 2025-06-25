import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { ModuleEntity } from './module.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ModuleService } from './module.service';

@ApiTags('modules')
@Controller('modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get('')
  @ApiOperation({ summary: 'Listar módulos' })
  @ApiResponse({ status: 200, description: 'Lista de módulos', type: [ModuleEntity] })
  async listAll(): Promise<ModuleEntity[]> {
    return this.moduleService.listAll();
  }

  @Post('')
  @ApiOperation({ summary: 'Crear un nuevo módulo' })
  @ApiResponse({ status: 201, description: 'Módulo creado exitosamente', type: ModuleEntity })
  async create(@Body() createModuleDto: ModuleEntity): Promise<ModuleEntity> {
    return this.moduleService.create(createModuleDto);
  }
}
