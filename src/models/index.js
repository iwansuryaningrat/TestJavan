import configs from "../configs/db.configs.js";
import Sequelize from "sequelize";

// DB connection Config
const sequelize = new Sequelize(configs.DB, configs.USER, configs.PASSWORD, {
  host: configs.HOST,
  port: configs.PORT,
  dialect: configs.dialect,
  operatorsAliases: false,
  pool: {
    max: configs.pool.max,
    min: configs.pool.min,
    acquire: configs.pool.acquire,
    idle: configs.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
import Person from "./person.model.js";
import hasAssets from "./hasAssets.model.js";
import Asset from "./assets.model.js";
import Family from "./family.model.js";
import Relationship from "./relationship.model.js";

// Insert Models to db
db.person = Person(sequelize, Sequelize);
db.hasAssets = hasAssets(sequelize, Sequelize);
db.asset = Asset(sequelize, Sequelize);
db.family = Family(sequelize, Sequelize);
db.relationship = Relationship(sequelize, Sequelize);

// Insert Relationships

// Person has many Assets
db.person.hasMany(db.hasAssets, {
  foreignKey: "person_id",
  as: "hasAssets",
});
db.hasAssets.belongsTo(db.person, {
  foreignKey: "person_id",
  as: "person",
});

// Person has many Families
db.person.hasMany(db.family, {
  foreignKey: "person1_id",
  as: "family",
});
db.family.belongsTo(db.person, {
  foreignKey: "person1_id",
  as: "person",
});

// Person2 has many Families
db.person.hasMany(db.family, {
  foreignKey: "person2_id",
  as: "family2",
});
db.family.belongsTo(db.person, {
  foreignKey: "person2_id",
  as: "person2",
});

// Relationship has many Families
db.relationship.hasMany(db.family, {
  foreignKey: "relationship_id",
  as: "family",
});
db.family.belongsTo(db.relationship, {
  foreignKey: "relationship_id",
  as: "relationship",
});

// Asset has many hasAssets
db.asset.hasMany(db.hasAssets, {
  foreignKey: "asset_id",
  as: "hasAssets",
});
db.hasAssets.belongsTo(db.asset, {
  foreignKey: "asset_id",
  as: "asset",
});

// Person has many Relationships

export default db;
