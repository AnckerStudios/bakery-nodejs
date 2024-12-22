module.exports = app => {
    const persons = require("../controllers/person.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", persons.create);
  
    // Retrieve all Tutorials
    router.get("/", persons.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", persons.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", persons.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", persons.delete);
  
    app.use('/api/persons', router);
  };