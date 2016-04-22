document.addEventListener("DOMContentLoaded",
  function(e){
    // gives us reference to element on page
    var inputFirstName = document.querySelector("[data-js='input--firstName']");
    var inputLastName = document.querySelector("[data-js='input--lastName']");
    var form = document.querySelector("[data-js='form']");
    var outputElement = document.querySelector("[data-js='output--name']");

    var allInputs = document.querySelectorAll("input");

    console.log(allInputs);

    form.addEventListener("submit", function(e){
      var outputText = inputFirstName.value + " " + inputLastName.value;
      // use .innerHTML method when injecting more HTML
      // into elements
      // use .textContent method when injecting text... content
      outputElement.textContent = outputText;
      // prevented the page from going to what
      // is in the `action` attribute because
      // this is a form
      e.preventDefault();
    });


  }
);
