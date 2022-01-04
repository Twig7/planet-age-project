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
test("should return age on mercury if inputted earth age remains 10 years old", () => {
  userAge.planetAge();
  expect(userAge.mercuryAge).toEqual(41.7)
})
test("should return age on venus if inputted earth age remains 10 years old", () => {
  userAge.planetAge();
  expect(userAge.venusAge).toEqual(16.1)
})
test("should return life expectancy on jupiter if earth expectancy is 79 years old", () => {
  userAge.planetExpect();
  expect(userAge.jupiterExpect).toEqual(6.66)
})
})