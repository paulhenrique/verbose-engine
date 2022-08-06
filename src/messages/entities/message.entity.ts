import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class Message extends Model<Message> {
  @Column({
    allowNull: false,
  })
  userId: number;

  @Column({
    allowNull: false,
  })
  description: string;
}
