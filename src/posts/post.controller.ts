import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostsDto } from './create-post.dto';
import { Posts } from './post.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('posts') // Agrupar las rutas bajo 'posts'
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo post' })
  @ApiResponse({ status: 201, description: 'Post creado exitosamente', type: Post })
  async create(@Body() createPostDto: CreatePostsDto): Promise<Posts> {
    return this.postService.create(createPostDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un post específico' })
  @ApiResponse({ status: 200, description: 'Post encontrado', type: Post })
  async findOne(@Param('id') id: number): Promise<Posts | null> {
    return this.postService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un post' })
  @ApiResponse({ status: 200, description: 'Post actualizado', type: Post })
  async update(
    @Param('id') id: number,
    @Body() updatePostDto: CreatePostsDto,
  ): Promise<Posts | null> {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un post' })
  @ApiResponse({ status: 200, description: 'Post eliminado' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.postService.remove(id);
  }

  @Get('module/:moduleId')
  @ApiOperation({ summary: 'Listar posts por módulo' })
  @ApiResponse({ status: 200, description: 'Lista de posts', type: [Post] })
  async findByModule(@Param('moduleId') moduleId: number): Promise<Posts[] | null> {
    return this.postService.findByModule(moduleId);
  }
}
