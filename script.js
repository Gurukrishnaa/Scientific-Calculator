// Get references to the screen and all buttons
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// Function to append a value to the screen
function appendToScreen(value) {
    if (screen.value === "0") {
        screen.value = value;  // Replace 0 with the first input
    } else {
        screen.value += value;  // Append the value
    }
}

// Function to clear the screen
function clearScreen() {
    screen.value = "0";  // Reset the screen to 0
}

// Function to delete the last character
function backspc() {
    screen.value = screen.value.slice(0, -1);  // Remove the last character
    if (screen.value === "") {
        screen.value = "0";  // Ensure it doesn't go blank
    }
}

// Function to calculate and display the result
function calculateResult() {
    try {
        // Replace custom symbols with JavaScript operators
        let result = screen.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/π/g, Math.PI);
        screen.value = eval(result);  // Evaluate the expression
    } catch (error) {
        screen.value = "Error";  // Display error for invalid expressions
    }
}

// Event listener for all buttons
for (let item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        // Replace symbols with their JavaScript equivalents
        if (btntext == '×') {
            btntext = '*';
        } else if (btntext == '÷') {
            btntext = '/';
        }

        // Append the value to the screen
        appendToScreen(btntext);
    });
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendToScreen(key);
    } else if (key === '+') {
        appendToScreen('+');
    } else if (key === '-') {
        appendToScreen('-');
    } else if (key === '*') {
        appendToScreen('*');
    } else if (key === '/') {
        appendToScreen('/');
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspc();
    } else if (key === 'Escape') {
        clearScreen();
    } else if (key === '.') {
        appendToScreen('.');
    }
});

// Mathematical functions
function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    appendToScreen(Math.PI);
}

function e() {
    appendToScreen(Math.E);
}

// Factorial function
function fact() {
    let num = parseInt(screen.value);
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

// Backspace function (redefined to avoid conflicts)
function backspc() {
    screen.value = screen.value.slice(0, -1);
    if (screen.value === "") {
        screen.value = "0";
    }
}
