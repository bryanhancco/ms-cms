import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Module } from '../entities/module.entity';
import { User } from '../entities/user.entity';
import { forwardRef } from '@nestjs/common';

// Definir el tipo ENUM para el estado del post
export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
  DELETED = 'deleted',
}

// Definir el tipo ENUM para la visibilidad del post
export enum PostVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

@Entity('posts')
export class Posts {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del post' })
  id!: number;

  @Column({ name: 'module_id' })
  @ApiProperty({ description: 'ID del módulo asociado al post' })
  moduleId!: number;

  @Column('text')
  @ApiProperty({ description: 'Título del post' })
  title: string = "";

  @Column('text')
  @ApiProperty({ description: 'Contenido del post en formato texto (Markdown)' })
  content: string = "";

  @Column('text', { name: "images_path", array: true, nullable: true })
  @ApiProperty({ description: 'Ruta de las imágenes asociadas al post', type: [String] })
  imagesPath: string[] = [];

  @Column({
    type: 'enum',
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  @ApiProperty({ description: 'Estado del post', enum: PostStatus })
  status: PostStatus = PostStatus.DRAFT;

  @Column({
    type: 'enum',
    enum: PostVisibility,
    default: PostVisibility.PUBLIC,
  })
  @ApiProperty({ description: 'Visibilidad del post', enum: PostVisibility })
  visibility: PostVisibility = PostVisibility.PUBLIC;

  @Column({ name: 'user_creator_id' })
  @ApiProperty({ description: 'ID del creador del post' })
  userCreatorId!: number;

  @Column({ name: 'user_modifier_id', nullable: true })
  @ApiProperty({ description: 'ID del último modificador del post', nullable: true })
  userModifierId?: number;

  @Column({ name: "draft_create_datetime", type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({ description: 'Fecha de creación del post', type: String })
  draftCreateDatetime: Date = new Date();

  @Column({ name: "draft_modify_datetime", type: 'timestamp', nullable: true })
  @ApiProperty({ description: 'Fecha de la última modificación del draft', type: String, nullable: true })
  draftModifyDatetime?: Date;

  @Column({ name: "schedule_datetime", type: 'timestamp', nullable: true })
  @ApiProperty({ description: 'Fecha de programación del post', type: String, nullable: true })
  scheduleDatetime?: Date;

  @Column({ name: "publish_datetime", type: 'timestamp', nullable: true })
  @ApiProperty({ description: 'Fecha de publicación del post', type: String, nullable: true })
  publishDatetime?: Date;

  @Column({ name: "archive_datetime", type: 'timestamp', nullable: true })
  @ApiProperty({ description: 'Fecha de archivo del post', type: String, nullable: true })
  archiveDatetime?: Date;

  @Column({ name: "delete_datetime", type: 'timestamp', nullable: true })
  @ApiProperty({ description: 'Fecha de eliminación del post', type: String, nullable: true })
  deleteDatetime?: Date;
}
