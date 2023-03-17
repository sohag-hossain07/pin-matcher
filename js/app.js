// get 4 digit pin
function getPin() {
  const pin = generatePin();
  if (pin > 1000 && pin <= 9999) {
    return pin;
  } else {
    return getPin();
  }
}

// generate pin by clicking generate pin button
function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  return pin;
}

// generate pin button
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const inputArea = document.getElementById("display-pin");
  inputArea.value = pin;
  inputArea.style.textAlign = "right";
});

const inputField = document.getElementById("typed-numbers");
// set pin
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const digit = event.target.innerText;
    const previousPin = inputField.value;
    if (isNaN(digit)) {
      if (digit === "C") {
        inputField.value = "";
      } else if (digit === "<") {
        const splitPin = previousPin.split("");
        splitPin.pop();
        const remainingDigit = splitPin.join("");
        inputField.value = remainingDigit;
      }
    } else {
      const newTypedPin = previousPin + digit;
      inputField.value = newTypedPin;
    }
  });

// verify pin button
document.getElementById("verify-pin").addEventListener("click", function () {
  const pin = document.getElementById("display-pin").value;
  const pinFailure = document.getElementById("pin-failure");
  const pinSuccess = document.getElementById("pin-success");
  if (pin == inputField.value) {
    pinSuccess.style.display = "block";
    pinFailure.style.display = "none";
  } else {
    pinSuccess.style.display = "none";
    pinFailure.style.display = "block";
  }

  //   clear input field
  inputField.value = "";
});
