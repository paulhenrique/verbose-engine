import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.entity';
import { Message } from '../messages/entities/message.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: '../database/database.sqlite',
      });
      sequelize.addModels([User, Message]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
