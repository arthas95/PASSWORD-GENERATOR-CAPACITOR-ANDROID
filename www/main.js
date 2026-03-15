let lebody = document.querySelector("body");


const input = document.getElementById("length");
input.style.color = "#333";
const button = document.getElementById("generate");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const result = document.getElementById("passwordResult");
result.style.display = "none";

button.addEventListener("click", () => {
    event.preventDefault();
    let length = input.value;
    let password = generatePassword(length);
    alert(password);
    result.value = password;
    
});


function generatePassword(length){
    let charset = "";
    let options = [
        "abcdefghijklmnopqrstuvwxyz",
         "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
         "0123456789",
         "!@#$%^&*"
    ];
if (includeLowercase.checked) {
    charset += options[0];
}
if (includeUppercase.checked) {
    charset += options[1];
}
if (includeNumbers.checked) {
    charset += options[2];
}
if (includeSymbols.checked) {
    charset += options[3];
}

    let password = "";
    for (let i = 0; i<length;i++){
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    result.style.color = "#333";
    result.style.display = "block";
    return password;
}