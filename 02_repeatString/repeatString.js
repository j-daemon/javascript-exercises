const repeatString = function(string, num) {
    
    resultString = ""

// return ERROR if negative

    if (num < 0) {
        resultString = "ERROR"
        return resultString
    }

// for loop for all numbers above 0
    else if (num >= 0) {
        for (let i = num; i > 0; i--) {
            resultString = resultString.concat(string)
        };
    
        return resultString
    };
   
};

// Do not edit below this line
module.exports = repeatString;
