const hasAssets = (sequelize, Sequelize) => {
  const hasAsset = sequelize.define("hasassets", {
    hasAsset_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    asset_id: {
      type: Sequelize.INTEGER,
    },
    person_id: {
      type: Sequelize.INTEGER,
    },
  });

  return hasAsset;
};

export default hasAssets;
