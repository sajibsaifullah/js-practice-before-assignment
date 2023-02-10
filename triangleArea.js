function triangleArea(side1, side2, side3) {
    let semiPerimeter = (side1 + side2 + side3) / 2;
    // console.log(semiPerimeter);
  let areaOfTriangle = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );
  return parseFloat(areaOfTriangle.toFixed(2));
}
const result = triangleArea(8, 11, 13);
console.log(result);
