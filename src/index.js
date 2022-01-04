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
  }
}
