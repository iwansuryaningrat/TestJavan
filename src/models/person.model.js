const Person = (sequelize, Sequelize) => {
  const Person = sequelize.define("person", {
    person_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
  });

  return Person;
};

export default Person;
