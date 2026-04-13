function reverseNumber() {
    let num = document.getElementById("num").value;

    if (num === "") {
    document.getElementById("result").innerText = "Please enter a number!";
    return;
    }
     let reversed = 0;
    let original = num;
    num = parseInt(num);
    while (num > 0) {
     let digit = num % 10;
     reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
    }
    document.getElementById("result").innerText =
        "Reversed Number: " + reversed;
}