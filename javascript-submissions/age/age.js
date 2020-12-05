function determineCategory() {
    let yearOfBirth = parseInt(document.getElementById("date").value);
    let present = parseInt(document.getElementById("present").innerHTML = new Date().getFullYear());
    let age = (present) - (yearOfBirth);
    let yourAges = document.getElementById("yourAge");

    console.log("present year: " + present);
    console.log("your age: " + age);
    console.log("your year of birth is : " + yearOfBirth);

    if (yearOfBirth > present) {
        console.log("You cannot be born after the present year")
        yourAges.innerHTML = ("You cannot be born after the present year")
    } else if (age < 18) {
        console.log("minor")
        yourAges.innerHTML = ("Your Age is: " + age)
    } else if (age <= 36) {
        console.log("Youth")
        yourAges.innerHTML = ("Your Age is: " + age)
    } else {
        console.log("Elder")
        yourAges.innerHTML = ("Your Age is: " + age)
    }


};