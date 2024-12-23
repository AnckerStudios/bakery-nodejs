module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("persons", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
    });
  
    return Person;
  };