# Project Euler 036 - Double-Base Palindromes

The decimal number, 585 = 1001001001<sub>2</sub> (binary), is palindromic in both bases.

Find the sum of all numbers, less than n, whereas n is between 1000 and 1000000, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

Information at [Project Euler 036](https://projecteuler.net/problem=36)

## UX

**Getting Started**

Enter a whole number between 1000 and 1000000 (e.g. 1000) and click on the Submit Button.
You will see the sum of all numbers less than the number, which are palindromic in base 10 and base 2, unless
you have made an invalid input.  For example, if you submitted 1000, you would expect to get 1772.
Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 1000 or greater than 1000000
- Entering a number that is not an integer

As a user, I expect the function `doubleBasePalindromes(1000)` to return a number.

As a user, I expect the function `doubleBasePalindromes(1000)` to return 1772.

As a user, I expect the function `doubleBasePalindromes(50000)` to return 105795.

As a user, I expect the function `doubleBasePalindromes(500000)` to return 286602.

As a user, I expect the function `doubleBasePalindromes(1000000)` to return 872187.

(User Stories on function `doubleBasePalindromes(n)` 
taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 036](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-36-double-base-palindromes))

**Information Architecture**

The function `doubleBasePalindromes(n)` returns a number, where `n` is a number between 1000 and 1000000.

## Features

Allows the user to enter a number, as well as getting the sum of all numbers less than the number,
which are palindromic in base 10 and base 2.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-036) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)