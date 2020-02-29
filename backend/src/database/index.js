import Sequelize, { Model } from 'sequelize';
import database_config from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';

const models = [User, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(database_config);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
