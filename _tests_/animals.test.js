const app = require('../app'); 
const Animal = require ('../models/Animal'); 
const request = require("supertest"); 
const mongoose = require('mongoose')
require('dotenv/config'); 



/////////////////////////////////////////  TESTING GET  OK
describe("GET / ", () => {
    test("It should respond with name of the two firsts animals", async () => {
      const response = await request(app).get("/animals");
      expect(response.body[0].name).toEqual("Flipper");
      expect(response.body[1].name).toEqual("Wally");
      expect(response.statusCode).toBe(200);
    });
  });

/////////////////////////////////////////////// TESTING POST OK 

describe("POST /animals", () => {
    test("It responds with the newly created animals", async () => {
      const newAnimal = await request(app)
        .post("/animals")
        .send({
          name: "Peanuts",
          description:"Loremp Ipsum",
          care:"Loremp Ipsum",
          isDead:true
        });
        expect(newAnimal.body).toHaveProperty("_id");
      expect(newAnimal.body.name).toBe("Peanuts");
      expect(newAnimal.body.description).toBe("Loremp Ipsum");
      expect(newAnimal.body.care).toBe("Loremp Ipsum");
      expect(newAnimal.body.isDead).toBe(true);
      expect(newAnimal.statusCode).toBe(200);

    });
  });


///////////////////////////////////////////// TESTING PATCH  

test("return an updated animal newly created",  async () => {

    const animal =  await Animal.create({
        name: "Albert",
        description:"ceci est une description",
        care:"ceci sont les soins à apporter",
        isDead:true
    })

    const data = {
        name: "Albertine",
        description:"il semblerait qu'Albert soit une femelle"
    }
        
    const response = await request(app)
        .patch("/animals/" + animal.id)
        .send(data)
            
    const newAnimal = await Animal.findOne({ _id: animal.id })
        expect(newAnimal).toBeTruthy()
        expect(newAnimal.name).toBe(data.name)
        expect(newAnimal.description).toBe(data.description)
})


///////////////////////////////////////////// TESTING DELETE OK 

test("DELETE /animals/:id", async () => {
	const animal =  Animal.create({
        name: "Albert",
        description:"Ceci est une description",
        care:"Ceci sont les soins à apporter",
        isDead:true
	})

    const response = await request(app)
		.delete("/animals/" + animal.id);
        expect(response.status).toBe(200);

    const animalToBeNotFound = await Animal.findOne({ _id: animal.id });
	    expect(animalToBeNotFound).toBe(null);
		
})