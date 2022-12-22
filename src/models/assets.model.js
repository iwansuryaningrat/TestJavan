const Assets = (sequelize, Sequelize) => {
  const Assets = sequelize.define("assets", {
    asset_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
  });

  return Assets;
};

export default Assets;
