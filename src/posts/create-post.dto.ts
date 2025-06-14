import { ApiProperty } from '@nestjs/swagger';
import { PostStatus, PostVisibility } from './post.entity';

export class CreatePostsDto {
  @ApiProperty({ description: 'ID del módulo asociado al post' })
  moduleId!: number;

  @ApiProperty({ description: 'Título del post' })
  title: string = "";

  @ApiProperty({ description: 'Contenido del post' })
  content: string = "";

  @ApiProperty({ description: 'Ruta de las imágenes asociadas al post', type: [String], required: false })
  imagesPath: string[] = [];

  @ApiProperty({ description: 'Estado del post', enum: PostStatus, default: PostStatus.DRAFT })
  status: PostStatus = PostStatus.DRAFT;

  @ApiProperty({ description: 'Visibilidad del post', enum: PostVisibility, default: PostVisibility.PUBLIC })
  visibility: PostVisibility = PostVisibility.PUBLIC;

  @ApiProperty({ description: 'ID del creador del post' })
  userCreatorId!: number;

  @ApiProperty({ description: 'ID del editor del post', required: false })
  userEditorId!: number;

  @ApiProperty({ description: 'Fecha de creación del post', type: Date, required: false })
  createdAt!: Date;

  @ApiProperty({ description: 'Fecha de actualización del post', type: Date, required: false })
  updatedAt?: Date;
}