const passwordBox = document.getElementById('password');
const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%";

const allChars = lowerCase + upperCase + symbols + numbers;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
    password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
