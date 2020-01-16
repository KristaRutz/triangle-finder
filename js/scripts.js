var side1 = parseFloat($(".side1").val());
var side2 = parseFloat();
var side3 = parseFloat();


if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
  console.log("not triangle");
} else {
  if ((side1 === side2) && (side1 === side3)) {
    console.log("equilateral");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("isosceles");
  } else {
    console.log("scalene");
  }
}