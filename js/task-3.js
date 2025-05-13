// input
const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input",()=>{
    
    const trimInput = input.value.trim();

    nameOutput.textContent = trimInput === "" ? "Anonymous" : trimInput;

})
