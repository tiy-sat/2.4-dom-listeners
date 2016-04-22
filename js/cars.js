document.addEventListener("DOMContentLoaded", function(e){
  var carOutput = document.querySelector("[data-js='car-output']");
  var carMakes = document.querySelectorAll("[data-js='car-make']");
  var equateButton = document.querySelector("[data-js='equate']");
  var carType = document.querySelector("[data-js='car-type']");
  var numbers = ["", ""];
  var numbersString = "";
  var operator = "";

  function setCarOutputText(text){
    carOutput.textContent += text
  }

  // Person clicks on car make
  for (var i = 0; i < carMakes.length; i++) {
    carMakes[i].addEventListener("click", function(e){
      var value = e.currentTarget.dataset.number;
      setCarOutputText(value);
      numbersString += value;
      // if(operator === ""){
      //   numbers[0] += value;
      // }else{
      //   numbers[1] += value;
      // }

      console.log(numbers);
      // if(carOutput.textContent.length === 0){
      //   setCarOutputText(e.currentTarget.textContent)
      // }else {
      //   setCarOutputText(", " + e.currentTarget.textContent);
      // }
    });
  }

  carType.addEventListener("click", function(e){
    operator = e.currentTarget.dataset.type;
    numbersString += operator;
    setCarOutputText(e.currentTarget.textContent);
  });

  equateButton.addEventListener("click", function(e){
    var finishedNumber = eval(numbersString);
    carOutput.textContent = finishedNumber;
    console.log(numbersString);
  })

});
