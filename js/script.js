// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<1000 || num>1000000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1000 and 1000000.`;
    } else {
        // Remove any leading zeros
        num = parseInt(num);
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of all numbers, less then ${num}, which are palindromic in base 10 and base 2 is ${doubleBasePalindromes(num)}`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to check if the number n is a palindrome
function isPalindromes(n) {
    const nString = n.toString();
    for (let i=0;i<nString.length / 2;i++) {
        if (nString[i] !== nString[nString.length - i - 1]) return false;
    }
    return true;
}