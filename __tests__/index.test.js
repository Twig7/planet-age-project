import {calcAge} from ".././src/index.js";
describe('calcAge', () => {
let userAge;

  beforeEach(() => {
    userAge = new calcAge(10, 79);
  
})
test("should have calcAge return correct inputted age", () => {
  expect(userAge.age).toEqual(10);
})
test("should return age on jupiter if inputted earth age remains 10 years old", () => {
  userAge.planetAge();
  expect(userAge.jupiterAge).toEqual(0.84);
})
test("should return age on mars if inputted earth age remains 10 years old", () => {
userAge.planetAge();
expect(userAge.marsAge).toEqual(5.3);
})
})