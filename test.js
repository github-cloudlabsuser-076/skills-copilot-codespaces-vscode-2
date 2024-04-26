function calculator(operation, num1, num2) {
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            console.log('Error: Division by zero is not allowed.');
            return;
        }
    } else {
        console.log('Error: Invalid operation. Please use add, subtract, multiply, or divide.');
        return;
    }

    console.log(`The result is ${result}`);
}

// Test the calculator function
calculator('add', 5, 3);       // Output: The result is 8
calculator('subtract', 5, 3);  // Output: The result is 2
calculator('multiply', 5, 3);  // Output: The result is 15
calculator('divide', 6, 3);    // Output: The result is 2
calculator('divide', 5, 0);    // Output: Error: Division by zero is not allowed.