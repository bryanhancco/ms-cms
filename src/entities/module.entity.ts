import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum ModuleType {
  VIDEO = 'video',
  TEXT = 'text',
  EXERCISE = 'exercise',
  TEST = 'test',
}

@Entity('modules')
export class Module {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del módulo' })
  id!: number;

  @Column()
  @ApiProperty({ description: 'ID del curso al que pertenece el módulo' })
  courseId!: number;

  @Column({ length: 100 })
  @ApiProperty({ description: 'Nombre del módulo' })
  name!: string;

  @Column({
    type: 'enum',
    enum: ModuleType,
  })
  @ApiProperty({ description: 'Tipo de módulo', enum: ModuleType })
  type!: ModuleType;

  @Column()
  @ApiProperty({ description: 'Orden de visualización del módulo' })
  displayOrder!: number;
}
