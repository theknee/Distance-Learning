function myFunction() {
    //Get the value of input field with id="numb"
    var val = document.getElementById("numb").value;

    //Get the element with id="demo"
    var elem = document.getElementById("demo");

    //If value is space or not a number
    if ((val.trim() == "") || isNaN(val)) {
        elem.innerHTML = "Not a Number";
    } else {
        elem.innerHTML = "Input OK";
    }
}