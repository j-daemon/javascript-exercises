const leapYears = function(yearArg) {

    if (yearArg % 4 == 0) {
        if (yearArg % 100 == 0 && yearArg % 400 == 0) {
            return true
        }
        else if (yearArg % 100 == 0) {
            return false
        }
        
        return true
    }

    else {
        return false
    }


};

// Do not edit below this line
module.exports = leapYears;
