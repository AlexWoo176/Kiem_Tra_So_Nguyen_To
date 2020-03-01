function checkPrime(number) {
    if (number < 2) {
        return false;
    }
    let i;
    for(i = 2; i < number; i++){
        if(number%i ==0){
            return false;
        }
    }
    return true;
}
function inputPrime() {
    let inputNum = parseInt(prompt("Input Number here:"));
    for (let i = 0; i <= inputNum; i++){
        if(checkPrime(i)){
            document.write(i + " ");
        }
    }
}