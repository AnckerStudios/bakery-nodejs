module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("person", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    });
  
    return Person;
  };