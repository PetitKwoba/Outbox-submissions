function divisible(num1, num2) {
    sum = (num1 + num2)
    if (sum % 3 == 0) {
        return ("Fiz");
    } else if (sum % 5 == 0) {
        return ("buzz");

    }
}

let res = divisible(3, 5);
console.log(res);