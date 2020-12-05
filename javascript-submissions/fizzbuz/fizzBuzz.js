function fizBuzz(string1, string2) {
    let value1 = document.getElementById("fizz").value;
    let value2 = document.getElementById("buzz").value;
    let outPuts = document.getElementById("outPut");

    console.log(value1);
    console.log(value2);
    value1Length = parseInt(value1.length);

    console.log("The length of first string is: " + value1Length);
    value2Length = parseInt(value2.length);
    console.log("The length of second string is: " + value2Length);

    totalLegnth = (value1Length + value2Length);
    console.log("totalLegnth: " + totalLegnth);

    if (totalLegnth % 3 === 0) {
        console.log("Fiz")
        outPuts.innerHTML = ("Fiz")
    } else if (totalLegnth % 5 === 0) {
        console.log("Buz")
        outPuts.innerHTML("Buzz")
    } else if (totalLegnth % 3 == 0 && totalLegnth % 5 == 0) {
        console.log("fizBuzz")
        outPuts.innerHTML = ("FizzBuzz")
    } else {
        console.log("neither divisble by 3 or 9")
    }
    return (fizBuzz);

};