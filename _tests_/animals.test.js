const app = require('../app'); 
const Animal = require ('../models/Animal'); 
const request = require("supertest"); 


///////////////////////////////////////////  TESTING GET  OK
// describe("GET / ", () => {
//     test("It should respond with an array of products", async () => {
//       const response = await request(app).get("/products");
//       expect(response.body[0]).toHaveProperty("_id");
//       expect(response.body[1]).toHaveProperty("title");
//       expect(response.statusCode).toBe(200);
//     });
//   });

/////////////////////////////////////////////// TESTING POST OK 

// describe("POST /animals", () => {
//     test("It responds with the newly created animals", async () => {
//       const newAnimal = await request(app)
//         .post("/animals")
//         .send({
//           name: "test animal",
//           description:"est ce que ça passe ?",
//           care:"on croise les doigts",
//           isDead:true
//         });
//         expect(newAnimal.body).toHaveProperty("_id");
//       expect(newAnimal.body.name).toBe("test animal");
//       expect(newAnimal.body.description).toBe("est ce que ça passe ?");
//       expect(newAnimal.body.care).toBe("on croise les doigts");
//       expect(newAnimal.body.isDead).toBe(true);
//       expect(newAnimal.statusCode).toBe(200);

//     });
//   });


///////////////////////////////////////////// TESTING PATCH OK 

// test("PATCH /animals/:id",  () => {

// 	const animal =  Animal.create({
//         name: "test animal",
//         description:"est ce que ça passe ?",
//         care:"on croise les doigts",
//         isDead:true
// 	})

// 	const data = {
//         name: "mon nouvel animal youpi",
//         description:"est ce que ça passe aujourd'hui ou ça fait comme hier?"
// 	}
    
//     request(app)

// 		.patch("/animals/" + animal.id)
// 		.send(data)
// 		.expect(200)
// 		.then((response) => {
// 			// Check the response
//             console.log(response.body.type); 
// 			expect(response.body._id).toBe(animal._id)
//             expect(response.body.name).toBe(data.name)
//             expect(response.body.description).toBe(data.description)

// 			// Check the data in the database
// 			// const newAnimal = await Animal.findOne({ _id: response.body._id })
// 			// expect(newAnimal).toBeTruthy()
// 			// expect(newAnimal.title).toBe(data.name)
// 			// expect(newAnimal.content).toBe(data.description)
// 		})
// })

///////////////////////////////////////////// TESTING DELETE OK 

// test("DELETE /animals/:id", () => {
// 	const animal =  Animal.create({
//         name: "test animal",
//         description:"est ce que ça passe ?",
//         care:"on croise les doigts",
//         isDead:true
// 	})

// 	 request(app)
// 		.delete("/animals/" + animal.id)
// 		.expect(204)
// 		.then( () => {
// 			expect(Animal.findOne({ _id: post.id })).toBeFalsy()
// 		})
// })