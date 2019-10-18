// 1. Copy and paste your prototype in here and refactor into class syntax.
class Maker {
    constructor(attributes) {
        this.length = attributes.length,
        this.width = attributes.width,
        this.height = attributes.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * ( this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
  
const cub = new Maker ({
    length: '4',
    width: '5',
    height: '5'
  });
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cub.volume()); // 100
console.log(cub.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Maker{
    constructor(attributes){
    super(attributes);
    }
    cubeV() {
        return this.length * this.height * this.width;
      }
      cubeSA() {
        return 6 * this.width * this.height;
      }
}


const cubes = new CubeMaker ({
    length: '5',
    width: '5',
    height: '5'
})

console.log(cubes.cubeV()); //125
console.log(cubes.cubeSA()); //150