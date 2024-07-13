const removeFromArray = function(userArray, ...args) {   
    
    resultantArray = []

    for (let item of userArray) {
        if (args.indexOf(item) >= 0) {
            continue;
        }
        else {
            resultantArray.push(item);
        }
    }   

    return resultantArray
}

// Do not edit below this line
module.exports = removeFromArray;
