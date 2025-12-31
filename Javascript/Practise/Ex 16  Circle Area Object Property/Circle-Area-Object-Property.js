console.log("16-circle-area-object-read-only-property");

const circle = {
    name: 'miniCircle',
    lineColor: 'red',
    bgColor: 'green',
    radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log("circle.area:", circle.area); // 3.141592653589793

