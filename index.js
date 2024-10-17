const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculator() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function sqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

function sin() {
    try {
        display.value = Math.sin(toRadians(eval(display.value)));
    } catch (error) {
        display.value = "Error";
    }
}

function cos() {
    try {
        display.value = Math.cos(toRadians(eval(display.value)));
    } catch (error) {
        display.value = "Error";
    }
}

function tan() {
    try {
        display.value = Math.tan(toRadians(eval(display.value)));
    } catch (error) {
        display.value = "Error";
    }
}

function log() {
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = "Error";
    }
}

function factorial() {
    try {
        let num = eval(display.value);
        display.value = factorialCalc(num);
    } catch (error) {
        display.value = "Error";
    }
}

function factorialCalc(n) {
    if (n === 0 || n === 1) return 1;
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}

function power() {
    display.value += "**";
}

function power2() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (error) {
        display.value = "Error";
    }
}

function percent() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}

function inverse() {
    try {
        display.value = 1 / eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}
