const Family = (sequelize, Sequelize) => {
  const Family = sequelize.define("family", {
    family_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    person1_id: {
      type: Sequelize.INTEGER,
    },
    person2_id: {
      type: Sequelize.INTEGER,
    },
    relationship_id: {
      type: Sequelize.INTEGER,
    },
  });

  return Family;
};

export default Family;
