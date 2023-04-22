const removeFromArray = function(arr, ...args) {
    return arr.filter((i) => {
        return !args.includes(i)
    })
};

// Do not edit below this line
module.exports = removeFromArray;
