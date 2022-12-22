const Relationship = (sequelize, Sequelize) => {
  const Relationship = sequelize.define("relationship", {
    relationship_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Relationship;
};

export default Relationship;
