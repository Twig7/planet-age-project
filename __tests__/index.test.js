import {calcAge} from ".././src/index.js";
describe('calcAge', () => {
let userAge;

  beforeEach(() => {
    userAge = new calcAge(10, 79);
  
})
test("should have calcAge return correct inputted age", () => {
  expect(userAge.age).toEqual(10);
});
})