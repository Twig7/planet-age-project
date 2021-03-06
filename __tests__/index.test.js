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
test("should return life expect on mercury if earth expect is 79 years old", () => {
  userAge.planetExpect();
  expect(userAge.mercuryExpect).toEqual(329.2)
})
test("should return life expect on mars if earth expect is 79 years old", () => {
  userAge.planetExpect();
  expect(userAge.marsExpect).toEqual(42)
})
test("should return life expect on venus if earth expect is 79 years old", () => {
  userAge.planetExpect();
  expect(userAge.venusExpect).toEqual(127.4)
})
test("should return years of life remaining on earth if earth age remains 10 years old", () => {
userAge.lifeRemain();
expect(userAge.earthRemain).toEqual(69)
})
test("should return years of life remaining on jupiter if userAge remains 10 years old", () => {
  userAge.lifeRemain();
  expect(userAge.jupiterRemain).toEqual(5.8)
})
test("should return years of life remaining on mars if userAge remains 10 years old", () => {
  userAge.lifeRemain();
  expect(userAge.marsRemain).toEqual(36.7)
})
test("should return years of life reamining on mercury if userAge remains 10 yrs", () => {
  userAge.lifeRemain();
  expect(userAge.mercuryRemain).toEqual(287.5)
})
test("should return years of life remaining on venus if userAge reamins 10 yrs", () => {
  userAge.lifeRemain();
  expect(userAge.venusRemain).toEqual(111.3)
})
})
describe('calcAge', () => {
  let userOldage;
  beforeEach(() => {
    userOldage = new calcAge(200, 79);
  });
  test("should return years lived past expactancy on earth", () => {
    userOldage.lifePassed();
    expect(userOldage.earthPassed).toEqual(121)
  })
  test("should return years lived past expectancy on jupiter", () => {
    userOldage.lifePassed();
    expect(userOldage.jupiterPassed).toEqual(10.2)
  })
  test("should return years lived past expectancy on mars", () => {
    userOldage.lifePassed();
    expect(userOldage.marsPassed).toEqual(64.4)
  })
  test("should return years lived past expectancy on mercury", () => {
    userOldage.lifePassed();
    expect(userOldage.mercuryPassed).toEqual(504.2)
  })
  test("should return years lived past expectancy on venus", () => {
    userOldage.lifePassed();
    expect(userOldage.venusPassed).toEqual(195.1)
  })
})