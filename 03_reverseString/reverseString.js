const reverseString = function(string) {
    let counter = string.length - 1
    let outputString = ""

    for (let i = counter; i >=0; i--) {
        outputString += string.charAt(i)
    }

    return outputString
};

// Do not edit below this line
module.exports = reverseString;
