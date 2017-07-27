'use strict'
class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthYearInSeconds = 31557600;

    this.earthOrbitalPeriods = {
      earth: 1,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
    }
  }

  age(planet) {
    const age = Number(this.seconds / (this.earthOrbitalPeriods[planet] * this.earthYearInSeconds)).toFixed(2);
    return +age; //toFixed returns a string value, so we cast back to a number here
  }

  onEarth() {
    return this.age('earth');
  }

  onMercury() {
    return this.age('mercury');
  }

  onVenus() {
    return this.age('venus');
  }

  onMars() {
    return this.age('mars');
  }

  onJupiter() {
    return this.age('jupiter');
  }

  onSaturn() {
    return this.age('saturn');
  }

  onUranus() {
    return this.age('uranus');
  }

  onNeptune() {
    return this.age('neptune');
  }
}

module.exports = SpaceAge;
