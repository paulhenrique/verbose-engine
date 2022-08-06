import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Message } from 'src/messages/entities/message.entity';

@Table
export class User extends Model<User> {
  @Column({
    allowNull: false,
  })
  name: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column({
    allowNull: false,
  })
  picture: string;

  @HasMany(() => Message)
  message: Message[];
}
