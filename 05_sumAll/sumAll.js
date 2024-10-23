const sumAll = function(a, b) {
    let sum = 0;

    if (Math.floor(a) !== a || Math.floor(b) !== b){
        return 'ERROR';
    }

    if (a < 0 || b < 0){
        return 'ERROR';
    }

    if (a > b){
        const temp = a;
        a = b;
        b = temp;
    }

    for (let i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
