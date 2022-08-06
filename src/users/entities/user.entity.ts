import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Message } from 'src/messages/entities/message.entity';

@Table
export class User extends Model<User> {
  @Column
  name: string;

  @Column
  password: string;

  @Column
  picture: string;

  @HasMany(() => Message)
  message: Message[];
}
