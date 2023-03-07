import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => UserEntity, { nullable: false, eager: true })
  user: UserEntity;

  @ManyToOne(() => PostEntity, { nullable: false, eager: true })
  post: PostEntity;

  @CreateDateColumn({ type: 'timestamp' })
  createdatt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedatt: Date;
}
