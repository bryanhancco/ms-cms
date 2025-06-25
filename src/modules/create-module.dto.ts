import { ApiProperty } from '@nestjs/swagger';
import { ModuleEntity, ModuleType } from './module.entity';

export class CreateModuleDto {
  @ApiProperty({ description: 'ID del curso al que pertenece el módulo' })
  courseId!: number;

  @ApiProperty({ description: 'Nombre del módulo' })
  name: string = "";

  @ApiProperty({ description: 'Tipo de módulo', enum: ModuleType })
  type: ModuleType = ModuleType.TEXT;

  @ApiProperty({ description: 'Orden de visualización del módulo' })
  displayOrder: number = 0;
}
