$(document).ready(function() {
  $("form").submit(function(event) {

    var side1 = parseFloat($("#firstInput").val());
    var side2 = parseFloat($("#secondInput").val());
    var side3 = parseFloat($("#thirdInput").val());
    console.log(side1);
    console.log(side2);
    console.log(side3);
    
    if (side1 > 0 && side2 > 0 && side3 > 0) {
     
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
      
    } else {
      console.log("error"); 
    }

    event.preventDefault();
  });
});