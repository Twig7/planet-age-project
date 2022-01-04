import { parse } from "@babel/core";

export class calcAge {
  constructor(age, earthExpect) {
    this.age = age;
    this.earthExpect = earthExpect;
    this.jupiter = 11.86;
    this.mars = 1.88;
    this.mercury = 0.24;
    this.venus = 0.62;
  }
  planetAge() {
    this.jupiterAge = parseFloat((this.age / this.jupiter).toFixed(2)); 
    this.marsAge = parseFloat((this.age / this.mars).toFixed(1));
    this.mercuryAge = parseFloat((this.age / this.mercury).toFixed(1));
    this.venusAge = parseFloat((this.age / this.venus).toFixed(1));
  }
  planetExpect() {
    this.jupiterExpect = parseFloat((this.earthExpect / this.jupiter).toFixed(2));
    this.mercuryExpect = parseFloat((this.earthExpect / this.mercury).toFixed(1));
    this.marsExpect = parseFloat((this.earthExpect / this.mars).toFixed(1));
    this.venusExpect = parseFloat((this.earthExpect / this.venus).toFixed(1));
  }
  lifeRemain() {
    this.earthRemain = parseFloat((this.earthExpect - this.age).toFixed(1));
    this.jupiterRemain = parseFloat((this.earthRemain / this.jupiter).toFixed(1));
    this.marsRemain = parseFloat((this.earthRemain / this.mars).toFixed(1));
    this.mercuryRemain = parseFloat((this.earthRemain / this.mercury).toFixed(1));
    this.venusRemain  = parseFloat((this.earthRemain / this.venus).toFixed(1));
  }
  lifePassed() {
    if (this.age > this.earthExpect) {
      this.earthPassed = parseInt((this.age - this.earthExpect).toFixed(1));
      this.jupiterPassed = parseFloat(((this.age - this.earthExpect) / this.jupiter).toFixed(1));
    }
  }
}
