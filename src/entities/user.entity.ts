import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Posts } from '../posts/post.entity';  // Relación con la entidad 'Post'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único del usuario' })
  id!: number;

  @Column({ length: 100 })
  @ApiProperty({ description: 'Nombre del usuario' })
  name!: string;

  @Column({ length: 100, unique: true })
  @ApiProperty({ description: 'Correo electrónico del usuario' })
  email!: string;

  @Column({ length: 255 })
  @ApiProperty({ description: 'Contraseña del usuario' })
  password!: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'ID del rol del usuario', nullable: true })
  roleId!: number;

  @Column({ default: false })
  @ApiProperty({ description: 'Indica si la autenticación multifactor (MFA) está habilitada' })
  mfaEnabled!: boolean;
}
