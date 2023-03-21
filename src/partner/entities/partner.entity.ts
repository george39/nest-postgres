import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';
@Entity()
export class Partner {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  title: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
