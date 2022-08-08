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

/* 
    Function to check if the number n is a palindrome
    n can be in base 10 or base 2
*/
function isPalindromes(n) {
    const nString = n.toString();
    for (let i=0;i<nString.length / 2;i++) {
        if (nString[i] !== nString[nString.length - i - 1]) return false;
    }
    return true;
}

/*
    Function to return the sum of all numbers, less than n, which are palindromic in bose 10 and base 2.
    doubleBasePalindromes(1000)    returns 1772
    doubleBasePalindromes(50000)   returns 105795
    doubleBasePalindromes(500000)  returns 286602
    doubleBasePalindromes(1000000) returns 872187

*/
function doubleBasePalindromes(n) {
    let sum = 0;
    for (let i=1;i<n;i++) {
        if (isPalindromes(i) && isPalindromes(i.toString(2))) sum += i;
    }
    return sum;
}