

$(document).ready(function() {
  $("form").submit(function(event) {

    var triangleType = "";
    $("#triangleType").remove();

    var side1 = parseFloat($("#firstInput").val());
    var side2 = parseFloat($("#secondInput").val());
    var side3 = parseFloat($("#thirdInput").val());
    
    if (side1 > 0 && side2 > 0 && side3 > 0) {
     
      if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
        triangleType = "not triangle";

      } else {

        if ((side1 === side2) && (side1 === side3)) {
          triangleType = "equilateral";
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
          triangleType = "isosceles";
        } else {
          triangleType = "scalene";
        }

      }
      
    } else {
      console.log("error"); 
      triangleType = "Please make sure all fields are filled out with a number greater than zero.";
    }

    $("form").after(`<p id="triangleType">${triangleType}</p>`);

    event.preventDefault();
  });
});