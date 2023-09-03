// Function to calculate and print the area of a rectangle
function areaofrec(length, width) {
  const area = length * width;
  console.log("Rectangle Area:", area);
}

// Function to calculate and print the area of a circle
function areaofcircle(radius) {
  const area = 3.14159 * (radius * radius); // Approximating pi as 3.14159
  console.log("Circle Area:", area);
}

// Function to calculate and print the area of a triangle
function areaoftran(base, height) {
  const area = (base * height) / 2;
  console.log("Triangle Area:", area);
}
// Function to calculate and print the area of a square
function areaofsqure(side) {
  const area = side * side;
  console.log("Square Area:", area);
}

// Function to calculate and print the surface area of a cylinder
function areaofcylender(radius, height) {
  const pi = 3.14159;
  const lateralSurfaceArea = 2 * pi * radius * height;
  const topBaseArea = pi * (radius * radius);
  const bottomBaseArea = pi * (radius * radius);

  const totalSurfaceArea = lateralSurfaceArea + topBaseArea + bottomBaseArea;

  console.log("Cylinder Surface Area:", totalSurfaceArea);
}

areaofcylender(4, 8);
areaofrec(5, 8);
areaofcircle(3);
areaoftran(4, 6);
areaofsqure(67);
