const removeFromArray = function(arr, ...targets) {

    const newArr = [];
    for (let item of arr){
        let testFlag = Boolean(false);
        for (let i = 0; i < targets.length; i++){
            if (item === targets[i]){
                testFlag = true;
            }
        }
        if (!testFlag) newArr.push(item);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
