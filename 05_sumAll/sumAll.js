const sumAll = function(num1, num2) {

//Error checks for negative numbers and non-numbers

    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }
    else if (typeof (num1) !=="number" || typeof (num2) !=="number" ) {
        return "ERROR"
    }

    else {

//Identify the lowest and highest number

    let startNum = Math.min(num1, num2)
    let maxNum = Math.max(num1, num2)

//create output variable set to 0

    let outputNum = 0

//Add each number from num1 to num2 to an output variable

    for (let i = startNum; i <= maxNum; i++) {
        outputNum += i
    }

//Return final output variable

    return outputNum

    }

};

// Do not edit below this line
module.exports = sumAll;
