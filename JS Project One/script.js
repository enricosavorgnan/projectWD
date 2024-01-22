const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

let inputIsPalindrome = false;      //Flag (true if input is palindrome)


const isPalindrome = cleanedInput => {
  for (let i=0; i<=Math.round(cleanedInput.length/2); i++){
    if (cleanedInput[i] !== cleanedInput[cleanedInput.length-1-i]) {
      return false; } }
  return true; }


const cleanUserInput = () => {
  const cleanedInput = userInput.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  return cleanedInput; }


const sendResult = () => {
  let resultMessage = `${userInput.value} ${inputIsPalindrome ? 'is' : 'is not'} a palindrome`;
  const newP = document.createElement("p");
  newP.innerHTML = resultMessage;
  resultDiv.replaceChildren();
  resultDiv.appendChild(newP);
  resultDiv.classList.remove('hidden'); }


const checkInput = () => {
  if (userInput.value === ""){
    alert("Please input a value");
    return
  } else if (userInput.value.length === 1){
    inputIsPalindrome = true;
    sendResult(userInput.value, inputIsPalindrome);
  } else {
    const cleanedInput = cleanUserInput();
    inputIsPalindrome = isPalindrome(cleanedInput);
    sendResult(inputIsPalindrome);
  } }


checkButton.addEventListener("click", checkInput)